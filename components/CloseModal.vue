<template lang="pug">
  nuxt-link(:to="link", class="close-modal", :class="{ sticky: isSticky, arrow: isArrow }", ref="closeButton")
    button
      //- svg#close-btn(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 36 35")
      //-   path(d="M2.47,2,33.53,33M2.47,33,33.53,2")
      svg#close-btn(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 36 35")
        line(id="x2" class="cls-1" x1="1" y1="17.5" x2="35" y2="17.5")
        line(id="wing1" class="cls-1" x1="1" y1="17.5" x2="18" y2="17.5")
        line(id="wing2" data-name="wing1" class="cls-1" x1="1" y1="17.5" x2="18" y2="17.5")
        line(id="x1" class="cls-1" x1="1" y1="17.5" x2="35" y2="17.5")
</template>

<script>

export default {
  props: {
    link: {
      default: '/chat',
      type: String
    }
  },
  data () {
    return {
      isSticky: false,
      isArrow: false
    }
  },
  mounted () {
    let closeButton = this.$refs.closeButton
    let $data = this.$data
    let $store = this.$store
    document.body.onscroll = function () {
      if (closeButton.$el.parentElement.getBoundingClientRect().top < 25) {
        $data.isSticky = true
        $store.state.isLogoBlurred = true
      } else {
        $data.isSticky = false
        $store.state.isLogoBlurred = false
      }
    }
  }
}
</script>
