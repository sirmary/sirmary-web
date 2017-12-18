<template lang="pug">
  .container
    .client-grid
      h1 Unser Kundenportfolio
      .client-wrapper(v-for="client in clients", :key="client.id", :to="{ name: 'clients-client', params: { client: client.fields.slug }}")
        img(class="thumbnail", :src="client.fields.icon.fields.file.url")
    close-modal
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import CloseModal from '~/components/CloseModal.vue'

const client = createClient()

export default {
  transition: 'test',
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_CLIENT_TYPE_ID,
      order: '-sys.updatedAt'
    }).then(entries => {
      return {
        clients: entries.items
      }
    })
  },
  components: {
    CloseModal
  },
  head () {
    return {
      style: [
        { cssText: ':root { background: #CB754A }', type: 'text/css' }
      ]
    }
  },
  mounted () {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g)
    if (isIE) {
      document.body.setAttribute('class', 'clients')
    } else {
      document.body.classList = 'clients'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

.container {
  display: flex;
  flex-flow: column nowrap;
  transition: margin-left .5s cubic-bezier(0.0, 0.0, 0.2, 1);
  background: orange;
  padding: 100px 24px;
}

// .grid {
//   width: 100vw;
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 12px;

  h1 {
    // height: 60px;
    width: 100%;
    text-indent: $text-indent;
    margin: 0;
    margin-bottom: rem(72);
    font-size: rem(36);

    @include mq($from: tablet) {
      font-size: rem(64);
    }
  }
// }


.client-grid {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  max-width: rem(720);
  margin: 0 auto;
  font-weight: 700;


  .client-wrapper {
    // background: rgba(white, .2);
    // padding: $spacing-unit/2;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex: 0 1 33.33%;
    // height: 150px;
    padding: rem(24);
    padding-bottom: rem(36);

    img {
      max-width: 100%;
    }
    // @include mq($from: tablet) {
    //   flex: 1 1 3%;
    // }
  }
}


// 


// h1 {
//   text-indent: $text-indent;
// }

// .container {
//   padding: 24px;
//   padding-top: 100px;
// }

// .client-grid {
//   display: flex;
//   flex-flow: row wrap;
// }




//     .client {
//       background: rgba(white,.1);
//       display: flex;
//       flex: 1 1 auto;
//       padding: $spacing-unit;
//       align-items: center;
//       justify-content: center;
//       transition: background .2 ease;
//     }
//   }

// .client-thumb {
//   background: rgba(white,.1);
// }
// ul {
//   margin: 0;
//   padding: 0;
// }
// ul li {
//   list-style: none;
//   margin:0;
//   text-indent: 0;
//   margin-bottom: $spacing-unit;
//   @include mq($from: tablet) {
//     width: 33.33%;
//     float:left;
//   }

// @include mq($from: desktop) {
//   width: 25%;
//   float: left;
// }


// }
// .test-enter-active, .test-leave-active {
//   transition: opacity .5s;
// }
// .test-enter, .test-leave-active {
//   opacity: 0;
// }
</style>
