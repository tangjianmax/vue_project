import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import http from "./api/index"
import store from "./store/store"
import "./validate"
Vue.config.productionTip = false;
Vue.prototype.$http = http;
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
