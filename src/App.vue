<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 可以使被包含的组件保留状态，或避免重新渲染 -->
    <keep-alive>
      <!-- router对应渲染的组件 -->
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'

export default {
  name: 'app',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>
<style lang="stylus"></style>
