<template lang="pug">
  .container
    section.body-container
      .cases-grid
      .case-wrapper(v-for="post in filt" :key="post.id")
        article-preview(:post="post")
    close-modal(:link="'/clients'")
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'
import CloseModal from '~/components/CloseModal.vue'

const clientData = createClient()

export default {
  asyncData ({ env, params }) {
    return clientData.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.client.sys.contentType.sys.id': env.CTF_CLIENT_TYPE_ID,
      'fields.client.fields.slug[all]': params.client
    }).then(entries => {
      // console.log(entries)
      return {
        filt: entries.items,
        client: entries.items[0].fields.client.fields.title
      }
    })
  },
  components: {
    ArticlePreview,
    'close-modal': CloseModal
  },
  head () {
    return {
      title: 'SiR MaRY - ' + this.client,
      style: [
        { cssText: ':root { background: #CB754A }', type: 'text/css' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Details, client: ' + this.client }
      ]
    }
  },
  beforeMount () {
    document.body.classList = 'client detailView'
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

.container {
  padding-top: 100px;
  max-width: 60rem;
  margin:0 auto;
}

.cases-grid {
  display: flex;
  flex-flow: row wrap;
}


  .case-wrapper {
    // background: rgba(white, .2);
    padding: 0;
    display: flex;
    // flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    flex: 1 1 100%;
    // background: rgba(red,.1);
    margin-bottom: 12px;

    @include mq($from: tablet) {
      flex: 1 1 50%;
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

    // img {
    //   width: 36px;
    //   height: 36px;
    //   margin-right: 12px;
    // }
  }
</style>
