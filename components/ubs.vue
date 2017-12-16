<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo UBS
        p Ich bin’s, der Samichlous.
        p Vor mir liegt auf meinem Tisch
        p mein goldenes Buch voll Sachen über dich.
      //- santa2
      li.message(v-if="santaMsgs.includes('santa2')")
        p Bist du bereit?
      //- santa2b
      li.message(v-if="santaMsgs.includes('santa2b')")
        p Besser jetzt, du Weihnachtsmuffel?
        p (Das Feature "mehr Schnee" hat übrigens zusätzliche 250 Lappen gekostet..)
      //- santa3
      li.message(v-if="santaMsgs.includes('santa3')")
        img(src="https://media.giphy.com/media/5KuPVqoVRvQcg/giphy.gif" width="255" height="317")
      //- santa4
      li.message(v-if="santaMsgs.includes('santa4')")
        p Gut
        p In meinem Buche steht, es macht die Runde, 
        p ihr seid SiR MaRY’s Lieblingskunde.
        p Doch habt ihr euch wirklich gut benommen?
        p Ich werd's euch sagen, dafür bin ich hergekommen.
      //- santa6
      li.message(v-if="santaMsgs.includes('santa6')")
        p Marc komm als erster jetzt zu mir.
        p Mein Buch sagt: du liebst Fondue mit Kirsch. Und Bier. 
        p Dass du viel reist, das kann ich verstehen,
        p Freiburg hat man schnell gesehen.

      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Stefanie,
        p Am Digitaltag nahmst du dir Besucher zu Herzen, 
        p denn bei Sicherheit magst du nicht scherzen. 
        p Gut, bist du nicht wirklich schüchtern,
        p da hilft es, bist du immer nüchtern.
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Und Victoria
          //- img(src="~/assets/img/emoji/rose.png")
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Hey, Hallo!
          //- img(src="~/assets/img/emoji/rose.png")
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
        p Experten wie dich, findet man nicht alle Tage, darum habe ich zu App Reviews noch eine Frage:
      //- santa14
      li.message(v-if="santaMsgs.includes('santa14')")
        p Wie geht sowas, kannst du’s mir sagen?
        p Oder hilft’s, wenn wir bei der Agentur nachfragen?
        p Wenn’s dort keiner weiss, kommst du zum Zug, 
        p Und lotst SiR MaRY sicher im Blindflug.
          //- img(src="~/assets/img/emoji/rose.png")
      //- santa15
      li.message(v-if="santaMsgs.includes('santa15')")
        p Adrian, oh Adrian,
        p Mein Buch sagt, bei dir gibt’s keine harte Landung, 
        p denn du seist bei UBS ein Fels in der Brandung. 
        p Selbst bei den Wearables warst du unerschütterlich, 
        p sie kommen, sie kommen....... oh leider nicht.
      li.message(v-if="santaMsgs.includes('santa16')")
        p Leonardo, Leonardo bist du hier?
        p Kryptos, sagt mein Buch, gefallen dir.
        p Fleissig solllst du investieren,
        p sag, kannst vom Milllionär-Sein schon profitieren?
      //- santa17
      li.message(v-if="santaMsgs.includes('santa17')")
        p Stefan, Stefan!
        p Um 5 unter der Dusche hört dich keiner singen.
        p Denn mit Tagesplanung tust du diese Zeit verbringen.
        p Deine Vorbereitung ist auch das A und O im Web
      //- santa18
      li.message(v-if="santaMsgs.includes('santa18')")
        p Nur so entsteht die LinkedIn-Legende „He broke the Internet.“
      //- santa19
      li.message(v-if="santaMsgs.includes('santa19')")
        p Carla, das hier ist für dich:
        p Mein schlaues Buch das sagt,
        p du seist bei UBS das Rückgrat.
        p Noch sicherer als der Safe ist nur,
        p die Freude, wenn du dich meldest, bei der Agentur!
      //- santa20
      li.message(v-if="santaMsgs.includes('santa20')")
        p Ho! Ho! Ho!
        p Übrigens, kennt ihr dieses Weihnachtslied?
      //- santa21
      li.message(v-if="santaMsgs.includes('santa21')")
                img(src="https://media.giphy.com/media/lWIMWLL1KWj6g/giphy.gif" width="400" height="248")
      //- santa23
      li.message(v-if="santaMsgs.includes('santa23')")
        p Die Richtige Antwort: Ihr Kinderlein kommet 
          img(src="~/assets/img/emoji/tears.png")
      //- santa24
      li.message(v-if="santaMsgs.includes('santa24')")
        p Conrad! Conrad! Yess!!
        p Was wär dein Leben ohne UBS?
        p Dass du wieder da bist, hat SiR MaRY gern vernommen,
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p und sich gefreut, hast du Computer und E-Mail zurückbekommen.
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif" width="400" height="225")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Und.. Laura, Laura, bist du da?
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p Du hörst nicht nur auf „Mama“.
        p Im Buche steht, du hast Nachwuchs bekommen. 
        p Schön, hat’s dir die Arbeitslust nicht genommen.
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Andreas
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p In meinem Buch steht natürlich auch etwas über dich
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Seit deinem Aufstieg zum “Universal Group Managing Director of the Galaxy”, 
        p vermisst man dich ein bisschen bei SiR MaRY.
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Hast du doch als einziger Mensch auf dieser Welt
        p deinen eigenen Hotspot ins UBS Mannequin Challenge Video gestellt.
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif" width="480" height="262")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So mein liebes UBS Team, das self-assessment steht noch an: Wart ihr artig dieses Jahr? 
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
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], [4000, 12000, 14000, 18000, 22500, 30000, 39250, 42520, 46000, 51200, 54250, 59000], 5)") Mach weiter, Nikolaus!
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], [4000, 12000, 14000, 18000, 22500, 30000, 39250, 42520, 46000, 51200, 54250, 59000], 5)") Stop! Sami, schliess das Buch!
    .responses(v-if="santaActions === 5")                                                                                                                                                                         
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!',['santa25','santa26','santa27','santa28','santa29', 'santa30'],[3000,10000,15000,17500,19250, 21000], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Unser Chef!',['santa32','santa33','santa34','santa35','santa36','santa37'], [3000,6500,10000,13500,16000, 20000], 8)") Ja! Unser Chef!
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
