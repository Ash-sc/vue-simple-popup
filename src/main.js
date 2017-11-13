import Vue from 'vue'
import App from './App.vue'
import VuePopup from './lib/index.js'

Vue.use(VuePopup)

new Vue({
  el: '#app',
  render: h => h(App)
})
