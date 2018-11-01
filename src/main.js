import Vue from 'vue'
import App from './App.vue' // single file component
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
