<template lang="pug">

  .message-wrapper(ref="messageBox")
    ul.messages(ref="messages")
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

    .responses
      a.response(v-for="button in $store.state.responses" :data-redirect="button.redirect") 
        button.button {{button.text}}
</template>

<style lang="scss" scoped>

</style>
