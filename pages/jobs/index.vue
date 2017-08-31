<template lang="pug">
  .container
    .jobs-content
      h1 Jobs
      p.copy
        | Wir suchen Sirs und Marys, die den digitalen Wandel mitgestalten wollen, statt nur darüber zu reden.
      .jobs-grid
        nuxt-link(:to="{ name: 'jobs-slug', params: { slug: job.fields.slug }}", :job="job" v-for="job in jobs" :key="job.id")
          .job-item
            p {{ job.fields.title }}
      p.copy
        | Nichts Passendes gefunden, aber wir sollten dich trotzdem kennenlernen? Dann schicke uns bitte deine
        | #[a(href="mailto:jobs@sirmary.com") Initiativbewerbung]. Wir sind immer auf der Suche nach aussergewöhnlichen Talenten.
    close-modal
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'
import CloseModal from '~/components/CloseModal.vue'

const jobClient = createClient()

export default {
  // transition: 'slide',
  asyncData ({ env, params }) {
    return jobClient.getEntries({
      'content_type': 'job',
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        jobs: entries.items
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
    'close-modal': CloseModal
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #926392 }', type: 'text/css' }
      ]
    }
  },
  beforeMount () {
    document.body.classList = 'jobs'
  }
}
</script>

<style lang="scss" scoped>

@import '~assets/css/_settings.scss';

.jobs-content {
  max-width: 40rem;
  margin: 0 auto;
  padding-top: 60px;

  img {
    margin: 0 auto;
    width: 100%;
    padding: rem(36);
  }
}

.copy  {
  font-size: rem(16);
  line-height: rem(22);
  // text-indent: $text-indent;
  font-weight: 700;

  @include mq($from: tablet) {
    font-size: rem(21);
    line-height: rem(29);
  }
}




h1 {
  text-indent: $text-indent;
  padding: 0 12px;
  margin-bottom: rem(24);
  font-size: rem(36);

  @include mq($from: tablet) {
    font-size: rem(64);
  }
}

.container {
  padding: 24px;
  padding-top: 48px;
}

.jobs-grid {
   display: flex;
    width: 100%;
    flex-flow: column wrap;
    max-width: rem(900);
    margin: 0 auto;
    font-weight: 700;
    margin: rem(36) 0;
}

.title-wrapper {
  width: 100%;
  max-width: rem(900);
  margin: 0 auto;

  @include mq($from: tablet) {
    padding-right: rem(200);
  }
}

.job-item {
  margin-bottom: 6px;
  color: rgba(black, .7);
  font-family: 'LeviReBrushed';
    font-weight: normal;
    font-size: rem(36);
    line-height: 1.2;
    margin-bottom: rem(12);
    text-align: center;

    p {
      margin: rem(24) 0;
    }

&:hover {
  color: black;
}
}


</style>
