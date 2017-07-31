// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store'; // vuex store instance
// import pdf from 'vue-pdf';

Vue.use(VueMaterial);
// Vue.use(pdf);
Vue.use(VueAxios, axios);
Vue.use(VueSocketio, socketio('http://52.78.113.241:3000'), store);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
