<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Swisslos
        p Ich bin’s, der Samichlous. 
        p Vor mir liegt auf meinem Tisch 
        p mein goldenes Buch voll Sachen über dich.
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
        p Gut
        p In meinem Buche steht, es macht die Runde,
        p ihr seid SiR MaRYs Lieblingskunde.
        p 
        p Doch habt ihr euch auch gut benommen?
        p Ich sag’s euch, dafür bin ich hergekommen.
      //- santa6
      li.message(v-if="santaMsgs.includes('santa6')")
        p Yannick Zehnder bist du da!
        p Olé Olé Olé – Olala!
        p 
        p Du hast Talent, bist sehr bekannt.
        p Sogar ein EVZ Stürmer ist nach dir benannt.
      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Yannick, mach weiter X’en am richtigen Fleck.
        p Dein Samichlausspruch? Hmm, du darfst weg.
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        img(src="~/assets/img/emoji/tongue.png")
      //- santa20
      li.message(v-if="santaMsgs.includes('santa20')")
        p Ho! Ho! Ho!
        p Übrigens, kennt ihr dieses Weihnachtslied?
      //- santa21
      li.message(v-if="santaMsgs.includes('santa21')")
        img(src="https://media.giphy.com/media/lWIMWLL1KWj6g/giphy.gif")
      //- santa23
      li.message(v-if="santaMsgs.includes('santa23')")
        p Die Richtige Antwort: Ihr Kinderlein kommet 
          img(src="~/assets/img/emoji/tears.png")
      //- santa24
      li.message(v-if="santaMsgs.includes('santa24')")
        p Wer nid gumped isch kein Matthias? 
        p Mein Buch weiss auch zum Fussballfan was!
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p Harte Zeiten sind’s genau,
        p Winterpause hat rot blau.
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Mach was aus der spielfreien Zeit
        p Singtraining und Gemütlichkeit.
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p Zieh deine Schlüsse und mach dich bereit,
        p für die einzige Basler Überlegenheit.
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Rolf, dich will ich nicht vergessen,
        p hast auch immer brav in Meetings gesessen.
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Mein Buch sagt, du seist voll parat,
        p stets mit den längsten Briefings am Start.
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Kein Detail vergisst du - sei es noch so klein,
        p Seitenlang schleicht sich nicht 1 Fehler ein.
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Bewundernswert, doch ein Rat noch:
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Hab trotz schwerem Gasfuss acht
        p auf dem Rücksitz deine wichtigste Fracht.
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Swisslos Team, jetzt müsst ihr euch entscheiden: Wart ihr artig dieses Jahr? 
        p Ob ihr wirklich richtig steht, seht ihr wenn der Tab aufgeht.



    //- actions
    //- handleAction([message to add], [button text], [autoLoad the next msg: array to autoload],[custom delay], [nextActions])
    .responses(v-if="santaActions === 1")
      button.response(@click="$emit('handleAction', 'santa3', 'Ich hab nichts zu befürchten',['santa4'], [7000], 3)") Ich hab nichts zu befürchten
      button.response(@click="$emit('handleAction','santa2b', 'Ich bin noch nicht in Weihnachtsstimmung', null, null, 2)") Ich bin noch nicht in Weihnachtsstimmung
    .responses(v-if="santaActions === 2")
      button.response(@click="$emit('handleAction','santa3', 'Jetzt bin ich bereit', ['santa4'], [7000], 3)") Jetzt bin ich bereit
    .responses(v-if="santaActions === 3")
      button.response(@click="$emit('handleAction','santa6', 'Oh! Erzähl mir weiter…', ['santa7'], [12000], 4)") Oh! Erzähl mir weiter…
    .responses(v-if="santaActions === 4")
      
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa11','santa20','santa21'], [4000, 12000, 14000, 15000], 5)") Mach weiter, Nikolaus!
      
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8', 'santa11','santa20','santa21'], [4000, 12000, 14000, 15000], 5)") Stop! Sami, schliess das Buch!
    
    .responses(v-if="santaActions === 5")                                                                                                                                                                        
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!', ['santa25','santa26', 'santa27', 'santa28', 'santa30'], [4000, 6000, 8500,11240, 13400], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Einer fehlt!',['santa32','santa33','santa34','santa35','santa36','santa37'], [3000,6500,10000,13500,16000,20000], 8)") Ja! Einer fehlt!
    .responses(v-if="santaActions === 8")
      button.response(@click="$emit('handleEmail')") Wir waren super!
      button.response(@click="$emit('handleAmazon')") Wir müssen uns verbessern
</template>

<script>

export default {
  props: [
    'santaActions',
    'santaIsTyping',
    'santaMsgs',
    'nextActionsCounter'
  ]
}
</script>
