import { createWebHistory, createRouter } from "vue-router";
import LoginForm from "../components/LoginForm";
import ManagementUsers from "../components/ManagementUsers";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/managements",
    name: "managements",
    component: ManagementUsers,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const { auth } = store.getters;
  next();
  if (to.name !== "login" && !auth) {
    return next({ path: "/" });
  } else {
    return next();
  }
});
export default router;
