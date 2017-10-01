import Vue from 'vue'
import Router from 'vue-router'
import ActiveView from '@/components/ActiveView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActiveView',
      component: ActiveView
    },
    {
      path: '/appdashboard',
      name: 'ActiveView',
      component: ActiveView
    },
    
  ]
})
