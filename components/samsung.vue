<template lang="pug">

  .message-wrapper(ref="messageBox")
    ul.messages#messages(ref="messages")
      //- santa1
      li.message(v-if="$store.state.santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Samsung
        p Ich bin’s, der Samichlous. Vor mir liegt mein goldenes Buch, und darin stehen lauter Sachen über dich.
      //- santa2
      li.message(v-if="$store.state.santaMsgs.includes('santa2')")
        p Bist du bereit?
      //- santa2b
      li.message(v-if="$store.state.santaMsgs.includes('santa2b')")
        p Besser jetzt, du Weihnachtsmuffel?
        p (Das Feature "mehr Schnee" hat übrigens zusätzliche 250 Lappen gekostet..)
      //- santa3
      li.message(v-if="$store.state.santaMsgs.includes('santa3')")
        img(src="https://media.giphy.com/media/5KuPVqoVRvQcg/giphy.gif")
      //- santa4
      li.message(v-if="$store.state.santaMsgs.includes('santa4')")
        p Gut, in meinem Buche steht geschrieben…
        p dass ihr von Samsung ganz schön viele Projekte hattet dieses Jahr. Und mit der Olympia-Kampagne bleibt ihr sportlich bis zum Schluss! Herzliche Gratulation, aber die Sportlichkeit kauf ich euch nicht ganz ab….
      //- santa6
      li.message(v-if="$store.state.santaMsgs.includes('santa6')")
        p Lirum, Larum, Löffelstiel
        p Patrick sagt, er raucht nicht viel
        p nur ab und zu, mal hier mal dort
        p "Gelegentlich" sein Zauberwort
        p Mitnichten, weit und breit!
        p Patrick, hier steht, DU RAUCHST BEI JEDER MÖGLICHEN GELEGENHEIT!
      //- santa7
      li.message(v-if="$store.state.santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="$store.state.santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Und weiter geht’s im Text…
      //- santa8
      li.message(v-if="$store.state.santaMsgs.includes('santa8')")
        p Eine kurze Frage an Fabian Fehr:
        p Sag mal, wo hast du eigentlich all deine Brillen her? 
        p Hat Fielmann euren Claim geklaut? #SwitchNow
      //- santa11
      li.message(v-if="$store.state.santaMsgs.includes('santa11')")
        p Und Sandra
        img(src="~assets/img/emoji/rose.png")
      //- santa12
      li.message(v-if="$store.state.santaMsgs.includes('santa12')")
        p Hey Sandra
        img(src="~assets/img/emoji/rose.png")
      //- santa13
      li.message(v-if="$store.state.santaMsgs.includes('santa13')")
        p Hier steht, du schaust ganz schön oft den Bachelor auf 3+.
        p Verehrst ihn mit jedem Kuss.

      //- typing...
      li.message(v-if="$store.state.santaIsTyping === true")
        .bottemp.waiting
          .typing-container
            span.circle
            span.circle
            span.circle

    //- actions
    //- handleAction([message to add], [button text], [skip an action: boolean], [autoLoad the next msg: array to autoload])
    .responses(v-if="$store.state.santaActions === 1")
      button.response(@click="handleAction('santa3', 'Ich hab nichts zu befürchten', true, ['santa4'])") Ich hab nichts zu befürchten
      button.response(@click="handleAction('santa2b', 'Ich bin noch nicht in Weihnachtsstimmung', false)") Ich bin noch nicht in Weihnachtsstimmung
    .responses(v-if="$store.state.santaActions === 2")
      button.response(@click="handleAction('santa3', 'Jetzt bin ich bereit', false, ['santa4'])") Jetzt bin ich bereit
    .responses(v-if="$store.state.santaActions === 3")
      button.response(@click="handleAction('santa6', 'Oh! Erzähl mir weiter…', false, ['santa7'])") Oh! Erzähl mir weiter…
    .responses(v-if="$store.state.santaActions === 4")
      button.response(@click="handleAction('santa7', 'Mach weiter, Nikolaus!', false, ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'])") Mach weiter, Nikolaus!
      button.response(@click="handleAction('santa7b', 'Stop! Sami, schliess das Buch!', false, ['santa7b','santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'])") Stop! Sami, schliess das Buch!
</template>

<script>

export default {
  data () {
    return {
      nextLoad: 'buttons',
      loadId: ''
    }
  },
  methods: {
    insertAfter (referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
    },
    handleAction (val, txt, skip, autoload) {
      console.log('current action count: ' + this.$store.state.santaActions)
      let self = this
      let autoNext = autoload
      let nextActionsCounter
      let value = val
      let text = txt
      console.log('what is skip?: ' + skip)

      // santa types
      this.$store.state.santaIsTyping = true

      // should I do more snow?
      if (value === 'santa2b') {
        console.log('more snow')
        this.$emit('addSnow')
      }

      // append my response

      let msgCount = document.getElementsByClassName('message').length
      let div = document.getElementsByClassName('message')[msgCount - 1]
      let li = document.createElement('li')
      li.innerHTML = '<span>' + text + '</span>'
      li.classList = 'message me'
      this.insertAfter(div, li)
      // remove the buttons
      this.$store.state.santaActions = 0
      // if autoNext is a number
      if (autoNext) {
        this.$store.state.santaActions = 0
        self.$store.state.santaIsTyping = true
        console.log('I should load this one: ' + value)
        setTimeout(function () {
          self.$store.state.santaMsgs.push(value)
          self.$store.state.santaIsTyping = false
          self.$store.state.santaActions = nextActionsCounter
          console.log('current action count: ' + self.$store.state.santaActions)
        }, 2000)
        console.log('whom to autoload: ' + autoNext)
        let maxDelay = autoNext.length * 2000 + 2000
        console.log(maxDelay)
        for (const [index, value] of autoNext.entries()) {
          console.log(index, value)
          self.$store.state.santaIsTyping = true
          console.log('typing: ' + self.$store.state.santaIsTyping)
          let delay = 2000 + ((index + 1) * 2000)
          setTimeout(function () {
            let msgL = value
            self.$store.state.santaMsgs.push(msgL)
            self.$store.state.santaIsTyping = false
            console.log('current action count: ' + self.$store.state.santaActions)
          }, delay)
          // set the longest poss delay for showing the buttons:
          setTimeout(function () {
            if (skip === true) {
              nextActionsCounter = self.$store.state.santaActions + 2
            } else {
              nextActionsCounter = self.$store.state.santaActions + 1
            }
          }, maxDelay)
        }
      } else {
        console.log('I should load this one: ' + value)
        self.$store.state.santaIsTyping = true
        setTimeout(function () {
          self.$store.state.santaMsgs.push(value)
          self.$store.state.santaIsTyping = false
          if (skip === true) {
            console.log('which action now:' + self.$store.state.santaActions)
            nextActionsCounter = self.$store.state.santaActions + 2
          } else {
            nextActionsCounter = self.$store.state.santaActions + 1
          }
          console.log('current action count: ' + self.$store.state.santaActions)
        }, 2000)
      }
    }
  },
  updated () {
    console.log('updated!')
  }
}
</script>

<style lang="scss" scoped>

</style>
