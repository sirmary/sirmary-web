import Vue from 'vue'
import Marked from '~/node_modules/marked'
// const marked = require('marked')
Vue.mixin({
  methods: {
    marked: function (input) {
      return Marked(input)
    }
  }
})

// Solution found ehre: https://forum.vuejs.org/t/parsing-markdown-with-vue-v2/3431/4
