<template lang="pug">
  main
    #particle-wrapper
      vue-particles(v-show="$store.state.snowing" color="#dedede")
    noscript
      | Please enable Javascript to view this web site.
    img(src="https://secure.leadforensics.com/89514.png", style="display:none;")
    img(src="~/assets/img/sirmary_logo_opt.svg", class="logo", :class="{ blur: $store.state.isLogoBlurred }")
    nuxt
</template>

<script>

export default {
  methods: {
    track_load (docloc, doctit) {
      var trkSw = escape(screen.width).substring(0, 6)
      var trkSh = escape(screen.height).substring(0, 6)
      var trkRef = escape(document.referrer).substring(0, 1100)
      var trkTit = escape(doctit).substring(0, 200)
      trkTit = trkTit.replace(/u00a0/g, '')
      trkTit = trkTit.replace(/u2122/g, '')
      trkTit = trkTit.replace(/u[0-9][0-9][0-9][0-9]/g, '')
      var trkLoc = escape(docloc).substring(0, 200)
      var trkAgn = escape(navigator.appName).substring(0, 100)
      var trkLng = window.navigator.userLanguage || window.navigator.language
      var trkAgv = escape(navigator.userAgent + '.lfcd' + screen.colorDepth + '.lflng' + trkLng).substring(0, 1000)
      var trkDom = escape(document.domain).substring(0, 200)
      var trkUser = '89514'
      // var trkCookie = ''
      var trkGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0
        var v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
      var trkImg = 'https://secure.leadforensics.com/Track/Capture.aspx'
      var trkLink = trkImg + '?trk_user=' + trkUser + '&trk_sw=' + trkSw + '&trk_sh=' + trkSh + '&trk_ref=' + trkRef + '&trk_tit=' + trkTit + '&trk_loc=' + trkLoc + '&trk_agn=' + trkAgn + '&trk_agv=' + trkAgv + '&trk_dom=' + trkDom + '&trk_guid=' + trkGuid + '&trk_cookie=NA'
      var preload = new Image()
      preload.src = trkLink
    }
  }
  // watch: {
  //   '$route': function () {
  //     // track the route change here
  //     console.log(this.path)
  //   }
  // }

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
