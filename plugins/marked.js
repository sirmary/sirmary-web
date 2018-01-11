import Vue from 'vue'
export const marked = require('marked')
Vue.mixin({
  methods: {
    marked: function (input) {
      return marked(input)
    }
  }
})

// Solution found ehre: https://forum.vuejs.org/t/parsing-markdown-with-vue-v2/3431/4
