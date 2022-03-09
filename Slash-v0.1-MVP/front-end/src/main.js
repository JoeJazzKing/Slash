import Vue from 'vue'


import ElementUI from 'element-ui'

import moment from 'moment'
import md5 from 'js-md5'
// import 'babel-polyfill'
// import common from './config/common.js'
// import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
// import './themes/element/element-variables.scss'
import App from './App.vue'
import router from './router'
// import common from './assets/js/common.js'
import { http, baseURL } from './config/http.js'



Vue.use(ElementUI)
Vue.config.productionTip = false


// Vue.use(vueQuillEditor)

// Vue.prototype.$common = common
Vue.prototype.$http = http
Vue.prototype.$baseURL = baseURL
Vue.prototype.$moment = moment
Vue.prototype.$md5 = md5




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
