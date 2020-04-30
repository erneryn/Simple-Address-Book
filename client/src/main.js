import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

import vuetify from "./plugins/vuetify";

import sweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios.create({ baseURL: 'http://localhost:3000' });
Vue.use(sweetalert2)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
