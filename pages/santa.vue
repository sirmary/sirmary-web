<template lang="pug">
  .wrapper
    Snowf(
      :amount="snowAmount"
      :size="snowSize"
      :speed="snowSpeed"
      :wind="snowWind"
      :opacity="snowOpacity"
      :swing="snowSwing"
      :image="null"
      :zIndex="null"
      :resize="true"
      color="#fff"
    )
    .chatstuff
      component(v-for="compName, index in clientList" :is="compName" v-if="santaClient === compName" ref="messageComp" :key="index" v-on:handleAction="(a,b,c,d,e) => {handleAction(a,b,c,d,e)}" v-on:handleEmail="handleEmail($event)" v-on:handleAmazon="handleAmazon($event)" :santaMsgs="santaMsgs" :santaActions="santaActions" :nextActionsCounter="nextActionsCounter")
      //- typing...
      .typingContainer(v-if="santaIsTyping" :class="{blink: isBlinking}")
        .bottemp.waiting
          .typing-container
            span.circle
            span.circle
            span.circle
    anonymous(v-if="santaClient === 'temp'")
</template>

<script>
import Snowf from '~/components/Snowf.vue'
import samsung from '~/components/samsung.vue'
import allianz from '~/components/allianz.vue'
import ubs from '~/components/ubs.vue'
import anonymous from '~/components/anonymous.vue'

export default {
  components: {
    Snowf,
    samsung,
    allianz,
    ubs,
    anonymous
  },
  data () {
    return {
      santaClient: this.$store.state.santaClient,
      clientName: this.$store.state.clientName,
      clientList: ['samsung', 'allianz', 'ubs'],
      snowAmount: 1000,
      snowSize: 5,
      snowSpeed: 1.5,
      snowWind: 0,
      snowSwing: 1,
      snowOpacity: 0.7,
      route: '',
      inputValue: '',
      blurred: false,
      isHuman: true,
      bgColor: 'e40000',
      messagesScrolltop: 0,
      santaActions: this.$store.state.santaActions,
      santaIsTyping: this.$store.state.santaIsTyping,
      santaMsgs: this.$store.state.santaMsgs,
      nextActionsCounter: 0,
      isBlinking: false,
      santaCodes: this.$store.state.santaCodes
    }
  },
  methods: {
    loadView () {
      console.log('loaded')
    },
    handleEmail (name) {
      let linkString = 'mailto:santa@sirmary.com?subject=Bestellung%20für%20' + this.clientName + '&body=Dear%20Santa%0D%0A%0D%0AWir%20waren%20wirklich%20gut%20in%20diesem%20Jahr%2C%0D%0Adarum%20mach%20jetzt%20unsere%20Belohnung%20klar.%0D%0A%0D%0ADas%20Jahr%20war%20hart%20und%20verging%20im%20Fluge%2C%0D%0Ajetzt%20kommen%20die%20Drinks%20zum%20Zuge%21%0D%0A%0D%0AGerne%20nehmen%20wir%20die%20Chips%20von%20dir%0D%0Aund%20stehen%20bald%20vor%20SiR%20MaRY%E2%80%99s%20T%C3%BCr.%0D%0A%0D%0A%0D%0ADein%20' + this.clientName + '%20Team'
      window.open(linkString)
    },
    handleAmazon (link) {
      console.log('handling amazon: ' + this.$store.state.amazonLink)
      window.open(this.$store.state.amazonLink)
    },
    blinkTyping () {
      console.log('blink the typing')
      this.isBlinking = true
      setTimeout(() => {
        this.isBlinking = false
      }, 500)
    },
    changePhase (phase) {
      switch (phase) {
        case 1:
          console.log('enter phahse 1')
          this.snowAmount = 50
          this.snowSize = 5
          this.snowSpeed = 1.5
          this.snowWind = 0
          this.snowSwing = 1
          this.snowOpacity = 0.7
          break
        case 2:
          console.log('enter phase 2')
          this.snowAmount = 200
          this.snowSize = 7
          this.snowSpeed = 3
          this.snowWind = 1
          this.snowSwing = 2
          this.snowOpacity = 0.8
          break
        case 3:
          console.log('enter phase 3')
          this.snowAmount = 400
          this.snowSize = 9
          this.snowSpeed = 5
          this.snowWind = 2
          this.snowSwing = 3
          this.snowOpacity = 0.9
          break
        case 4:
          console.log('enter phase 4')
          this.snowAmount = 1000
          this.snowSize = 10
          this.snowSpeed = 10
          this.snowWind = 7
          this.snowSwing = 6
          this.snowOpacity = 0.9
          break
      }
    },
    trackEvent (keywordQuery) {
      var ga = window.ga
      if (typeof ga === 'function') {
        ga('send', {
          hitType: 'event',
          eventCategory: 'keyword-input',
          eventAction: 'user-entered-keyword',
          eventLabel: keywordQuery
        })
      }
    },
    track_load (docloc, doctit) {
      var trkSw = escape(screen.width).substring(0, 6)
      var trkSh = escape(screen.height).substring(0, 6)
      var trkRef = escape(document.referrer).substring(0, 1100)
      var trkTit = escape(doctit).substring(0, 200)
      trkTit = trkTit.replace(/u00a0/g, '')
      trkTit = trkTit.replace(/u2122/g, '')
      trkTit = trkTit.replace(/u[0-9][0-9][0-9][0-9]/g, '')
      var trkLoc = escape(docloc).substring(0, 200)
      var trkAgn = escape(navigator.appName).substring(0, 100)
      var trkLng = window.navigator.userLanguage || window.navigator.language
      var trkAgv = escape(navigator.userAgent + '.lfcd' + screen.colorDepth + '.lflng' + trkLng).substring(0, 1000)
      var trkDom = escape(document.domain).substring(0, 200)
      var trkUser = '89514'
      // var trkCookie = ''
      var trkGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0
        var v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
      var trkImg = 'https://secure.leadforensics.com/Track/Capture.aspx'
      var trkLink = trkImg + '?trk_user=' + trkUser + '&trk_sw=' + trkSw + '&trk_sh=' + trkSh + '&trk_ref=' + trkRef + '&trk_tit=' + trkTit + '&trk_loc=' + trkLoc + '&trk_agn=' + trkAgn + '&trk_agv=' + trkAgv + '&trk_dom=' + trkDom + '&trk_guid=' + trkGuid + '&trk_cookie=NA'
      var preload = new Image()
      preload.src = trkLink
    },
    scrollToEnd () {
      console.log('scroll to end')
      let messagesHeight = this.$refs.messageComp.$refs.santaMessageBox.children[0].scrollHeight
      this.$refs.messageComp.$refs.santaMessageBox.scrollTop = messagesHeight + 100
    },
    insertAfter (referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
    },
    handleAction (val, txt, autoload, timings, next) {
      this.nextActionsCounter = next
      this.santaActions = 0
      // santa types
      this.santaIsTyping = true

      // should I do more snow?
      if (val === 'santa2b') {
        this.changePhase(4)
      }

      // back to normal snow
      if (val === 'santa3') {
        this.changePhase(1)
      }
      // append my response
      let msgCount = document.getElementsByClassName('message').length
      let div = document.getElementsByClassName('message')[msgCount - 1]
      let li = document.createElement('li')
      li.innerHTML = '<span>' + txt + '</span>'
      li.classList.add('message')
      li.classList.add('me')
      this.insertAfter(div, li)
      // remove the buttons
      this.santaActions = 0
      // ***********
      // ***********
      if (autoload) {
        // AutoLoad is On!
        // ***********
        // Hide the buttons:
        this.santaActions = 0
        // Santa is typing
        this.santaIsTyping = true
        // After 2 seconds, load the next message:
        setTimeout(() => {
          this.santaIsTyping = true
          this.santaMsgs.push(val)
          // this.santaIsTyping = false
        }, 2000)
        // *********
        // Calculate a the longest delay to pause the buttons:
        let maxDelay = timings[timings.length - 1]
        console.log('max delay: ' + maxDelay)
        this.santaIsTyping = true
        // *********
        // how many messages to autoload?
        let autoloadsCount = autoload.length
        // Loop through the array of next messages:
        for (const [index, value] of autoload.entries()) {
          this.santaActions = 0
          this.santaIsTyping = true
          console.log('is santa typing: ' + this.santaIsTyping)
          // separate each message by 2 seconds
          // TODO: give each message its own delay value!
          let delay = timings[index]
          console.log('what should the dlay be: ' + delay)
          setTimeout(() => {
            this.santaIsTyping = true
            this.santaMsgs.push(value)
            this.blinkTyping()
            // if this is the last autoLoad, turn off the typing!
            console.log('length of array: ' + autoloadsCount)
            console.log('current load: ' + index)
            if (index === autoloadsCount - 1) {
              console.log('*****************************')
              console.log('this shoudl be the last autoload!')
              // this.santaIsTyping = false
            }
          }, delay)
          this.santaIsTyping = true
          // Calculate the total delay then show buttons
          setTimeout(() => {
            // this.santaIsTyping = false
            this.santaActions = this.nextActionsCounter
          }, maxDelay)
        }
        this.santaIsTyping = true
      } else {
        // No AUTOLOAD. Just show the next message.
        console.log('No AUTOLOAD ***')
        this.santaActions = 0
        this.santaIsTyping = true
        setTimeout(() => {
          this.santaIsTyping = true
          this.santaMsgs.push(val)
          // this.santaIsTyping = false
          this.santaActions = this.nextActionsCounter
        }, 2000)
      }
    }
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #' + this.bgColor + '}', type: 'text/css' }
      ]
    }
  },
  mounted () {
    let self = this
    this.snowAmount = 50
    this.$store.state.logoColor = 'white'
    this.santaIsTyping = true
    setTimeout(function () {
      // self.scrollToEnd()
      self.santaMsgs.push('santa1')
      // self.santaIsTyping = false
    }, 500)
    setTimeout(() => {
      // self.scrollToEnd()
      self.santaMsgs.push('santa2')
      this.santaActions = 1
    }, 3000)
  },
  updated () {
    // console.log('typing?: ' + this.santaIsTyping)
    // handle The auto SCroll to bottom
    // let msgWrapper = this.$refs.messageComp.$refs.santaMessageBox
    // let msgs = this.$refs.messageComp.$refs.santaMessageBox.children[0]
    // let containerHeight = msgWrapper.clientHeight
    // let messagesHeight = msgs.clientHeight
    // if (messagesHeight >= containerHeight) {
    //   msgs.style.height = '100%'
    // }
    // this.scrollToEnd()
    if (this.santaActions !== 0 || this.santaClient === 'temp') {
      this.santaIsTyping = false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/_settings.scss';

.snow-controls {
  position: relative;
  button {
    font-size: .7rem;
  }
}

h1 {
  text-indent: 13vw;
  padding: 0 12px;
  margin-top: 50%;
}

h3 {
  padding: 0 12px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 100vh;
}

.main-links {
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  text-align: center;

  a {
    margin:0 12px;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .05rem;
    text-decoration: none;
  }
}
.message-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  padding: 0;
  padding-top: 24px;
  padding-bottom: 9rem;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  overflow: hidden;
  // height: calc(100% - 96px);
  transition: filter .2s ease;

  &.blur {
    filter: blur(5px);
  }


  ul.messages {
    margin: 0 auto;
    padding: 0;
    padding-bottom: 12px;
    width: 100%;
    max-width: 54rem;
    height: auto;
  }

  li {
    height: auto;
    list-style: none;
    padding: 0 12px;
    margin-bottom: 12px;
    transform-origin: 0 100%;
    font-size: 1rem;
    margin-bottom: 24px;
    padding-right: 90px;
    padding-left: 24px;
    // text-indent: rem(36);

    &.new {
      transform-origin: center bottom;
      animation: bounceInUp .5s;
    }

    &.greeting  {
      text-indent: $text-indent;
    }

    &.me {
      text-align: right;
      transform-origin: 100% 100%;
      padding-right: 24px;
      padding-left: 90px;
      color: $sm-yellow;
      text-indent: 0;
    }

    a {
      color:lime;
    }

    @include mq($from: tablet) {
      padding-right: 300px;
      font-size: rem(21);
      line-height: rem(29);
      margin-bottom: 48px;


      &.me {
        padding-left: 300px;
      }
    }
  }
}

.message {
      transform-origin: center bottom;
      animation: bounceInUp .5s;

      &.me span {
        background: #787709;
        color: white;
    padding: 1rem;
    border-radius: 36px;
      }

      p {
        margin: 0;
      }

      p img {
        display: inline-block;
        max-width: 2rem;
      }
}

  a {
  color: #D8D941;
  }

.input-wrapper {
  left: 12px;
  right: 12px;
  position: fixed;
  bottom: 62px;
  padding:0;
}

.input-bar {
  background: black;
  padding: 6px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items:stretch;
  width: 100%;
  max-width: 400px;
  margin:0 auto;



  .input {
    border:none;
    border-radius: 23px;
    flex: 1 1 auto;
    padding: 0 12px;
    height: 36px;
    width: 100%;
  }

  button {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border:none;
    outline: none;
    margin-left: $spacing-unit /2;
    background-color: $sm-blue;
    color:black;
    font-weight: 700;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    text-align: center;
    padding: 0;
  }
}

@keyframes popIn {
  0% {
    transform: translateY(50px);
    opacity: 0;

  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: none
  }
}

@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.responses {
    position: fixed;
    bottom: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
        background: #787709;
        transition: color .2s;
        border:0;
        outline: none;
        color: white;
    padding: 1rem;
    border-radius: 36px;
    font-weight: 700;
    // font-size: 1.rem;
    cursor: pointer;
    margin: .25rem;

    &:hover {
      background: $sm-gray;
    }
    }
}

.typingContainer {
  width: 100vw;
  position: fixed;
  bottom: 6.5rem;
  padding-left: 1.75rem;
  text-align: center;

  &.blink {
    display: none;
  }

  .bottemp {
    max-width: 54rem;
    margin: 0 auto;
    padding-left: 1rem;
  }
}

</style>
