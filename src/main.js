import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import Video from 'video.js'

import 'common/stylus/index.styl'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.prototype.$video = Video

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
