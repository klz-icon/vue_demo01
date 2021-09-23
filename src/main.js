import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import api from '@/api/index.js'

Vue.config.productionTip = false

// 将api挂载到vue的原型上
Vue.prototype.$api = api;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
