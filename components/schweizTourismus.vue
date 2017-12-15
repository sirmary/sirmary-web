<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Schweiz Tourismus
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
        p Einer muss als Erster kommen, hier gäbs einen Marc, hab ich vernommen.
        p 
        p Marc, ich hoffe, du verstehst mich gut,
        p Was bei deinem Dialekt ja nicht gleich jeder tut.
        p Schnaps und Freiburger Fondue NUR in Fribourg machen dich stolz.
        p Als Freiburger bist du aus dem echtem Holz.
      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Nicht mal ich hab Tricks die Marc nicht kennt,
        p Kein Berg, den er nicht beim Namen nennt.
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Von Hinz und Kunz bis Pille und Palle,
        p Nur einer – Marc – der kennt sie alle.
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
        p Sandra 
        p
        p In meinem Buch steht auch was für dich:.
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p Selbst wenn die Welt zusammenbricht
        p Bei dir ist Ruhe - gar kein Sturm.
        p SiR MaRY fragt: Wie macht sie’s nur?
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif")
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Nicole …
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Liebe Nicole jetzt zu dir.
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Von Vielen habe ich’s vernommen:
        p du sorgst dafür, dass Gäste kommen.
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Nicht mal ich – Santa – habe einen Schimmer
        p Woher holst du diesen Drive nur immer?
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Selbst wenn die Welt am untergehen ist, 
        p Nicole, bleibt Multitasking-Spezialist. 
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif")
      //- santa374
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Schweiz Tourismus Team, jetzt müsst ihr euch entscheiden: Wart ihr artig dieses Jahr? 
        p Ob ihr wirklich richtig steht, seht ihr wenn der Tab aufgeht.
      slot




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
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!', ['santa25','santa26', 'santa30'], [4000, 6000, 10000], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Unser Chef!',['santa32','santa33','santa34','santa35','santa36','santa37'], [3000,6500,10000,13500,16000,20000], 8)") Ja! Unser Chef!
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
