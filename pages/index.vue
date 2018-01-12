<template lang="pug">
  .wrapper
    nuxt-link(to="/chat")
      img(src="~/assets/img/we-decomplex-digital.svg").claim
      //- .padded-multiline
      //-   h1
      //-     strong(v-html="claim")
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
      router.push('/chat')
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

h1 {
  color: black
}

.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-unit*2;
}

a h1 {
  text-indent: 36px;
  color: black;
  // background: $sm-grello;
  width: auto;
  text-decoration: none;
  font-size: rem(36);

  @include mq($from: tablet) {
    font-size: rem(64)
  }
}

.padded-multiline { 
  line-height: 1.3; 
  // padding: 2px 0; 
  // border-left: 20px solid $sm-grello;
  // width: 400px;
  margin: 20px auto;
}
.padded-multiline h1 { 
  // background-color: $sm-grello;
  padding: 4px 0;
  padding-left: 20px;
  color: black; 
  display: inline;
  margin: 0; 
}
.padded-multiline h1 strong { 
  background-color: $sm-grello;
  display: inline;
  padding:12px;
  // padding-left: 30px;
  position: relative;
  left: -10px; 
  box-decoration-break: clone;
}

.claim {
  max-width: 100%;
}
</style>
