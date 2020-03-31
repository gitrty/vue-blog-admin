import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 清楚样式css
import '@/assets/css/base.css'

import ElementUI from './plugin/elementui'
import common from './common'
import toyo from './components'
Vue.use(ElementUI)
  .use(common)
  .use(toyo)

Vue.config.productionTip = false

export const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
