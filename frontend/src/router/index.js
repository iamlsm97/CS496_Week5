import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import CreateRoom from '../components/CreateRoom.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/create',
      name: 'CreateRoom',
      component: CreateRoom,
    },
  ],
});
