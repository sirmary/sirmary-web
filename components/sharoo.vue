<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo sharoo
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
        img(src="https://media.giphy.com/media/5KuPVqoVRvQcg/giphy.gif" width="255" height="317")
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
        p Sarah, über dich weiss ich nur Gutes,
        p bist für eine bessere Welt vollen Mutes.
        p 
        p Kämpfst täglich ohne Geschrei,
        p in deinem Job als Ökopolizei. 

      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Guter Content liegt dir am Herzen, 
        p da sollte keine Agentur mit dir nicht Scherzen.
        p 
        p Selbst Amsterdam liebst du nicht wegen dem Gras,
        p nur für Tony’s Milchschokolade gibst du Gas.
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Christina, auch an dich habe ich gedacht 
        p und einen Vers gemacht:
        p Gut
        p Gut 
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p sieht 
        p sieht
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p man
        p man
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
        p sich 
        p sich
      //- santa14
      li.message(v-if="santaMsgs.includes('santa14')")
        p im 
        p im
      //- santa15
      li.message(v-if="santaMsgs.includes('santa15')")
        p Leben 
        p Leben
      //- santa16
      li.message(v-if="santaMsgs.includes('santa16')")
        p immer
        p immer
      //- santa17
      li.message(v-if="santaMsgs.includes('santa17')")
        p zweimal.
        p zweimal.
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
        p Oli, dich habe ich nicht vergessen.
        p Fertig nur still dagesessen.
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p Musst mir jetzt nichts singen, ist schon gut.
        p In meinem Buch steht zwar, du hättest den Mut.
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif" width="400" height="225")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Aus der Finanzwelt mit Bonus und Rente – kein Witz
        p zum Carsharing P2P-Startup mit Schleudersitz.
  
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Carmen …
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Oh Carmen, du träumst nicht nur, 
        p du lebst auf der Überholspur.
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Birthdaypartys an einem besonderen Ort?
        p Logisch, wo sonst als in New York?!
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Und doch: In dir drin, da schlägt ein Ökoherz,
        p Save water, drink champagne. Oder war das ein Scherz?
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Wie immer tun sich die Überstunden lohnen.
        p Schliesslich teilen du und SiR MaRY die grossen Ambitionen.
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif" width="480" height="262")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes sharoo Team, jetzt müsst ihr euch entscheiden: Wart ihr artig dieses Jahr? 
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
      
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa11','santa12','santa13','santa14','santa15', 'santa16', 'santa17','santa20','santa21'], [4000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 18000, 22000], 5)") Mach weiter, Nikolaus!
      
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8', 'santa11','santa12','santa13','santa14','santa15', 'santa16', 'santa17','santa20','santa21'], [4000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 18000, 22000], 5)") Stop! Sami, schliess das Buch!
    
    .responses(v-if="santaActions === 5")                                                                                                                                                                        
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!', ['santa25','santa26', 'santa27','santa30'], [8000, 15000, 23000, 33000], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Unsere Chefin!',['santa32','santa33','santa34','santa35','santa36','santa37'], [8000,16000,24000,33000,41000, 45000], 8)") Ja! Unsere Chefin!
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
