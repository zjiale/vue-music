<template>
  <div>
    <video :id="vid" class="video-js vjs-big-play-centered"></video>
  </div>
</template>

<script type="text/ecmascript-6">
import videojs from 'video.js'

export default {
  props: {
    vid: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.initVideo()
  },
  methods: {
    initVideo () {
      const VIDEO_WIDTH = window.innerWidth
      const VIDEO_HEIGHT = 200

      let that = this
      let vid = this.vid
      let OPTIONS = {
        controls: true, // 控制条
        preload: 'none', // 是否自动加载
        width: VIDEO_WIDTH,
        height: VIDEO_HEIGHT,
        poster: this.poster,
        sources: [
          { src: this.src, type: 'video/mp4' }
        ]
      }
      videojs(vid, OPTIONS, function () {
        this.load()
        this.on('play', function () {
          that.$emit('play')
        })
        this.on('pause', function () {
          that.$emit('pause')
        })
        this.on('ready', function () {
          that.$emit('ready')
        })
      })
    }
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>