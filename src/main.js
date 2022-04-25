import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Login from './components/Login.vue'
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// Vue.prototype.$router = router
Vue.component(Login)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
