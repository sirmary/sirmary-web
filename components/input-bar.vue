<template>
   <div class="input-wrapper">
      <div class="input-bar">
         <input type="text" v-model="msg" @keyup.enter="quickMatch">
         <button id="help-button" @click="getHelp">?</button>
     </div>
   </div>
</template>

<script>
import {bus} from '~/plugins/bus.js'
export default {
  data (env) {
    return {
      msg: '',
      quickMatches: [{
        words: [
          'pascal',
          'pascal baumann',
          'pi'
        ],
        'route': 'team/pascal'
      },
      {
        words: ['work', 'projects', 'what'],
        'route': 'cases'
      },
      {
        words: ['team', 'who', 'mitarbeiter'],
        'route': 'team'
      }
      ]
    }
  },
  methods: {
    addMsg () {
      // this.chats.push(this.msg)
      // quickMatch(this.msg)
      this.msg = ''
    },
    getHelp () {
      alert('This is some help')
    },
    quickMatch () {
      let word = this.msg
      bus.$emit('addMsg', this.msg)
      for (let match of this.quickMatches) {
        if (match.words.includes(word)) {
          // console.log('match! Going to: ' + match.route)
          location.href = '/' + match.route
        } else {
          // console.log('no match : (')
        }
      }
      this.msg = ''
    }
  }
}

</script>

<style scoped lang="scss">
  @import '~assets/css/_settings.scss';

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

  input {
    border:none;
    border-radius: 23px;
    flex: 1 1 auto;
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
  }
}


</style>
