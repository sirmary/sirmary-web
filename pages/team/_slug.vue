<template lang="pug">
    .person-content(ref="content")
      .img-holder
        img(class="thumbnail", :src="person.image.fields.file.url + '?fit=scale&w=72&h=72'")
      .name
        h1(v-html="person.name")
      h3(v-html="person.title")
      vue-markdown(class="person-bio" v-html="person.shortBio")
      p.person-email
        a(v-bind:href="'mailto:'+person.email") {{person.email}}
      p.person-phone(v-if="person.phone")
        a(v-bind:href="'tel:'+person.phone") {{person.phone}}
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import CloseModal from '~/components/CloseModal.vue'

const personClient = createClient()

export default {
  asyncData ({ env, params }) {
    return personClient.getEntries({
      'content_type': 'person',
      'fields.slug': params.slug
    }).then(entries => {
      if (entries.items[0].fields === undefined) {
      }
      return {
        person: entries.items[0].fields
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
    VueMarkdown,
    'close-modal': CloseModal
  },
  beforeMount () {
    document.body.classList = 'team detailView'
    this.$parent.teamLink = '/team'
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

.person-content {
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  padding: $spacing-unit*2;
}

.name-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
}

.name {
  flex: 0 1 50%;
}

h1 {
  font-size: rem(36);
  text-indent: 36px;
  margin: 0;

  @include mq($from: tablet) {
    font-size: rem(64);
  }
}

h3 {
  text-indent: 36px;
}

.img-holder {
  display: flex;
  flex: 1 1 100%;
  justify-content: center;

  img {
    align-self: center;
    margin-bottom: 12px;
    width: 72px;
    height:72px;
  }
}


a {
  color: white;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
}

.person-bio {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 700;
  // text-indent: $text-indent;
}

.person-phone, .person-email {
  font-size: 1.2rem;
  // text-indent: $text-indent;
}

</style>
