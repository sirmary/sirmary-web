<template lang="pug">
  .grid-wrapper
    h1 Team
    .team-grid#team-grid
      person-preview(:person="person", v-for="person in team", :key="person.id")
    //- close-modal(:link="teamLink")
</template>

<script>
// import { createClient } from '~/plugins/contentful.js'
import CloseModal from '~/components/CloseModal.vue'
import PersonPreview from '~/components/person-preview.vue'

// const client = createClient()

export default {
  props: ['team'],
  data () {
    return {
      teamLink: '/chat'
    }
  },
  components: {
    'close-modal': CloseModal,
    'person-preview': PersonPreview
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #926392 }', type: 'text/css' }
      ]
    }
  },
  beforeMount () {
    document.body.classList = 'team teamView'
    this.$store.state.isArrow = false
  },
  mounted () {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g)
    if (isIE) {
      document.body.setAttribute('class', 'team teamView')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';
.grid-wrapper {
  margin: 0 auto;
  padding: 12px;
  padding-bottom: 100px;
  width: 100%;
}

  h1 {
    width: 100%;
    max-width: rem(1200);
    text-indent: $text-indent;
    margin: 0;
    margin-bottom: 24px;
  }

  .team-grid {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    max-width: rem(1200);
    margin: 0 auto;
    font-weight: 700;
  }

.details {
  width: 100%;
  max-width: 100vw;
  padding: 24px;
  padding-top: 0;
}

// .close-modal button {
//   font-size: 2.2rem;
//   font-weight: 100;
//   line-height: .5;
// }


.person-view {
  width: 100%;
  // margin-left: 100vw;
}

</style>
