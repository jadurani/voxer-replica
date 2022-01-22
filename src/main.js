import Vue from 'vue'
import { firestorePlugin } from 'vuefire/dist/packages/vuefire/src'
import App from './App.vue'

Vue.use(firestorePlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
