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
      component(v-for="compName, index in clientList" :is="compName" v-if="santaClient === compName" ref="messageComp" :key="index" v-on:handleAction="(a,b,c,d,e) => {handleAction(a,b,c,d,e)}" v-on:handleEmail="handleEmail($event)" v-on:handleAmazon="handleAmazon($event)" :santaMsgs="santaMsgs" :santaActions="santaActions" :nextActionsCounter="nextActionsCounter")#messageComp
      //- typing...
      .typingContainer(v-if="santaIsTyping" :class="{blink: isBlinking}" ref="typingContainer")
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
import schweizTourismus from '~/components/schweizTourismus.vue'
import swisslos from '~/components/swisslos.vue'
import globus from '~/components/globus.vue'
import sharoo from '~/components/sharoo.vue'
import anonymous from '~/components/anonymous.vue'

export default {
  components: {
    Snowf,
    samsung,
    allianz,
    ubs,
    schweizTourismus,
    swisslos,
    globus,
    sharoo,
    anonymous
  },
  data () {
    return {
      bgColor: 'e40000',
      santaClient: this.$store.state.santaClient,
      clientName: this.$store.state.clientName,
      clientList: ['samsung', 'allianz', 'ubs', 'schweizTourismus', 'swisslos', 'globus', 'sharoo'],
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
      messagesScrolltop: 0,
      santaActions: this.$store.state.santaActions,
      santaIsTyping: this.$store.state.santaIsTyping,
      santaMsgs: this.$store.state.santaMsgs,
      nextActionsCounter: 0,
      isBlinking: false,
      santaShuffle: this.$store.state.santaShuffle
    }
  },
  computed: {
  },
  methods: {
    handleEmail (name) {
      let linkString = 'mailto:santa@sirmary.com?subject=Bestellung%20für%20' + this.$store.state.clientName + '&body=Dear%20Santa%0D%0A%0D%0AWir%20waren%20wirklich%20gut%20in%20diesem%20Jahr%2C%0D%0Adarum%20mach%20jetzt%20unsere%20Belohnung%20klar.%0D%0A%0D%0ADas%20Jahr%20war%20hart%20und%20verging%20im%20Fluge%2C%0D%0Ajetzt%20kommen%20die%20Drinks%20zum%20Zuge%21%0D%0A%0D%0AGerne%20nehmen%20wir%20die%20Chips%20von%20dir%0D%0Aund%20stehen%20bald%20vor%20SiR%20MaRY%E2%80%99s%20T%C3%BCr.%0D%0A%0D%0A%0D%0ADein%20' + this.$store.state.clientName + '%20Team'
      window.location.href = linkString
    },
    handleAmazon (link) {
      window.open(this.$store.state.amazonLink)
    },
    blinkTyping () {
      this.isBlinking = true
      setTimeout(() => {
        this.isBlinking = false
      }, 500)
    },
    changePhase (phase) {
      switch (phase) {
        case 1:
          this.snowAmount = 50
          this.snowSize = 5
          this.snowSpeed = 1.5
          this.snowWind = 0
          this.snowSwing = 1
          this.snowOpacity = 0.7
          break
        case 2:
          this.snowAmount = 200
          this.snowSize = 7
          this.snowSpeed = 3
          this.snowWind = 1
          this.snowSwing = 2
          this.snowOpacity = 0.8
          break
        case 3:
          this.snowAmount = 400
          this.snowSize = 9
          this.snowSpeed = 5
          this.snowWind = 2
          this.snowSwing = 3
          this.snowOpacity = 0.9
          break
        case 4:
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
    handleScroll () {
      if (window.pageYOffset === 0) {
        this.$store.state.isLogoBlurred = false
      } else {
        this.$store.state.isLogoBlurred = true
      }
    },
    scrollToEnd (msgWrapper, msgs) {
      document.documentElement.scrollTop = document.body.scrollTop = msgs.scrollHeight + 100
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
        this.santaIsTyping = true
        // *********
        // how many messages to autoload?
        let autoloadsCount = autoload.length
        // Loop through the array of next messages:
        for (const [index, value] of autoload.entries()) {
          this.santaActions = 0
          this.santaIsTyping = true
          // separate each message by 2 seconds
          // TODO: give each message its own delay value!
          let delay = timings[index]
          setTimeout(() => {
            this.santaIsTyping = true
            this.santaMsgs.push(value)
            this.blinkTyping()
            // if this is the last autoLoad, turn off the typing!
            if (index === autoloadsCount - 1) {
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
    // let bgColor = this.bgColor
    return {
      style: [
        { cssText: ':root { background: #e40000}', type: 'text/css', undo: true }
      ]
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.trackEvent(this.santaClient + ' is viewing SantaBot')
    this.track_load('chat-query', 'santaBot')
    this.$store.state.isLogoBlurred = false
    document.getElementsByClassName('snowf-canvas')[0].style.position = 'fixed'
    this.bgColor = 'e40000'
    let self = this
    this.snowAmount = 50
    this.$store.state.logoColor = 'white'
    this.santaIsTyping = true
    setTimeout(function () {
      // self.scrollToEnd()
      self.santaMsgs.push('santa1')
    }, 500)
    setTimeout(() => {
      // self.scrollToEnd()
      self.santaMsgs.push('santa2')
      this.santaActions = 1
    }, 3000)
  },
  updated () {
    // handle The auto SCroll to bottom
    if (this.$store.state.santaClient !== 'temp') {
      let msgWrapper = this.$refs.messageComp[0].$el
      let msgs = this.$refs.messageComp[0].$el.children[0]
      let messagesHeight = msgs.clientHeight
      if (messagesHeight >= window.innerHeight - 144) {
        // the messages are taller than the window
        msgWrapper.style.position = 'relative'
        msgWrapper.style.paddingTop = '6rem'
        this.$store.state.isLogoBlurred = true
        if (this.santaIsTyping === true) {
          this.$refs.typingContainer.style.position = 'relative'
          this.$refs.typingContainer.style.bottom = '0'
          this.$refs.typingContainer.style.marginTop = '-100px'
        }
      }
      this.scrollToEnd(msgWrapper, msgs)
    }
    if (this.santaActions !== 0 || this.santaClient === 'temp') {
      this.santaIsTyping = false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/_settings.scss';

::-webkit-scrollbar {
display: none;
}

:root {
  height: 100%;
  min-height: 100vh;
}

.hide {
  color: #e40000;
}

h1 {
  text-indent: 13vw;
  padding: 0 12px;
  margin-top: 50%;
}

h3 {
  padding: 0 12px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 100vh;
}


#messageComp {
  position: absolute;
  // background: rgba(purple,.5);
  left: 0;
  right: 0;
  bottom: 24;
  display: block;
  padding: 0;
  padding-top: 24px;
  padding-bottom: 100px;
  height: calc(100% - 96px);
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  // overflow: auto;
  overflow-y: visible;
  overflow-x: hidden;
  // height: calc(100% - 96px);
  transition: filter .2s ease;

  @include mq ($from: tablet) {
    height: calc(100% - 136px);
  }


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
    transform-origin: center bottom;
    animation: popIn .5s;

      &.me {
      text-align: right;
      transform-origin: 100% 100%;
      padding-right: 24px;
      padding-left: 90px;
      text-indent: 0;
      // display: flex;

        span {
          // color: #787709;
          color: $sm-yellow;
          // display: flex;
          // flex: 1 1 auto;
          width: auto;
          // color: white;
          padding: .5rem 1rem;
          font-size: 1rem;
          border-radius: 36px;

      @include mq ($from: tablet) {
        font-size: rem(21);
        padding: 1rem 2rem;
      }
        }
      }

      p {
        margin: 0;
      }

      img {
        // max width?
      }

      p img {
        display: inline-block;
        max-width: 2rem;
      }

    &.new {
      transform-origin: center bottom;
      animation: zoomInUp .5s;
    }

    &.greeting  {
      text-indent: $text-indent;
    }

    &.me {

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

  a {
  color: #D8D941;
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

.responses {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;

    @include mq ($from:tablet) {
      padding: 2rem;
    }

    button {
      background: #787709;
      transition: color .2s;
      border:0;
      outline: none;
      color: white;
      padding: .5rem;
      border-radius: 36px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      margin: .25rem;

    @include mq ($from: tablet) {
      padding: 1rem;
      font-size: 1.25rem;
    }

    &:hover {
      background: $sm-gray;
    }
    }
}

.typingContainer {
  width: 100%;
  position: fixed;
  bottom: 5rem;
  text-align: center;

  @include mq($from:tablet) {
    bottom: 6.5rem;
  }

  &.blink {
    display: none;
  }

  .bottemp {
    max-width: 54rem;
    margin: 0 auto;
    padding-left: 1.5rem;
  }
}

</style>
