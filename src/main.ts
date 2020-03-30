import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 清楚样式css
import '@/assets/css/base.css'

// elementui 按需引入
import ElementUI from './plugin/elementui';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
