import Vue from 'vue'
import VueRouter from 'vue-router';
import { firestorePlugin } from 'vuefire';
import VueCompositionApi from '@vue/composition-api';

import App from './App.vue';

Vue.use(VueCompositionApi);
Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.config.productionTip = false

import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/chats/:id', component: ChatRoom, name: 'chat' }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
