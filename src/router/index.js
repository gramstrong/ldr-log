import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/routes/Main'
import Weekly from '@/routes/Weekly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/weekly',
      name: 'Weekly',
      component: Weekly
    }
  ]
})
