import Vue from 'vue'
import Router from 'vue-router'
import ComponentRoutes from './component-routes.js'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    ...ComponentRoutes,
    ...[
      {
        name: 'Home',
        path: '/buttons',
        component: Landing
      }
    ]
  ]
})
