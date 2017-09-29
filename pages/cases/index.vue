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
        // console.log(item)
        // console.log(typeof item.fields.overviewThumbnail)
        // console.log(item.sys.updatedAt)
        if (typeof item.fields.overviewThumbnail !== 'undefined') {
          // console.log(item.fields.overviewThumbnail)
          if (typeof item.fields.overviewThumbnail.fields !== 'undefined') {
            // console.log(item.fields.overviewThumbnail.fields)
            posts.push(item)
          }
        }
      }
      // console.log(posts)
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
        { cssText: ':root { background: #595959 }', type: 'text/css' }
      ]
    }
  },
  beforeMount () {
    document.body.classList = 'cases'
    this.$store.state.isArrow = false
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
    margin-bottom: 12px;

    @include mq($from: tablet) {
      flex: 0 1 50%;
      padding: 12px;
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
  }


</style>
