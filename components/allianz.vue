<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho!
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Allianz
        p Ich bin’s, der Samichlaus.
        p Vor mir liegt auf meinem Tisch,
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
        img(src="https://media.giphy.com/media/5KuPVqoVRvQcg/giphy.gif" width="255" height="317")
      //- santa4
      li.message(v-if="santaMsgs.includes('santa4')")
        p Gut...
        p In meinem Buche steht, es macht die Runde,
        p ihr seid SiR MaRYs Lieblingskunde.
        p
        p Doch habt ihr euch auch gut benommen?
        p Ich sag’s euch, dafür bin ich hergekommen.
      //- santa6
      li.message(v-if="santaMsgs.includes('santa6')")
        p Jolanda, bist du da?
        p Mein Buch sagt, du hättest ein gutes Händchen,
        p bei Budgets brennen bei dir rechtzeitig die Lämpchen.
        p Und auch beim Anpacken bist du immer bereit,
        p sogar wenn mal kurz dein Handgelenk aussteigt.

      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Claudia!
        p Um alles über eure Konkurrenz zu wissen,
        p hat sich SiR MaRY in die Arbeit geschmissen,
        p ein Hunni hier, ein Fuffi dort,
        p schon war das Geld für Mediafocus fort.
        p Hätten sie nur dich gefragt,
        p du hättest alles kostenlos gesagt!
      //- santa9
      li.message(v-if="santaMsgs.includes('santa9')")
        p Und übrigens: dich seh ich immer gerne
        p egal ob von nah oder aus der Ferne,
        p es muss jetzt über meine Lippen,
        p niemand sonst trägt schönere Fummel auf den Rippen!
          img(src="~/assets/img/emoji/rose.png")

      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Q2?
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Ist das ein Name? Oder St. Galler Dialekt?
      //- santa14
      li.message(v-if="santaMsgs.includes('santa14')")
        p So oder so, wie du verhandelst kann man verstehen,
        p lässt dich dein Chef einen Monat nach Australien gehen.
      //- santa15
      li.message(v-if="santaMsgs.includes('santa15')")
        p Thomas Jost, jetzt kommst du,
      //- santa16
      li.message(v-if="santaMsgs.includes('santa16')")
        p bombst dir nicht noch den ganzen Körper zu!
        p Model Mauri hast du entdeckt,
        p Elite Model hats aber leider nicht gecheckt.
        p Eins noch: Lächeln steht dir super gut,
        p auch wenn man’s selten sehen tut!
      //- santa17
      li.message(v-if="santaMsgs.includes('santa17')")
        p Simone komm und sag mir doch:
      //- santa18
      li.message(v-if="santaMsgs.includes('santa18')")
        p Hängt die Allianz24 Buswerbung in St. Gallen noch?
      //- santa20
      li.message(v-if="santaMsgs.includes('santa20')")
        p Ho! Ho! Ho!
        p übrigens, kennt ihr dieses Weihnachtslied?
      //- santa21
      li.message(v-if="santaMsgs.includes('santa21')")
        img(src="https://media.giphy.com/media/lWIMWLL1KWj6g/giphy.gif" width="400" height="248")
      //- santa23
      li.message(v-if="santaMsgs.includes('santa23')")
        p Die richtige Antwort: Ihr Kinderlein kommet
          img(src="~/assets/img/emoji/tears.png")
      //- santa24
      li.message(v-if="santaMsgs.includes('santa24')")
        p Luca, über dich kann ich nicht lang parlieren,
        p tust dich bei Media profilieren.
        p Nächstes Jahr an diesem Ort,
        p steht bestimmt ein effektiveres Wort.


      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif" width="400" height="225")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Und Marco!
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p AJAX, ASP, ASCII und CSS,
        p all das führt ganz schnell zu Stress.
        p Fastnacht ist uns mehr gemein,
        p drum lass uns lieber lustig sein.
      //- santa29
      li.message(v-if="santaMsgs.includes('santa29')")
        p Corina...
        p &nbsp;
        p Natürlich kannst du's noch abwägen,
        p ob mich auf Facebook doch willst adden.
        p Zur Gegenleistung bin ich bereit:
        p Biete Ehrenplatz an Schmutzlis Hochzeit.
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Thomas ...
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Lieber Thomas
          img(src="~/assets/img/emoji/sunglasses.png")
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Von Zürich in die Sonnenstube,
        p bist auf Achse oft im Zuge.
        p In Meetings mit Ideen bereit,
        p sparst SiR MaRY schnell viel Zeit.
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Wenn’s schnell geht, findest du’s erst gut.
        p Ausnahme gibt es eine: Slow Food.
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Mit dir kommt man jeweils gern ins Schwitzen,
        p aber klar: bei "Mut heisst machen" muss alles sitzen.
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif" width="480" height="262")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Allianz Team,
        p jetzt müsst ihr euch entscheiden:
        p Wart ihr artig dieses Jahr?
        p Ob ihr wirklich richtig steht,
        p seht ihr wenn der Tab aufgeht.



    //- actions
    //- handleAction([message to add], [button text], [autoLoad the next msg: array to autoload],[custom delay], [nextActions])
    .responses(v-if="santaActions === 1")
      button.response(@click="$emit('handleAction', 'santa3', 'Ich hab nichts zu befürchten',['santa4'], [7000], 3)") Ich hab nichts zu befürchten
      button.response(@click="$emit('handleAction','santa2b', 'Ich bin noch nicht in Weihnachtsstimmung', null, null, 2)") Ich bin noch nicht in Weihnachtsstimmung
    .responses(v-if="santaActions === 2")
      button.response(@click="$emit('handleAction','santa3', 'Jetzt bin ich bereit', ['santa4'], [7000], 3)") Jetzt bin ich bereit
    .responses(v-if="santaActions === 3")
      button.response(@click="$emit('handleAction','santa6', 'Oh! Erzähl mir weiter…', ['santa7'], [14000], 4)") Oh! Erzähl mir weiter…
    .responses(v-if="santaActions === 4")
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa9', 'santa11','santa12','santa14','santa15','santa16','santa17','santa18','santa20','santa21'], [4000, 19000, 31000, 34000, 37000, 43000, 46000, 58000, 61000, 64000, 70000], 5)") Mach weiter, Nikolaus!
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8','santa9', 'santa11','santa12','santa14','santa15','santa16','santa17','santa18','santa20','santa21'], [4000, 19000, 31000, 34000, 37000, 43000, 46000, 58000, 61000, 64000, 70000], 5)") Stop! Sami, schliess das Buch!
    .responses(v-if="santaActions === 5")
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!',['santa25','santa26','santa27','santa28','santa29', 'santa30'],[3000,14000,19000,23000,33000,40000], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Unser Chef!',['santa32','santa33','santa34','santa35','santa36','santa37'], [4000,7000,17000,23000,31000, 38000], 8)") Ja! Unser Chef!
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
