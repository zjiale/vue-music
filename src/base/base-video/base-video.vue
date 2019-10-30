<template>
  <div class="video-cotent">
    <video id="myVideo" class="video-js vjs-big-play-centered"></video>
  </div>
</template>

<script type="text/ecmascript-6">
import videojs from 'video.js'

export default {
  props: {
    source: {
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

      // eslint-disable-next-line
      var player = videojs('myVideo', {
        controls: true, // 控制条
        preload: 'none', // 是否自动加载
        width: VIDEO_WIDTH,
        height: '200',
        sources: [
          { src: this.source, type: 'video/mp4' }
        ]
      }, function () {
        // var that = this
        // that.on('pause', function () {
        //   console.log('pause:' + old_time)
        // })
        // that.on('play', function () {
        //   console.log('playing:' + this.currentTime())
        // })
        // that.on('seeked', function () {
        //   new_time = this.currentTime()
        //   console.log('seeked:' + this.currentTime())
        //   if (old_time) {
        //     console.log(new_time > old_time ? '拖动快进' : '拖动后退')
        //   }
        // })
        // that.on('ended', function () {
        //   console.log('ended:' + this.currentTime())
        //   console.log('duration:' + this.duration())
        // })
      })
    }
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>