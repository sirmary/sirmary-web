<template lang="pug">

  .message-wrapper#message-wrapper(ref="santaMessageBox")
    ul.messages#messages(ref="santaMessages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Samsung
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
        p Jeder braucht ein strenges Ziel
        p Patrick meint, er raucht nicht viel
        p Bloss ab und zu, mal hier mal dort
        p "Gelegentlich" sein Zauberwort
        p Mitnichten stimmt das, weit und breit!
        p Patrick, DU RAUCHST BEI JEDER MÖGLICHEN GELEGENHEIT!

      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Heute wird mal keiner geschont...
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Fabian, Fabian bist du es?
        p 
        p Mein Lieber, ich erkenne dich fast nicht!
        p Hast du eine neue Brille im Gesicht?
        p 
        p Davon sollst du viele haben, 
        p für jeden Tag und jeden Abend.
        p 
        p Ich hab’s auch nicht mehr mit den Augen.
        p Doch mit Brille seh ich blöd aus, kannst mir glauben. 
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Sandra steht hier jetzt
          img(src="~/assets/img/emoji/rose.png")
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Hey Sandra
          img(src="~/assets/img/emoji/rose.png")
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
        p Du guckst gern Bachelor auf 3+.
        p Verehrst ihn mehr mit jedem Kuss.
      //- santa14
      li.message(v-if="santaMsgs.includes('santa14')")
        p Oh Sandra
          img(src="~/assets/img/emoji/rose.png")
      //- santa15
      li.message(v-if="santaMsgs.includes('santa15')")
        p Darling
          img(src="~/assets/img/emoji/rose.png")
      //- santa16
      li.message(v-if="santaMsgs.includes('santa16')")
        p Gute Frau
          img(src="~/assets/img/emoji/rose.png")
      //- santa17
      li.message(v-if="santaMsgs.includes('santa17')")
        p Für sowas bist du doch viel zu schlau
          img(src="~/assets/img/emoji/rose.png")
          img(src="~/assets/img/emoji/kiss.png")
      //- santa18
      li.message(v-if="santaMsgs.includes('santa18')")
        p Apropos Rosen… Luca..
      //- santa19
      li.message(v-if="santaMsgs.includes('santa19')")
        p ...was glaubst denn du für Sachen?
        p Bargeldlos bezahlte Tulpen sollen Frauen glücklich machen???
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
        p Rita? 
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p Bitte Rita erklärs mir fix: BQMS und QLED, 
        p das sagt mir nix.
        p Am besten wäre Schmutzli dann auch gleich da,
        p In unserer Hütte ist er Chief Multimedia.
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif" width="400" height="225")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p (temp)
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p (temp)
      //- santa29
      li.message(v-if="santaMsgs.includes('santa29')")
        p (temp)
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Allan? Allan steht in meinem Buch!
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Du hast Stil, fällst auf nichts herein,
        p ausser Heftchen mit Design.
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Reisen ist bei dir nicht nur möchte, würde, hätte.
        p Mit Locals besuchst du gerne fremde Städte. 
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Das ist ja gut und recht, ich gönn es dir.
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Aber Herrgottsjammer – beim Sightseeing gibt’s doch mehr zu sehen, als nur Bier.
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif" width="480" height="262")
      //- santa37
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Samsung Team, jetzt müsst ihr euch entscheiden: Wart ihr artig dieses Jahr? 
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
      
      button.response(@click="$emit('handleAction', 'santa7', 'Mach weiter, Nikolaus!', ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], [4000, 19000, 21000, 25000, 30000, 32000, 34000, 37000, 41000, 45000, 51000, 55000], 5)") Mach weiter, Nikolaus!

      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], [4000, 19000, 21000, 25000, 30000, 32000, 34000, 37000, 41000, 45000, 51000, 55000], 5)") Stop! Sami, schliess das Buch!
    .responses(v-if="santaActions === 5")                                                                                                                                                                         
      button.response(@click="$emit('handleAction','santa23', 'Ja',null, null, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', null, null, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!',['santa25','santa26','santa30'],[6000,15000,18000], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(v-for="button in [1,2]" @click="$emit('handleAction','santa31', 'Ja! Allan fehlt!',['santa32','santa33','santa34','santa35','santa36','santa37'], [6000,14000,22000,29000,34000, 40000], 8)") Ja! Allan fehlt!
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
