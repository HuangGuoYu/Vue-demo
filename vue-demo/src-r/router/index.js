import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'


Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: 'news',
          component: News
        },
        {
          path: '/home/message',
          component: Message
        },
      ]
    }
  ]
})
