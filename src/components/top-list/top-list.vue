<template>
  <transition name="slide">
    <music-list :rank="rank" :title="title" :bgImage="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
import { getMusicList } from 'api/rank'
import { createSong, isValidMusic, processSongUrl } from 'common/js/song'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      songs: [],
      rank: true
    }
  },
  computed: {
    title () {
      return this.topList.title
    },
    bgImage () {
      return this.topList.mbFrontPicUrl
    },
    ...mapGetters([
      'topList'
    ])
  },
  created () {
    this._getMusicList()
  },
  methods: {
    _getMusicList () {
      if (!this.topList.topId) {
        this.$router.push('/rank')
      }
      getMusicList(this.topList.topId).then((res) => {
        if (res.code === ERR_OK) {
          processSongUrl(this._normalizeSongs(res.songlist)).then((songs) => {
            this.songs = songs
          })
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        const musicData = item.data
        if (isValidMusic(musicData)) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active, .slide-leave-active
  transition all 0.3s ease
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>