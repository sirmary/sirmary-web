<template lang="pug">
  .container
    close-modal(:link="'/jobs'")
    .job-body
      //- h1 {{ job.fields.title }}
      div(v-html="marked(job.fields.body)") {{job.fields.body}}
</template>

<script>
import {marked} from 'marked'
import {createClient} from '~/plugins/contentful.js'
import CloseModal from '~/components/CloseModal.vue'

const jobClient = createClient()

export default {
  // transition: 'slide',
  asyncData ({ env, params }) {
    return jobClient.getEntries({
      'content_type': 'job',
      'fields.slug': params.slug
    }).then(entries => {
      return {
        job: entries.items[0]
      }
    })
    .catch(console.error)
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #926392 }', type: 'text/css' }
      ]
    }
  },
  components: {
    marked,
    'close-modal': CloseModal
  },
  beforeMount () {
    this.$store.state.isArrow = true
  },
  mounted () {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g)
    if (isIE) {
      document.body.setAttribute('class', 'job detailView')
    } else {
      document.body.classList = 'job detailView'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

.container {
  padding: 24px;
  padding-top: 48px;
  // max-width: 40rem;
  margin: 0 auto;
  background: rgba(white,.3);
}

h2 {
  font-size: 2.25rem;
}

.img-holder {
  height: 200px;
  width: 200px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }

  @include mq($from: tablet) {
    height: 300px;
    width: 300px;
  }
}

a {
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.job-body {
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 40rem;
  margin: 0 auto;

  h3 {
    color: black;
  }
}


</style>
