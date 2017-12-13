<template lang="pug">

  .message-wrapper(ref="messageBox")
    ul.messages#messages(ref="messages")
      li.message(v-if="$store.state.santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          p Hallo Samsung
          p Ich bin’s, der Samichlous. Vor mir liegt mein goldenes Buch, und darin stehen lauter Sachen über dich.
      li.message(v-if="$store.state.santaMsgs.includes('santa2')")
        p Bist du bereit?
      li.message(v-if="$store.state.santaMsgs.includes('santa2b')")
        p Besser jetzt, du Weihnachtsmuffel?
        p (Das Feature "mehr Schnee" hat übrigens zusätzliche 250 Lappen gekostet..)
      li.message(v-if="$store.state.santaMsgs.includes('santa3')")
        img(src="https://media.giphy.com/media/5KuPVqoVRvQcg/giphy.gif")
      li.message(v-if="$store.state.santaMsgs.includes('santa4')")
        p Gut, in meinem Buche steht geschrieben…
        p dass ihr von Samsung ganz schön viele Projekte hattet dieses Jahr. Und mit der Olympia-Kampagne bleibt ihr sportlich bis zum Schluss! Herzliche Gratulation, aber die Sportlichkeit kauf ich euch nicht ganz ab….
      li.message(v-if="$store.state.santaIsTyping === true")
        .bottemp.waiting
          .typing-container
            span.circle
            span.circle
            span.circle
    .responses(v-if="$store.state.santaActions === 1")
      button.response(@click="handleAction('santa3', 'Yes')") Yes
      button.response(@click="handleAction('santa4', 'No')") No

</template>

<script>

export default {
  methods: {
    insertAfter (referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
    },
    handleAction (val, txt) {
      let self = this
      console.log('handling Action:')
      console.log(val, txt)
      this.$store.state.santaIsTyping = true
      let value = val
      let text = txt
      let msgCount = document.getElementsByClassName('message').length
      let div = document.getElementsByClassName('message')[msgCount - 1]
      let li = document.createElement('li')
      li.innerHTML = text
      li.classList = 'message me'
      this.insertAfter(div, li)
      // let text = txt
      setTimeout(function () {
        self.$store.state.santaMsgs.push(value)
        self.$store.state.santaIsTyping = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
