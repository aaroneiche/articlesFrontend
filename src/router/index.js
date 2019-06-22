import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Articles from '@/components/Articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/id',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/create',
      name: 'Create',
      component: Post
    }
  ]
})
