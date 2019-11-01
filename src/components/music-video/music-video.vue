<template>
  <div class="video-cotent">
    <scroll class="video-list" :data="mvList">
      <ul>
        <li class="item" ref="item" v-for="item in mvList" :key="item.vid">
          <base-video :vid="item.vid" :src="item.url" :poster="item.image"></base-video>
          <div class="video-info">
            <div class="singer">
              <img class="avatar" v-lazy="item.avatar" />
              <span class="name" v-html="item.singer"></span>
            </div>
            <span class="song" v-html="item.name"></span>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { getMvList, getMvUrl } from 'api/mv'
import { createMv } from 'common/js/mv'
import BaseVideo from 'base/base-video/base-video'
import Scroll from 'base/scroll/scroll'

export default {
  data () {
    return {
      mvList: []
    }
  },
  created () {
    console.log(window.innerHeight)
    this._getMvList()
  },
  methods: {
    _getMvList () {
      getMvList().then((res) => {
        let { list } = res.data.mv
        getMvUrl(list).then((res) => {
          this.mvList = this._normalizeMv(list, res)
        })
      })
    },
    // list为mv相关的信息，res为mv的地址和vid信息
    _normalizeMv (list, res) {
      let ret = []
      let result = []
      let mvList = []
      let vkeys = res.getMvUrl.data
      for (var key in vkeys) {
        ret.push({
          vid: key,
          url: vkeys[key].mp4[1].freeflow_url[0]
        })
      }
      list.forEach((item) => {
        ret.forEach((res) => {
          if (item.v_id === res.vid) {
            result.push({
              mv_id: item.mv_id,
              mv_name: item.mv_name,
              mv_pic_url: item.mv_pic_url,
              singer_name: item.singer_name,
              singerMID: item.singerMID,
              v_id: item.v_id,
              url: res.url
            })
          }
        })
      })
      result.forEach((item) => {
        mvList.push(createMv(item))
      })
      return mvList
    },
    _calculateHeight () {
      const item = this.$refs.item
      for (let i = 0; i < item.length; i++) {
        let mv = item[i]
        console.log(mv.offsetHeight + ' ' + mv.offsetWidth)
      }
    }
  },
  watch: {
    // 异步加载的数据需要在watch观察数据然后再进行dom操作
    mvList () {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    }
  },
  components: {
    BaseVideo,
    Scroll
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.video-cotent
  position fixed
  width 100%
  top 88px
  bottom 0
  .video-list
    height 100%
    overflow hidden
    .item
      display flex
      flex-direction column
      padding-top 15px
      &:last-child
        padding-bottom 10px
      .video-info
        display flex
        justify-content space-between
        align-items center
        margin-top 8px
        padding 0 10px
        font-size $font-size-medium
        color $color-theme
        .singer
          display flex
          align-items center
          .avatar
            width 28px
            height 28px
            border-radius 50%
            margin-right 5px
</style>