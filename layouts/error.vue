<template lang="pug">
  main
    | error
    img(src="~/assets/img/sirmary_logo_opt.svg", class="logo")
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
</style>
