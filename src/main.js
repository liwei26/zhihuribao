import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

require('./mock.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
