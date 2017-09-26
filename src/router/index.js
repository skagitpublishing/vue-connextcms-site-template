import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/ActiveView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActiveView',
      component: ActiveView
    }
  ]
})
