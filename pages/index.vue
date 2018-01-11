<template lang="pug">
  .wrapper
    nuxt-link(to="/chat")
      h1(v-html="claim")
</template>

<script>

export default {
  data () {
    return {
      claim: 'We decomplex<br> digital.'
    }
  },
  head () {
    return {
      style: [
        { cssText: ':root { background-color: #efefef }', type: 'text/css' }
      ]
    }
  },
  mounted () {
    let router = this.$router
    setTimeout(function () {
      // console.log('inside timer')
      // console.log(router)
      router.push('/chat')
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-unit*2;
}

a h1 {
  text-indent: 36px;
  color: white;
  text-decoration: none;
  font-size: rem(36);

  @include mq($from: tablet) {
    font-size: rem(64)
  }
}

</style>
