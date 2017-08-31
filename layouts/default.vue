<template lang="pug">
  main
    noscript
      | Please enable Javascript to view this web site.
    img(src="https://secure.leadforensics.com/89514.png", style="display:none;")
    img(src="~/assets/img/sirmary_logo_opt.svg", class="logo", :class="{ blur: $store.state.isLogoBlurred }")
    nuxt
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>

@import '~assets/css/_settings.scss';

.logo {
  transition: filter .5s ease;
}

.logo.blur {
  filter: blur(5px)
}
</style>
