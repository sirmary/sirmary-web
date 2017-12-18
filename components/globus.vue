<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Globus
        p Ich bin’s, der Samichlous. 
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
        p Oh Jessica, oh Jessica, 
        p ich hoffe sehr, du bist jetzt da!
      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Wie ich lese, bist du aus einer berühmten Familie:
        p Don Quichote und die Bekämpfer der Windmühle?
        p 
        p Doch seist du immer gut gelaunt, 
        p was keinen wirklich sehr erstaunt.
        p 
        p Nur in der digitalen Welt, da machst du keine Witze, 
        p Schliesslich bist du bei Globus dort Speerspitze!
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Ursina, du bist die nächste.
        p Mit deinem Job hast du gut lachen, 
        p auch SiR MaRY würde lieber deine Arbeit machen.
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Moment! Mein Lob muss sich gedulden:
        p Sollst SiR MaRY noch ein Dinner mit Richard Kägi schulden?
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Jan? Oh Jan..
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
        p Was soll ich zu dir nur sagen?!?
        p Täglich tust du bei der Agentur nachfragen.
      //- santa14
      li.message(v-if="santaMsgs.includes('santa14')")
        p Aber, wer glaubt mir’s schon...?
        p Die freuen sich auf dein nächstes Telefon!

      //- santa20
      li.message(v-if="santaMsgs.includes('santa20')")
        p Ho! Ho! Ho!
        p Übrigens, kennt ihr dieses Weihnachtslied?
      //- santa21
      li.message(v-if="santaMsgs.includes('santa21')")
        img(src="https://media.giphy.com/media/lWIMWLL1KWj6g/giphy.gif" width="400" height="248")
      //- santa23
      li.message(v-if="santaMsgs.includes('santa23')")
        p Die richtige Antwort: Ihr Kinderlein kommet 
          img(src="~/assets/img/emoji/tears.png")
      //- santa24
      li.message(v-if="santaMsgs.includes('santa24')")
        p Madeleine, Madeleine, komm her zu mir,
        p was Gutes sag ich auch zu dir.
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p Kommt mal eine Agentur dir nicht freundlich, ist das nur Neid.
        p Schliesslich weisst du bei Media immer bestens Bescheid.
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif" width="400" height="225")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Scarlett, liebe, hörst du zu? 
        p Im Buch die nächste, die bist du.
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p Vielem drückst du deinen Stempel auf 
        p - am besten aber da:
        p Im Delicuisine-Feed auf Insta.
      //- santa29
      li.message(v-if="santaMsgs.includes('santa29')")   
        p Thomas du kommst zum Schluss!
        p Bist Styling-mässig immer top im Schuss.
        p 
        p Daumen hoch auch von Santa, immerhin
        p bist du der jüngste vom ganzen Team!     
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Katrin, dich will ich nicht vergessen,
        p hast jetzt lange dagesessen.
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Eines, das wird jedem klar:
        p die Marke Globus schützt du wunderbar.
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Du bekommst alles in den Griff - das sagen viele Leute, 
        p selbst eine ganze McKinsey Berater Meute.
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Drum kommt SiR MaRY wegen dir auch gerne ins Schwitzen.
        p Bei Globus muss halt einfach alles sitzen. 
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif" width="480" height="262")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Globus Team, 
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
      button.response(@click="$emit('handleAction','santa6', 'Oh! Erzähl mir weiter…', ['santa7'], [6000], 4)") Oh! Erzähl mir weiter…
    .responses(v-if="santaActions === 4")
      
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa11','santa12','santa13','santa14','santa20','santa21'], [4000, 12000, 18000, 21000, 28000, 31000, 38000], 5)") Mach weiter, Nikolaus!
      
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8', 'santa11','santa12','santa13','santa14','santa20','santa21'], [4000, 12000, 18000, 21000, 28000, 31000, 38000], 5)") Stop! Sami, schliess das Buch!
    
    .responses(v-if="santaActions === 5")                                                                                                                                                                        
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!', ['santa25','santa26', 'santa27', 'santa28', 'santa29','santa30'], [4000, 12000, 20000, 29000, 35000, 42000], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Unsere Chefin!',['santa32','santa33','santa34','santa36','santa37'], [8000,11000,19000,28000,32000], 8)") Ja! Unsere Chefin!
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
