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
        
      //- typing...
      li.message(v-if="$store.state.santaIsTyping === true")
        .bottemp.waiting
          .typing-container
            span.circle
            span.circle
            span.circle

    //- actions
    //- handleAction([message to add], [button text], [skip an action: boolean], [autoLoad the next msg: num of msgs to autoload])
    .responses(v-if="$store.state.santaActions === 1")
      button.response(@click="handleAction('santa3', 'Ich hab nichts zu befürchten', true, 1)") Ich hab nichts zu befürchten
      button.response(@click="handleAction('santa2b', 'Ich bin noch nicht in Weihnachtsstimmung')") Ich bin noch nicht in Weihnachtsstimmung
    .responses(v-if="$store.state.santaActions === 2")
      button.response(@click="handleAction('santa3', 'Jetzt bin ich bereit', false, 1)") Jetzt bin ich bereit
    .responses(v-if="$store.state.santaActions === 3")
      button.response(@click="handleAction('santa6', 'Oh! Erzähl mir weiter…', false, 1)") Oh! Erzähl mir weiter…
    .responses(v-if="$store.state.santaActions === 4")
      button.response(@click="handleAction('santa7', 'Mach weiter, Nikolaus!', false, 10)") Mach weiter, Nikolaus!
      button.response(@click="handleAction('santa7b', 'Stop! Sami, schliess das Buch!', false, 10)") Stop! Sami, schliess das Buch!
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
      if (skip === true) {
        nextActionsCounter = this.$store.state.santaActions + 2
      } else {
        nextActionsCounter = this.$store.state.santaActions + 1
      }
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
        console.log('how many to autoload: ' + autoNext)
        setTimeout(function () {
          self.$store.state.santaMsgs.push(value)
          self.$store.state.santaIsTyping = false
          if (autoNext) {
            self.$store.state.santaIsTyping = true
            setTimeout(function () {
              self.$store.state.santaMsgs.push(autoNext)
              self.$store.state.santaIsTyping = false
              self.$store.state.santaActions = nextActionsCounter
              console.log('current action count: ' + self.$store.state.santaActions)
            }, 2000)
          }
        }, 2000)
      } else {
        setTimeout(function () {
          self.$store.state.santaMsgs.push(value)
          self.$store.state.santaIsTyping = false
          self.$store.state.santaActions = nextActionsCounter
          console.log('current action count: ' + self.$store.state.santaActions)
        }, 2000)
      }
    }
  },
  updated () {
    console.log('updated!')
    console.log(this.nextLoad)
    console.log(this.loadId)
  }
}
</script>

<style lang="scss" scoped>

</style>
