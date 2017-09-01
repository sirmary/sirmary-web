<template lang="pug">
  .wrapper
    .chatstuff
      .message-wrapper(ref="messageBox", :class="{ blur: blurred }")
        ul.messages(ref="messages")
          li(v-for="message in messages", :class="message.who", v-html="message.text", @click="handleMsgClick($event)")
      .input-wrapper
        .input-bar
          vue-awesomplete(
            :setting="setting",
            ref="awesomeInput",
            class="input",
            placeholder="Frag mich",
            :internalValue="inputValue",
            @select="dehumanize",
            @open="handleAwesomOpen",
            @close="handleAwesomClose",
            @selectcomplete="selectOne($event)",
            @input="updateValue($event)",
            @enterPressed="checkMsg")
          button(id="help-button", @click="getHelp") ?
    .main-links
      nuxt-link(to="/about") About
      nuxt-link(to="/cases") Cases
      nuxt-link(to="/team") Team
</template>

<script>
import store from '~/store/index.js'
import axios from 'axios'
import {filter} from '~/plugins/badwords.js'
import filterLogic from '~/assets/js/filterlogic.js'
import VueAwesomplete from '~/components/VueAwesomplete'

const filterlogic = filterLogic(store().state.keyData)

export default {
  components: {
    'vue-awesomplete': VueAwesomplete
  },
  data () {
    return {
      route: '',
      inputValue: '',
      blurred: false,
      isHuman: true,
      config: {
        headers: {'Authorization': 'bearer ' + process.env.apiAccessToken}
      },
      messages: this.$store.state.messages,
      helpQuestions: [],
      autoComps: {
        list: []},
      setting: {
        list: [],
        minChars: 2,
        maxItems: 7,
        filter: function (text, input) {
          let helps = [
            'Wer oder was ist SiR MaRY?',
            'Welche Kunden betreut SiR MaRY?',
            'Kann ich bei SiR MaRY arbeiten?',
            'Wie kontaktiere ich SiR MaRY?'
          ]
          if (input.length < 1) {
            return helps.indexOf(text.label) > -1
          }
          return filterlogic.performSentenceLogic(text, input)
        },
        item: function (text, input) {
          let words = input.trim().split(' ')
          let regex = '(' + words.join('|') + ')'
          text = text.replace(RegExp(regex, 'gi'), '<mark>$&</mark>')
          let li = document.createElement('li')
          li.innerHTML = text
          return li
        }
      },
      messagesScrolltop: 0
    }
  },
  computed: {
    cleanMsg () {
      return filter.clean(this.inputValue)
    }
  },
  methods: {
    handleAwesomOpen () {
      this.blurred = true
    },
    handleAwesomClose () {
      this.blurred = false
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
    getHelp () {
      // console.log(this.helpQuestions)
      this.$refs.awesomeInput.awesomplete.isHelpClicked = true
      this.$refs.awesomeInput.awesomplete.minChars = 0
      this.$refs.awesomeInput.awesomplete.input.focus()
      this.$refs.awesomeInput.awesomplete.evaluate()
    },
    dehumanize () {
      this.isHuman = false
    },
    humanize () {
      this.isHuman = true
    },
    updateValue (value) {
      this.inputValue = value
      this.$refs.awesomeInput.awesomplete.isHelpClicked = false
    },
    updateClickedValue (value) {
      this.inputValue = value
    },
    blurInputMobile () {
      if (window.innerWidth < 500) {
        this.$refs.awesomeInput.$el.blur()
      }
    },
    sendMsg () {
      // console.log('sending message...')
      // console.log('* human?: ' + this.isHuman)
      let messages = this.messages
      let $router = this.$router
      let dirtyMsg = this.inputValue
      let cleanMsg = this.cleanMsg
      let self = this
      self.scrollToEnd()
      // console.log(dirtyMsg)
      messages.push({who: 'me', text: cleanMsg})
      axios.post('https://api.api.ai/v1/query?v=20150910', {
        query: dirtyMsg,
        lang: 'en',
        sessionId: '69696969'
      }, this.config)
      .then(function (response) {
        self.scrollToEnd()
        let responseMsg = response.data.result.fulfillment.speech
        setTimeout(function () {
          // console.log('** popping the dots')
          messages.pop()
          // console.log('** pushing the response: ')
          // console.log(responseMsg)
          messages.push({who: 'bot new', text: responseMsg})
          // self.$nextTick(function () {
          //   console.log('next teck')
          //   self.scrollToEnd()
          // })
        }, 1000)

        self.trackEvent(responseMsg)
        if (response.data.result.action !== 'input.unknown') {
          $router.push(response.data.result.action)
        }
        setTimeout(function () {
          document.querySelector('ul').lastChild.classList.remove('new')
        }, 3000)
      })
      .catch(function (error) {
        console.log(error)
        messages.pop()
        messages.push({who: 'bot error', text: 'oops. I didn\'t quite get that...'})
      })
      messages.push({who: 'bottemp waiting', text: `<div class="typing-container"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div>`})
      this.scrollToEnd()
      this.blurInputMobile()
    },
    checkMsg () {
      // console.log('*** Checking message!')
      if (this.isHuman === true && this.inputValue) {
        this.sendMsg()
      }
      this.humanize()
    },
    handleMsgClick (event) {
      if (event.target.dataset.link) {
        this.$router.push(event.target.dataset.link)
      }
    },
    selectOne (value) {
      this.dehumanize()
      this.updateClickedValue(value)
      this.sendMsg()
      this.$refs.awesomeInput.awesomplete.isHelpClicked = false
      this.$refs.awesomeInput.awesomplete.minChars = 2
    },
    scrollToEnd () {
      let messagesHeight = this.$refs.messages.scrollHeight
      this.$refs.messageBox.scrollTop = messagesHeight + 100
    },
    handleClick (event, value) {
      let myLink = event.target.dataset.link
      this.$router.push(myLink)
    }
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #157C78 }', type: 'text/css' }
      ]
    }
  },
  mounted () {
    for (var question of this.$store.state.keyData) {
      this.setting.list.push(question.q)
      if (question.o === 1) {
        this.helpQuestions.push(question.q)
      }
    }
    let self = this
    setTimeout(function () {
      self.scrollToEnd()
    }, 500)
  },
  updated () {
    // console.log('updated')
    let containerHeight = this.$refs.messageBox.clientHeight
    let messagesHeight = this.$refs.messages.clientHeight
    if (messagesHeight >= containerHeight) {
      this.$refs.messages.style.height = '100%'
    }
    this.scrollToEnd()
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

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

</style>
