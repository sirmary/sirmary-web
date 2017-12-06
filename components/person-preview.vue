<template lang="pug">
  .person-wrapper
    .person-content
      nuxt-link(:to="{ name: 'team-slug', params: { slug: person.fields.slug }}", class="person")
        img(class="thumbnail", :src="person.fields.image.fields.file.url + '?fit=scale&w=50&h=50'")
        .text-wrapper
          p.person-name {{ person.fields.name }}
          p.person-title {{ person.fields.title }}
</template>

<script>
export default {
  props: ['person']
}
</script>

<style scoped lang="scss">
@import '~assets/css/_settings.scss';

  .person-wrapper {
    // background: rgba(white, .2);
    // padding: $spacing-unit/2;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    flex: 0 1 100%;

    @include mq($from: tablet) {
      flex: 0 1 50%;
    }

    @include mq($from: desktop) {
      flex: 0 1 33.33%;
    }

    .person-content {
      padding: $spacing-unit/2;
      width: 100%;
      height: 100%;
    }

    .person {
      // min-height: 10rem;
      height: 100%;
      background: rgba(white,.3);
      display: flex;
      flex: 1 1 auto;
      padding: $spacing-unit;
      align-items: center;
      transition: background .2 ease;

      &:hover {
        background: rgba(white,.2);
      }

      @include mq($from: tablet) {
        padding: $spacing-unit*2;
      }
    }

    img {
      width: 36px;
      height: 36px;
      margin-right: 24px;

      @include mq($from: tablet) {
        width: 48px;
        height: 48px;
      }
    }
  }

  .person-name {

    font-size: rem(24);
    line-height: 1.2;
    margin: 0;
    margin-bottom: 6px;

    @include mq($from: tablet) {
      margin-bottom: 12px;
    }
  }

.person-title {
  font-size: .8rem;
  margin: 0;
}

    img {
      width: 40%;
    }

    h4 {
      // text-indent: 13vw;
      font-weight: 700;
      font-size: 1.5rem;
      color: white;
      margin:0;
      // margin-bottom: 12px;
    }

    a {
      color: white;
      text-decoration: none;
    }
    p a {

      text-indent: $text-indent;
    }

</style>
