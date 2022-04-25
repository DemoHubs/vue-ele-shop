import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/User.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'hash',
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path : '/index',
      name : '',
      component : resolve => {
         require(['@/views/index.vue'], resolve)
      }
    },
    {
      path : '/login',
      name : '',
      component : Login
    },
    {
      path : '/home',
      name : '',
      component : Home,
      redirect:'/welcome',
      children:[
        {path:'/welcome',component:Welcome,name:''},
        {path:'/system/user/index',component:Users,name:''}
      ]
    }
  ]
  })
  //to 要跳转的路径
  //from 从哪个路径跳转过来
  //next 下个页面
  router.beforeEach((to,from,next)=>{
    console.info(to);
    console.info(next);
    if(to.path=='/login'){
        return next()
    }
    var token=sessionStorage.getItem("token");
    if(!token){
        console.info("当前没有登录 请先登陆 ");
        return next('/login')
    }
    return next()
  })
export default router
