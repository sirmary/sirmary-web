<template lang="pug">
  .container
    .cases-grid
      .case-wrapper(v-for="post in posts" :key="post.id")
        article-preview(:post="post")
    close-modal
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'
import CloseModal from '~/components/CloseModal.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.updatedAt'
    }).then(entries => {
      let posts = []
      for (let item of entries.items) {
        if (typeof item.fields.overviewThumbnail !== 'undefined') {
          if (typeof item.fields.overviewThumbnail.fields !== 'undefined') {
            posts.push(item)
          }
        }
      }
      return {
        posts
      }
    })
  },
  methods: {
    changeView () {
      this.$emit('changeView', 'ChatWidget')
    }
  },
  components: {
    ArticlePreview,
    Navigation,
    'close-modal': CloseModal
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #000 }', type: 'text/css' }
      ]
    }
  },
  beforeMount () {
    this.$store.state.isArrow = false
  },
  mounted () {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g)
    if (isIE) {
      document.body.setAttribute('class', 'cases')
    } else {
      document.body.classList = 'cases'
    }
    this.$store.state.logoColor = 'white'
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';


.cases-grid {
  display: flex;
  flex-flow: row wrap;
  max-width: rem(1024);
  margin: 0 auto;
}


  .case-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex: 1 1 100%;
    margin-bottom: 3rem;

    @include mq($from: tablet) {
      flex: 0 1 50%;
      // padding: 12px;
    }


    .case {
      background: rgba(white,.1);
      display: flex;
      flex: 1 1 auto;
      padding: $spacing-unit;
      align-items: center;
      transition: background .2 ease;

      &:hover {
        background: rgba(white,.2);
      }
    }

    .article-wrapper {
      width: 100%;
      padding: 0;
    }



    img {
      width: 100%;
    }
  }


</style>
