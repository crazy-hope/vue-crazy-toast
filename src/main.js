import Vue from 'vue'
import App from './App.vue'

import CrazyToast from '../packages/index'
Vue.use(CrazyToast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
