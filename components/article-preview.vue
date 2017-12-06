<template lang="pug">
  .article-wrapper
    .article
      nuxt-link(:to="{ name: 'cases-slug', params: { slug: post.fields.slug }}", class="title")
        .title-wrapper
          h4 {{ post.fields.title }}
          p.description {{ post.fields.description }}
        img(class="thumbnail", :src="post.fields.overviewThumbnail.fields.file.url + '?fit=scale&w=750&h=450&fm=jpg&q=60&fl=progressive'")
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped lang="scss" scoped>
@import '~assets/css/_settings.scss';

  .article-wrapper {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: space-between;
    align-content: space-between;

    .article {
      @include mq($from: tablet) {
        padding: .8rem;
      }
    }

    .title-wrapper {
      padding: 12px;

      p
{
  font-weight: 700;
}    }

    h4 {
      text-indent: 36px;
      font-weight: 700;
      font-size: rem(36);
      color: white;
      margin:0;
      margin-bottom: 12px;
      line-height: 1;
    }

    p {
      margin: 0;
      margin-bottom: 12px;
    }


    .description {
      @include mq($from: tablet) {
        min-height: rem(36);
      }
    }
    a {
      color: white;
      text-decoration: none;
    }

    img {
      width: 100%;
      margin:0 auto;
      align-self: flex-end;
    }
  }
</style>
