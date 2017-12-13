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
      samsung
    .snow-controls
      button(@click="changePhase(1)") phase 1
      button(@click="changePhase(2)") phase 2
      button(@click="changePhase(3)") phase 3
      button(@click="changePhase(4)") phase 4
</template>

<script>
import Snowf from '~/components/Snowf.vue'
import samsung from '~/components/samsung.vue'

export default {
  components: {
    Snowf,
    samsung
  },
  data () {
    return {
      client: 'samsung',
      snowAmount: 700,
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
      config: {
        headers: {'Authorization': 'bearer ' + process.env.apiAccessToken}
      },
      messages: this.$store.state.messages,
      messagesScrolltop: 0
    }
  },
  asyncData: async ({ app, route, payload }) => ({
    samsung: await app.$content('/').get('samsung') || payload
  }),
  methods: {
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
          this.snowAmount = 700
          this.snowSize = 8
          this.snowSpeed = 5
          this.snowWind = 3
          this.snowSwing = 4
          this.snowOpacity = 0.95
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
      // let messagesHeight = this.$refs.messages.scrollHeight
      // this.$refs.messageBox.scrollTop = messagesHeight + 100
    },
    handleClick (event, value) {
      let myLink = event.target.dataset.link
      this.$router.push(myLink)
    },
    handleAction (value) {
      console.log('clicked an action')
      console.log(value)
      this.$store.state.santaMsgs.push(value)
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
    this.$on('handleAction', (value) => {
      console.log('should do something')
    })
    let self = this
    this.snowAmount = 50
    this.$store.state.logoColor = 'white'
    this.$store.state.santaIsTyping = true
    setTimeout(function () {
      // self.scrollToEnd()
      self.$store.state.santaMsgs.push('santa1')
      self.$store.state.santaIsTyping = false
    }, 2000)
    setTimeout(function () {
      // self.scrollToEnd()
      self.$store.state.santaMsgs.push('santa2')
      self.$store.state.santaActions = 1
    }, 3000)
  },
  updated () {
    // console.log('updated')
    // let containerHeight = this.$refs.messageBox.clientHeight
    // let messagesHeight = this.$refs.messages.clientHeight
    // if (messagesHeight >= containerHeight) {
    //   this.$refs.messages.style.height = '100%'
    // }
    // this.scrollToEnd()
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
  bottom: 120px;
  display: block;
  padding: 0;
  padding-top: 24px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  overflow: auto;
  height: calc(100% - 136px);
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
    position: absolute;
    bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;

    .button {
        cursor: pointer;
        margin: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>
