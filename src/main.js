import style from './assets/scss/style.scss';
import Vue from 'vue';
import resize from './directives/resize.js';
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
});
