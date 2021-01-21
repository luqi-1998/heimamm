import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/base.less'
import store from './store'
// 导入element组件
import './plugins/element'
// 导入axios封装的组件
import './utils/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
