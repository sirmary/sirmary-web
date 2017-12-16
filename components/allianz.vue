<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Allianz
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
        p Jolanda, bist du da??
        p Mein Buch sagt, du hättest ein gutes Händchen.
        p Bei Budgets brennen bei dir rechtzeitig die Lämpchen. 
        p Und auch beim Anpacken bist du immer bereit.
        p Sogar wenn mal kurz dein Handgelenk aussteigt.

      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Claudia
        p Du tust viel Zeit investieren
        p dich über die Andern zu informieren.
        p Deine Analysen haben immer gesessen. 
        p Media Focus kann man da glatt vergessen. 
        p Um noch was kann man dich beneiden 
        p Deinen Mut etwas zu Entscheiden.
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Q2
          img(src="~/assets/img/emoji/rose.png")
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Ist das ein Name? Oder St. Galler Dialekt?
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
        p 
      //- santa14
      li.message(v-if="santaMsgs.includes('santa14')")
        p So oder so, wie du verhandelst kann man verstehen 
        p lässt dich dein Chef einen Monat nach Australien gehen.
      //- santa15
      li.message(v-if="santaMsgs.includes('santa15')")
        p Thomas Thomas J.etzt kommst du
      //- santa16
      li.message(v-if="santaMsgs.includes('santa16')")
        p Bombst dir nicht noch den ganzen Körper zu!
        p Model Mauri hast du entdeckt
        p Elite Model hats aber leider nicht gecheckt.
        p Eins noch: Lächeln steht dir super gut, auch wenn man’s selten sehen tut.
      //- santa17
      li.message(v-if="santaMsgs.includes('santa17')")
        p Simone komm und sag mir doch:
      //- santa18
      li.message(v-if="santaMsgs.includes('santa18')")
        p Hängt die Allianz24 Buswerbung in St. Gallen noch?
      //- santa19
      li.message(v-if="santaMsgs.includes('santa19')")
        p 
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
        p Luca, über dich kann ich nicht lang parlieren, tust dich bei Media profilieren. 
        p Nächstes Jahr an diesem Ort, steht bestimmt ein effektiveres Wort.
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")

      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Und Marco!
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p AJAX, ASP, ASCII und CSS,
        p all das führt ganz schnell zu Stress.
        p Fastnacht ist uns mehr gemein, drum lass uns lieber lustig sein.
      //- santa29
      li.message(v-if="santaMsgs.includes('santa29')")
        p Corina.
        p
        p Natürlich kannst dus noch abwägen,
        p ob mich auf Facebook doch willst adden. Zur Gegenleistung bin ich bereit: Ehrenplatz an Schmutzlis Hochzeit.
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Thomas ...
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Lieber Thomas W.
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Von Zürich in die Sonnenstube.
        p bist auf Achse oft im Zuge.
        p In Meetings mit Ideen bereit,
        p sparst SiR MaRY schnell ganz viel Zeit.
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Wenns schnell geht, findest dus erst gut. 
        p Ausnahmen eine: Slow Food.
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Mit dir kommt man jeweils gern ins Schwitzen.
        p Aber klar: Bei “Mut heisst machen” muss alles sitzen.
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Allianz Evia Team, jetzt müsst ihr euch entscheiden: Wart ihr artig dieses Jahr? 
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
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], [4000, 12000, 14000, 15000, 16500, 18350, 21000, 23500, 26000, 28000, 35000, 40000], 5)") Mach weiter, Nikolaus!
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], [4000, 12000, 14000, 15000, 16500, 18350, 21000, 23500, 26000, 28000, 35000, 40000], 5)") Stop! Sami, schliess das Buch!
    .responses(v-if="santaActions === 5")                                                                                                                                                                         
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!',['santa25','santa26','santa27','santa28','santa29'],[3000,10000,15000,17500,19250], 7)") Lies weiter, Samichlaus!
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
