import Vue from 'vue'
import App from './App.vue'
import obj from "./api/instance/index"
Vue.config.productionTip = false
Vue.prototype.$obj = obj
new Vue({
  render: h => h(App),
}).$mount('#app')
