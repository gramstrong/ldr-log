import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/routes/Main'
import Day from '@/routes/Day'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/daily',
      name: 'Day',
      component: Day
    }
  ]
})
