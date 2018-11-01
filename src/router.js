import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/Todo.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('./views/Album.vue')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('./views/Friend.vue')
    }    
  ]
})
