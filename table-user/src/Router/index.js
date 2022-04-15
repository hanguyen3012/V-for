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
    // {
    //     path: "*",
    //     redirect: '/'
    // }
];
 const router = createRouter ({
     history: createWebHistory(),
     routes,
 });
  export default router;