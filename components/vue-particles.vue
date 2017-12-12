<template>
  <div
    id="particles-js"
    :color="color"
    :particleOpacity="particleOpacity"
    :linesColor="linesColor"
    :particlesNumber="particlesNumber"
    :shapeType="shapeType"
    :particleSize="particleSize"
    :linesWidth="linesWidth"
    :lineLinked="lineLinked"
    :lineOpacity="lineOpacity"
    :linesDistance="linesDistance"
    :moveSpeed="moveSpeed"
    :hoverEffect="hoverEffect"
    :hoverMode="hoverMode"
    :clickEffect="clickEffect"
    :clickMode="clickMode"
  ></div>
</template>
<script>
  // import store from '~/store/index.js'
  // const snowData = store().state.snowData
  import {bus} from '~/plugins/bus.js'

  /* eslint-disable */
  export default {
    name: 'vue-particles',
    props: {
      color: {
        type: String,
        default: '#dedede'
      },
      particleOpacity: {
        type: Number,
        default: 0.7
      },
      particlesNumber: {
        type: Number,
        default: 80
      },
      shapeType: {
        type: String,
        default: 'circle'
      },
      particleSize: {
        type: Number,
        default: 4
      },
      linesColor: {
        type: String,
        default: '#dedede'
      },
      linesWidth: {
        type: Number,
        default: 1
      },
      lineLinked: {
        type: Boolean,
        default: true
      },
      lineOpacity: {
        type: Number,
        default: 0.4
      },
      linesDistance: {
        type: Number,
        default: 150
      },
      moveSpeed: {
        type: Number,
        default: 3
      },
      hoverEffect: {
        type: Boolean,
        default: true
      },
      hoverMode: {
        type: String,
        default: 'grab'
      },
      clickEffect: {
        type: Boolean,
        default: true
      },
      clickMode: {
        type: String,
        default: 'push'
      }
    },
    mounted () {
      // import particle.js only on client-side
      require('particles.js')
      this.$nextTick(() => {
        this.initParticleJS(
          this.color,
          this.particleOpacity,
          this.particlesNumber,
          this.shapeType,
          this.particleSize,
          this.linesColor,
          this.linesWidth,
          this.lineLinked,
          this.lineOpacity,
          this.linesDistance,
          this.moveSpeed,
          this.hoverEffect,
          this.hoverMode,
          this.clickEffect,
          this.clickMode
        )
      })
      bus.$on('redoSnow', this.initParticleJS())
    },
    methods: {
      initParticleJS (
        color,
        particleOpacity,
        particlesNumber,
        shapeType,
        particleSize,
        linesColor,
        linesWidth,
        lineLinked,
        lineOpacity,
        linesDistance,
        moveSpeed,
        hoverEffect,
        hoverMode,
        clickEffect,
        clickMode
      ) {
        particlesJS('particles-js', this.$store.state.snowData);
      }

    }
  }
  /* eslint-disable */
</script>
