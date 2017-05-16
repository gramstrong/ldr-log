import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import WeeklyView from '@/views/WeeklyView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Week',
      name: 'WeeklyView',
      component: WeeklyView
    }
  ]
})
