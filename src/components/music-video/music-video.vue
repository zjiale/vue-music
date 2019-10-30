<template>
  <div class="video-cotent">
    <base-video
      :source="'http://157.255.154.151/vcloud1049.tc.qq.com/1049_M0120200000SPvvg00JguH1001683986.f9844.mp4?vkey=2F2025EE1ECC3F444451FBA1039BBAE16D2BF89EE33ABC80D349CEE77A48521975303233C0D67758ABE9825EB895107ECC68FFB74706A0CE2BAAE5CA1A9D3CAF8282BFB13DEDFA66F91C9BC2590CD0AD99138AEC89967EC0'"
    ></base-video>
  </div>
</template>

<script type="text/ecmascript-6">
import { getMvList } from 'api/mv'
import BaseVideo from 'base/base-video/base-video'

export default {
  created () {
    this._getMvList()
  },
  methods: {
    _getMvList () {
      getMvList().then((res) => {
        // console.log(res)
      })
    }
  },
  components: {
    BaseVideo
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
</style>