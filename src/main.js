import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Icon from './base/music-icon/mm-icon.vue'
import mmToast from '@/base/mm-toast'

import VueLazyload from 'vue-lazyload'

Vue.component(Icon.name,Icon)

// 弹出层
Vue.use(mmToast)

// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('@/assets/img/default.png')
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
