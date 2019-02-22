import Vue from 'vue'
import App from './App'

window.app = new Vue({
  devtool: 'source-map',
  el: '#app',
  render: h => h(App)
})
