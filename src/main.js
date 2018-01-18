// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import VueApollo from 'vue-apollo'
import App from './App'
import router from './router'

const networkInterface = createNetworkInterface({uri: process.env.LDR_GRAPH_COOL_SIMPLE});

const apolloClient = new ApolloClient({
  networkInterface,
   connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = true

Vue.use(VueApollo, {
  apolloClient
})

/* eslint-disable no-new */
var vm = new Vue({
  router,
  template: '<App/>',
  components: { App },
  apolloProvider,
  beforeCreate: function(){
    console.log('before create!')
  },
  created: function(){
    console.log('created!');
  },
  beforeMount: function(){
    console.log('before mount!');
  },
  mounted: function() {
    console.log('mounted!');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate!');
  },
  updated: function() {
    console.log('updated!');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy!');
  },
  destroyed: function() {
    console.log('destroyed!');
  }
});

vm.$mount('#app');
