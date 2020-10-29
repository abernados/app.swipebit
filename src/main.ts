import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/vue-phone-number-input'
import './plugins/vue-meta'
import './plugins/vue-toasted'
import './plugins/v-mask'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'

// layouts
import Default from "./layouts/Default.vue"
import NoNavbar from "./layouts/NoNavbar.vue"

import Vuelidate from 'vuelidate';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueToast from 'vue-toast-notification';
Vue.use(VueToast);


Vue.config.productionTip = false
Vue.use(Vuelidate);

// layouts
Vue.component('default-layout', Default)
Vue.component('no-navbar', NoNavbar)

Vue.component('logo', require('./components/Logo').default)
Vue.component('widget-tile', require('./components/WidgetTile').default)
Vue.component('chart', require('./components/Chart').default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
