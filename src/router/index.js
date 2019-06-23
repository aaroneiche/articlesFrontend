import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Articles from '@/components/Articles'
import ArticleForm from '@/components/ArticleForm'
import ArticleDisplay from '@/components/ArticleDisplay'

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
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/articles/create',
      name: 'Create',
      component: ArticleForm
    },
    {
      path: '/articles/id/:id',
      name: 'Article',
      component: ArticleDisplay
    }
  ]
})
