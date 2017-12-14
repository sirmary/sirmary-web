<template lang="pug">

  .message-wrapper(ref="messageBox")
    ul.messages#messages(ref="messages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Samsung
        p Ich bin’s, der Samichlous. Vor mir liegt mein goldenes Buch, und darin stehen lauter Sachen über dich.
      //- santa2
      li.message(v-if="santaMsgs.includes('santa2')")
        p Bist du bereit?
      //- santa2b
      li.message(v-if="santaMsgs.includes('santa2b')")
        p Besser jetzt, du Weihnachtsmuffel?
        p (Das Feature "mehr Schnee" hat übrigens zusätzliche 250 Lappen gekostet..)
      //- santa3
      li.message(v-if="santaMsgs.includes('santa3')")
        img(src="https://media.giphy.com/media/5KuPVqoVRvQcg/giphy.gif")
      //- santa4
      li.message(v-if="santaMsgs.includes('santa4')")
        p Gut, in meinem Buche steht geschrieben…
        p dass ihr von Samsung ganz schön viele Projekte hattet dieses Jahr. Und mit der Olympia-Kampagne bleibt ihr sportlich bis zum Schluss! Herzliche Gratulation, aber die Sportlichkeit kauf ich euch nicht ganz ab….
      //- santa6
      li.message(v-if="santaMsgs.includes('santa6')")
        p Lirum, Larum, Löffelstiel
        p Patrick sagt, er raucht nicht viel
        p nur ab und zu, mal hier mal dort
        p "Gelegentlich" sein Zauberwort
        p Mitnichten, weit und breit!
        p Patrick, hier steht, DU RAUCHST BEI JEDER MÖGLICHEN GELEGENHEIT!
      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Und weiter geht’s im Text…
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Eine kurze Frage an Fabian Fehr:
        p Sag mal, wo hast du eigentlich all deine Brillen her? 
        p Hat Fielmann euren Claim geklaut? #SwitchNow
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Und Sandra
        img(src="~assets/img/emoji/rose.png")
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Hey Sandra
        img(src="~assets/img/emoji/rose.png")
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
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
    //- handleAction([message to add], [button text], [skip an action: boolean], [autoLoad the next msg: array to autoload], [nextActions])
    .responses(v-if="santaActions === 1")
      button.response(@click="handleAction('santa3', 'Ich hab nichts zu befürchten', true, ['santa4'], 3)") Ich hab nichts zu befürchten
      button.response(@click="handleAction('santa2b', 'Ich bin noch nicht in Weihnachtsstimmung', false, false, 2)") Ich bin noch nicht in Weihnachtsstimmung
    .responses(v-if="santaActions === 2")
      button.response(@click="handleAction('santa3', 'Jetzt bin ich bereit', false, ['santa4'], 3)") Jetzt bin ich bereit
    .responses(v-if="santaActions === 3")
      button.response(@click="handleAction('santa6', 'Oh! Erzähl mir weiter…', false, ['santa7'], 4)") Oh! Erzähl mir weiter…
    .responses(v-if="santaActions === 4")
      button.response(@click="handleAction('santa7', 'Mach weiter, Nikolaus!', false, ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], 5)") Mach weiter, Nikolaus!
      button.response(@click="handleAction('santa7b', 'Stop! Sami, schliess das Buch!', false, ['santa7b','santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], 6)") Stop! Sami, schliess das Buch!
</template>

<script>

export default {
  data () {
    return {
      santaActions: this.$store.state.santaActions,
      santaIsTyping: this.$store.state.santaIsTyping,
      santaMsgs: this.$store.state.santaMsgs,
      nextActionsCounter: 0,
      test: 'hi i am test'
    }
  },
  methods: {
    insertAfter (referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
    },
    handleAction (val, txt, skip, autoload, next) {
      console.log('what now the next action?: ' + this.nextActionsCounter)
      this.nextActionsCounter = next
      this.santaActions = 0
      // santa types
      this.santaIsTyping = true

      // should I do more snow?
      if (val === 'santa2b') {
        console.log('more snow')
        this.$emit('addSnow')
      }

      // append my response

      let msgCount = document.getElementsByClassName('message').length
      let div = document.getElementsByClassName('message')[msgCount - 1]
      let li = document.createElement('li')
      li.innerHTML = '<span>' + txt + '</span>'
      li.classList = 'message me'
      this.insertAfter(div, li)
      // remove the buttons
      this.santaActions = 0
      // if autoNext is a number
      if (autoload) {
        console.log('auto next is true...')
        this.santaActions = 0
        this.santaIsTyping = true
        console.log('I should load this one: ' + val)
        setTimeout(() => {
          this.santaMsgs.push(val)
          this.santaIsTyping = false
          console.log('next actions counter (inside autoload set time): ' + this.nextActionsCounter)
          // this.santaActions = this.nextActionsCounter
          console.log('current action count: ' + this.santaActions)
        }, 2000)
        console.log('whom to autoload: ' + autoload)
        let maxDelay = 2000 + (autoload.length * 2000)
        console.log('max delay: ' + maxDelay)
        for (const [index, value] of autoload.entries()) {
          console.log(index, value)
          this.santaIsTyping = true
          this.santaActions = 0
          let delay = 2000 + ((index + 1) * 2000)
          setTimeout(() => {
            let msgL = value
            this.santaMsgs.push(msgL)
            this.santaIsTyping = false
            console.log('current action count: ' + this.santaActions)
          }, delay)
          // set the longest poss delay for showing the buttons:
          setTimeout(() => {
            console.log('shoul show the buttons now...')
            console.log(skip)
            console.log('santa actions right before the skip if: ' + this.santaActions)
            this.santaActions = this.nextActionsCounter
            console.log('now I have set the santaACtion to: ' + this.santaActions)
          }, maxDelay)
        }
      } else {
        console.log('auto next is false...')
        console.log('I should load this one: ' + val)
        this.santaActions = 0
        this.santaIsTyping = true
        setTimeout(() => {
          this.santaMsgs.push(val)
          this.santaIsTyping = false
          this.santaActions = this.nextActionsCounter
          console.log('current action count: ' + this.santaActions)
        }, 2000)
      }
      console.log('now at the end of the function, what is the next action: ' + this.nextActionsCounter)
    }
  },
  mounted () {
    setTimeout(() => {
      this.santaActions = 1
    }, 4000)
  }
}
</script>

<style lang="scss" scoped>

</style>
