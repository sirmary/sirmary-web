<template lang="pug">
  .container
    .grid
      h1 The Team
      .team-grid
        person-preview(:person="person", v-for="person in team", :key="person.id")
    close-modal(:link="teamLink")
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import CloseModal from '~/components/CloseModal.vue'
import PersonPreview from '~/components/person-preview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'person',
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        team: entries.items
      }
    })
  },
  data () {
    return {
      teamLink: '/chat'
    }
  },
  methods: {
    shuffle () {
      this.team = this.shuffleArray(this.team)
      this.$store.state.isTeamShuffled = true
    },
    shuffleArray (arr) {
      var newArr = arr.slice()
      for (var i = newArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = temp
      }
      return newArr
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
    if (!this.$store.state.isTeamShuffled) {
      this.shuffle()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/_settings.scss';

.container {
  display: flex;
  flex-flow: row nowrap;
  padding: 100px 0 0 0;
  transition: margin-left .5s cubic-bezier(0.0, 0.0, 0.2, 1);
}
.grid {
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;

  h1 {
    // height: 60px;
    width: 100%;
    max-width: rem(1200);
    text-indent: $text-indent;
    margin: 0;
    margin-bottom: 24px;
  }
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

.close-modal button {
  font-size: 2.2rem;
  font-weight: 100;
  line-height: .5;
}


.person-view {
  width: 100%;
  // margin-left: 100vw;
}

</style>
