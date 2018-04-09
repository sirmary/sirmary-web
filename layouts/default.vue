<template lang="pug">
  main
    noscript
      | Please enable Javascript to view this web site.
    logo(class="logo" :class="{blurry: this.$store.state.isLogoBlurred}")
    nuxt
</template>

<script>
import logo from '~/components/logo.vue'

export default {
  components: {
    logo
  },
  mounted () {
    this.$store.state.isLogoBlurred = false
  }
}
</script>


<style lang="scss" scoped>

@import '~assets/css/_settings.scss';

.logo {
  transition: all .5s ease;
}

.blurry {
  filter: blur(5px);
  opacity: 0;
}
</style>
