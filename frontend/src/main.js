// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store'; // vuex store instance

Vue.use(VueAxios, axios);
Vue.use(VueSocketio, socketio('http://localhost:3000'), store);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
