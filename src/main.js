// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
var vm = new Vue({
  router,
  template: '<App/>',
  components: { App },
  beforeCreate: function(){
    console.log('before create!')
  },
  created: function(){
    console.log('created!');
  },
  beforeMount: function(){
    console.log('before mount');
  },
  mounted: function() {
    console.log('mounted!');
  },
  beforeUpdate: function() {
    console.log('mounted!');
  },
  updated: function() {
    console.log('mounted!');
  },
  beforeDestroy: function() {
    console.log('mounted!');
  },
  destroyed: function() {
    console.log('mounted!');
  }
});

vm.$mount('#app');
