<template lang="pug">

  .message-wrapper#message-wrapper(ref="messageBox")
    ul.messages#messages(ref="messages")
      //- santa1
      li.message(v-if="santaMsgs.includes('santa1')")
        h2 Ho! Ho! Ho! 
          img(src="~/assets/img/emoji/santa.png")
        p Hallo Allianz
        p Ich bin’s, der Samichlous. 
        p Vor mir liegt liegt auf meinem Tisch 
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
        p ihr seid SiR MaRY’s Lieblingskunde.
        p 
        p Doch habt ihr euch auch gut benommen?
        p Ich sags euch,, dafür bin ich hergekommen.
      //- santa6
      li.message(v-if="santaMsgs.includes('santa6')")
        p Jeder braucht ein strenges Ziel
        p Patrick sagt, er raucht nicht viel
        p Bloss ab und zu, mal hier mal dort
        p "Gelegentlich" dein Zauberwort
        p Mitnichten stimmt das, weit und breit!
        p Patrick, DU RAUCHST BEI JEDER MÖGLICHKEIT!

      //- santa7
      li.message(v-if="santaMsgs.includes('santa7')")
        p Da steht noch mehr geschrieben…
      //- santa7b
      li.message(v-if="santaMsgs.includes('santa7b')")
        p Wo denkst du hin? Und weiter geht’s im Text…
      //- santa8
      li.message(v-if="santaMsgs.includes('santa8')")
        p Eine kurze Frage an Fabian Fehr:
        p Wo kommen all deine Brillen her? 
        p #SwitchNow 
        p Hat Fielmann euren Claim geklaut? 
      //- santa11
      li.message(v-if="santaMsgs.includes('santa11')")
        p Und Sandra
          img(src="~/assets/img/emoji/rose.png")
      //- santa12
      li.message(v-if="santaMsgs.includes('santa12')")
        p Hey Sandra
          img(src="~/assets/img/emoji/rose.png")
      //- santa13
      li.message(v-if="santaMsgs.includes('santa13')")
        p Du guckst gern Bachelor auf 3+.
        p Verehrst ihn mit jedem Kuss.
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
        p Für den Bachelor bist du doch viel zu schlau
          img(src="~/assets/img/emoji/rose.png")
          img(src="~/assets/img/emoji/kiss.png")
      //- santa18
      li.message(v-if="santaMsgs.includes('santa18')")
        p Apropos Rosen… Luca..
      //- santa19
      li.message(v-if="santaMsgs.includes('santa19')")
        p ...was glaubst denn du für Sachen?
        p Bargeldlos Tulpen soll Frauen wirklich glücklich machen???
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
        p Rita? Ritaaaaaa? Bist du da?
      //- santa25
      li.message(v-if="santaMsgs.includes('santa25')")
        p Hier steht du liebst BQMS und QLED. 
        p Ich hab zwar keine Ahnung was das ist, aber das klingt extrem versaut! 
      //- santa26
      li.message(v-if="santaMsgs.includes('santa26')")
        img(src="https://media.giphy.com/media/g3wNqJkR0nwuk/giphy.gif")
      //- santa27
      li.message(v-if="santaMsgs.includes('santa27')")
        p Und.. Allan?
      //- santa28
      li.message(v-if="santaMsgs.includes('santa28')")
        p Oh Allan.. sieh mal an..., du reist gern und guckst dir fremde Städte mit Locals an?
      //- santa29
      li.message(v-if="santaMsgs.includes('santa29')")
        p Das ist ja gut und recht, ich gönn es dir.
        p Aber Herrgottsjammer –beim Sightseeing gibt doch mehr zu sehen als nur Bier.
      //- santa30
      li.message(v-if="santaMsgs.includes('santa30')")
        p Fehlt noch wer?
      //- santa31
      li.message(v-if="santaMsgs.includes('santa31')")
        p Heiko…
      //- santa32
      li.message(v-if="santaMsgs.includes('santa32')")
        p Lieber Spatz
          img(src="~/assets/img/emoji/heart.png")
      //- santa33
      li.message(v-if="santaMsgs.includes('santa33')")
        p Du hältst tatsächlich "Redbull Flugtag" für den besten Satz?
      //- santa34
      li.message(v-if="santaMsgs.includes('santa34')")
        p Das bringt SiR MaRY arg ins Schwitzen, 
        p und lässt die Ärmsten jeden Abend nachsitzen, 
        p Dabei geht doch nur um Fame
        p "Do what you can’t" auf Deutsch – Ta-daa: Der beste Claim!
      //- santa35
      li.message(v-if="santaMsgs.includes('santa35')")
        p Dann endlich! Die Idee, trotz engster Fristen!!
        p Und dann oh nein! Heiko pitched sie fiktiv vor Journalisten…
      //- santa36
      li.message(v-if="santaMsgs.includes('santa36')")
        img(src="https://media.giphy.com/media/3ofT5EIUWCX7G6boU8/giphy.gif")
      //- santa37
      li.message(v-if="santaMsgs.includes('santa37')")
        p So liebes Samsung Team, jetzt müsst ihr euch entscheiden: Wart ihr artig dieses Jahr? 
        p Ob ihr wirklich richtig steht, seht ihr wenn der Tab aufgeht.
      slot




    //- actions
    //- handleAction([message to add], [button text], [autoLoad the next msg: array to autoload], [nextActions])
    .responses(v-if="santaActions === 1")
      button.response(@click="$emit('handleAction', 'santa3', 'Ich hab nichts zu befürchten',['santa4'], 3)") Ich hab nichts zu befürchten
      button.response(@click="$emit('handleAction','santa2b', 'Ich bin noch nicht in Weihnachtsstimmung', false, 2)") Ich bin noch nicht in Weihnachtsstimmung
    .responses(v-if="santaActions === 2")
      button.response(@click="$emit('handleAction','santa3', 'Jetzt bin ich bereit', ['santa4'], 3)") Jetzt bin ich bereit
    .responses(v-if="santaActions === 3")
      button.response(@click="$emit('handleAction','santa6', 'Oh! Erzähl mir weiter…', ['santa7'], 4)") Oh! Erzähl mir weiter…
    .responses(v-if="santaActions === 4")
      button.response(@click="$emit('handleAction','santa7', 'Mach weiter, Nikolaus!',['santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], 5)") Mach weiter, Nikolaus!
      button.response(@click="$emit('handleAction','santa7b', 'Stop! Sami, schliess das Buch!', ['santa7b','santa8', 'santa11','santa12','santa13','santa14','santa15','santa16','santa17','santa18','santa19','santa20','santa21'], 5)") Stop! Sami, schliess das Buch!
    .responses(v-if="santaActions === 5")
      button.response(@click="$emit('handleAction','santa23', 'Ja',false, 6)") Ja
      button.response(@click="$emit('handleAction','santa23', 'Nein', false, 6)") Nein
    .responses(v-if="santaActions === 6")
      button.response(@click="$emit('handleAction','santa24', 'Lies weiter, Samichlaus!',['santa25','santa26','santa27','santa28','santa29'], 7)") Lies weiter, Samichlaus!
    .responses(v-if="santaActions === 7")
      button.response(@click="$emit('handleAction','santa31', 'Ja! Unser Chef!',['santa32','santa33','santa34','santa35','santa36','santa37'], 8)") Ja! Unser Chef!
      button.response(@click="$emit('handleAction','santa31', 'Ja! Unser Chef!', ['santa32','santa33','santa34','santa35','santa36','santa37'], 8)") Ja! Unser Chef!
    .responses(v-if="santaActions === 8")
      button.response(@click="$emit('handleEmail', 'Samsung')") Wir waren super!
      button.response(@click="$emit('handleAmazon', 'https://www.amazon.de/hz/wishlist/ls/1AZPHD1KB84U9')") Wir müssen uns verbessern
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
