<template lang="pug">
  .container
    img(v-if="type === 'image/gif'" :src="post.fields.heroImage.fields.file.url", :alt="post.fields.heroImage.fields.description", class="hero-image")
    img(v-else :src="post.fields.heroImage.fields.file.url+'?fm=jpg&q=60&fl=progressive'", :alt="post.fields.heroImage.fields.description", class="hero-image")
    .body-container
      .wrapper
        .copy
          h1 {{ post.fields.title }}
          p {{ post.fields.description }}
          div(v-html="marked(post.fields.intro)")
        .images-spaces.group
          .image(v-for="image in post.fields.imagesWithSpaces")
            img(:src="image.fields.file.url")
        .images-no-spaces.group
          .image(v-for="image in post.fields.imagesWithNoSpaces")
            img(:src="image.fields.file.url")
        .copy
          div(v-html="marked(post.fields.body)") 
          p {{post.fields.linkToProject}}
    close-modal(:link="'/cases'")
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import CloseModal from '~/components/CloseModal.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0],
        type: entries.items[0].fields.heroImage.fields.file.contentType
      }
    })
    .catch(console.error)
  },
  methods: {
    handleClick (event, value) {
      this.$router.push('/' + this.myLink)
      // console.log(value)
    }

  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #000 }', type: 'text/css' }
      ]
    }
  },
  components: {
    Navigation,
    'close-modal': CloseModal
  },
  beforeMount () {
    this.$store.state.isArrow = true
  },
  mounted () {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g)
    if (isIE) {
      document.body.setAttribute('class', 'cases detailView')
    } else {
      document.body.classList = 'cases detailView'
    }
  }
}
</script>

<style lang="scss" scoped>

@import '~assets/css/_settings.scss';

$column-width: 40rem;

.container {
  margin: 0 auto;
  text-align: center;
  color: #a8a8a8;


@include mq($from: tablet) {
  padding-top: 120px;
}

}

.group:after {
  content: "";
  display: table;
  clear: both;
}



h1 {
  text-align: left;
  text-indent: $text-indent;
  font-size:rem(36);
  max-width: $column-width;
  margin: 0 auto;
  line-height: 1.2;

  @include mq($from: tablet) {
    font-size: rem(64);
  }

}


a {
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.copy {
  text-align: left;
  max-width: $column-width;
  margin: 0 auto;
  padding: 24px;
  // text-indent: $text-indent;
  font-size: rem(16);
  line-height: rem(21);

  @include mq($from: tablet) {
      font-size: rem(21);
  line-height: rem(28);
  }

  iframe {
    margin-bottom: 24px;
    max-width: 100%;
  }

  ul {
      text-indent: 0;
    li {
      text-indent: 0;
    }
  }


}


.hero-image {
  width: 100%;
  max-width: $column-width;
  margin: 0 auto;
}

.images-spaces {
  @include mq($from: tablet) {
    max-width: 60rem;
    margin:0 auto;
  }

  .image {
    width: 100%;
    max-width: $column-width;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 6px;

    @include mq($from: tablet) {
    float: left;
      padding: 6px;
      width: 33.3333%;
    }


  }
}

.images-no-spaces {
  @include mq($from: tablet) {
    max-width: 60rem;
    margin: 0 auto;
  }

  .image {
    width: 100%;
    max-width: $column-width;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 0;

    @include mq($from: tablet) {
      float: left;
      padding: 0;
      width: 33.3333%;
    }

    img {
      width: 100%;
      margin-top: -3px;
    }
  }
}


</style>
