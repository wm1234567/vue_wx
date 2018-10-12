import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import automaticResponse from '@/components/automaticResponse'
import customMenu from '@/components/customMenu'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
　　　 redirect:"automaticResponse",//重定向，第一次进入就进入Page1，不添加的话第一次进入右侧是空白
      children:[
        {
          path: '/automaticResponse',
          name: 'automaticResponse',
          component: automaticResponse
        },
        {
          path: '/customMenu',
          name: 'customMenu',
          component: customMenu
        },
      ]
    }
  ]
})