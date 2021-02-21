import Vue from 'vue'
import App from './App.vue'
// #1
import Antd from 'ant-design-vue'
// #2
import 'ant-design-vue/dist/antd.css'
import store from './store/index'

Vue.config.productionTip = false

// #3
Vue.use(Antd)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
