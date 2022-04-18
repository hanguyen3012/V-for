import { createWebHistory, createRouter } from 'vue-router'
import LoginForm from "../components/LoginForm"
import ManagementUsers from '../components/ManagementUsers'

const routes = [
    {
        path:"/",
        name: "login",
        component: LoginForm,
    },
    {
        path:"/managements",
        name: "managements",
        component: ManagementUsers,
    },

];


 const router = createRouter ({
     history: createWebHistory(),
     routes,
 })
 router.beforeEach ((to, from, next) =>{
    // if(to.name !== 'login' && !auth){
    //     next({name: 'login'})
    // }else{
    //     next()
    //     }
    console.log(`Navigating to: ${to.name}`);
    next();
    })
  export default router;