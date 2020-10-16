import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'

// layouts
import Default from "./layouts/Default.vue"

// import VueTippy from 'vue-tippy';
import Vuelidate from 'vuelidate';
// import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);

// Vue.component('vue-phone-number-input', VuePhoneNumberInput);


Vue.config.productionTip = false

Vue.use(Vuelidate);

// layouts
Vue.component('default-layout', Default)

Vue.component('logo', require('./components/Logo').default)
Vue.component('widget-tile', require('./components/WidgetTile').default)
Vue.component('chart', require('./components/Chart').default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
