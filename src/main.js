import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/main.css'

Vue.config.productionTip = false

import $request from "./axios";
Vue.prototype.$request = $request 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import { Icon } from '@iconify/vue2';
Vue.component("i-icon", Icon);

import VueGauge from 'vue-gauge';
Vue.component('vue-gauge', VueGauge);

import VueUnits from 'vue-units';

Vue.use(VueUnits)

Vue.filter('units', function (from, to, includeUnit) {
  return (from, to, includeUnit)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
