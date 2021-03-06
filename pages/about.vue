<template lang="pug">
  .container
    .about-content
      h1.page-title {{post.fields.claim}}
      .copy(v-html="marked(post.fields.body)")
      .features
        .feature(v-for="(thing, index) in post.fields.featuresWidget")
          .floating-number 0{{index+1}}
          h3(:key="index", v-html="thing.feature")
          ul
            li(v-for="feature in thing.features") {{feature}}
      .footer(v-html="marked(post.fields.footer)")
      p.copyright &copy; {{year}} Sir Mary AG, Switzerland
    close-modal
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import CloseModal from '~/components/CloseModal.vue'

const client = createClient()
const year = new Date().getFullYear()

export default {
  transition: 'about',
  components: {
    'close-modal': CloseModal
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'specialPage',
      'sys.id': env.CTF_ABOUT_TYPE_ID
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
  },
  data () {
    return {
      leave: false,
      year: year
    }
  },
  head () {
    return {
      title: 'About Sir Mary',
      style: [
        { cssText: ':root { background: #000000 }', type: 'text/css' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted () {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g)
    if (isIE) {
      document.body.setAttribute('class', 'about')
    } else {
      document.body.classList = 'about'
    }
    this.$store.state.logoColor = 'white'
  }
}
</script>

<style lang="scss">
@import '~assets/css/_settings.scss';


.about-content {
  max-width: 40rem;
  margin: 0 auto;
  padding-top: 60px;
  color: white;

  img {
    margin: 0 auto;
    width: 100%;
    padding: rem(36);
  }
}

.copy, .footer, .features, .copyright {
  font-size: rem(16);
  line-height: rem(22);
  // text-indent: $text-indent;
  font-weight: 700;

  @include mq($from: tablet) {
    font-size: rem(21);
    line-height: rem(29);
  }
}

.copy {
  color: #a8a8a8;
  p:first-child {
    text-indent: $text-indent;
  }
}
.copyright {
  text-indent: 0;
  margin-bottom: rem(60);
  margin-top: rem(120);
}

.features {
  color: white;
  text-align: center;
  text-indent: 0;

  max-width: 30rem;
  margin: 0 auto;
  margin-top: rem(60);
  margin-bottom: rem(60);

  .floating-number {
    color: white;
    font-family: $base-font-family;
    font-weight: 700;
    font-size: rem(36);
    position: absolute;
    top: -20px;
    z-index: 0;
    left: 20%;
  }

  .feature {
    color: white;
    position: relative;
    cursor: pointer;

    &:nth-child(2) {
      .floating-number {
        left: 75%;
        top: 30px;
      }
    }


    &:nth-child(3) {
      .floating-number {
        left: 20%;
        top: 0;
      }
    }

    &:hover, &:active {
      ul {
        height: auto;
      }
      li {
        transform: scaleY(1);
        opacity: 1;
      }
    }

  }

  h3 {
    font-weight: normal;
    font-size: rem(48);
    line-height: 1.2;
    margin-bottom: rem(24);
      font-family: 'LeviReBrushed', 'Roboto', sans-serif;
  text-transform: uppercase;
  color:$sm-grello;
  }


  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    @include mq($from: desktop) {

      height: 0;
    }

    li {
      transition: all .5s ease;
      font-weight: 700;
      color: #a8a8a8;


      @include mq($from: desktop) {
        opacity: 0;
        transform: scaleY(0);

      }
    }
  }
}

.footer {
  ul  {
    padding: 0;
    list-style: none;
  }
  li a {
    color: $sm-grello;
  }
  li p {
    margin: 0;
  }
  text-align: left;
  p {
    text-indent: 0;
  }
  p:first-child {
    // text-indent: $text-indent;
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

.about-enter-active, .about-leave-active {
  transition: all .6s ease-in-out;
  margin-top: 0;
  opacity: 1;

}
.about-enter, .about-leave-active {
  margin-top: 100vh;
  opacity: 0;
}
</style>
