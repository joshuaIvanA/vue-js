import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/pages/About'
import PropsAndEvents from '@/pages/PropsAndEvents'
import LearnApi from '@/pages/LearnApi'
import Loop from '@/pages/Loop'
import LearnVuex from '@/pages/LearnVuex'
import Form from '@/pages/Form'

Vue.use(Router)

export default new Router({
  // remove hastag
  mode: 'history',
  // configure routes
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/props-and-events',
      name: 'PropsAndEvents',
      component: PropsAndEvents
    },
    {
      path: '/learn-api',
      name: 'LearnApi',
      component: LearnApi
    },
    {
      path: '/loop',
      name: 'Loop',
      component: Loop
    },
    {
      path: '/learn-vuex',
      name: 'LearnVuex',
      component: LearnVuex
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
