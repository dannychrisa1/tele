import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Contact from './views/Contact.vue'
import SignUp from './Authentication/SignUp.vue'
import SignIn from './Authentication/SignIn.vue'
import details from './views/details.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/news',
      name:'News',
      component:News
    },
    {
      path:'/contact',
      name:'Contact',
      component:Contact
    },
    {
      path:'/signUp',
      name:'SignUp',
      component:SignUp
    },
   {
     path:'/signIn',
     name:'SignIn',
     component:SignIn
   },
  {
    path:'/details/:Pid',
    name:'details',
    component: details
  }
  
  
  
    
  ]
})
