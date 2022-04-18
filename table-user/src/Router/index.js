import { createWebHistory, createRouter } from "vue-router";
import LoginForm from "../components/LoginForm";
import ManagementUsers from "../components/ManagementUsers";
import store from "../store/index";
import NotFound from "../components/NotFound"

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/",
    name: "managements",
    component: ManagementUsers,
    beforeEnter: (to, from, next) => {
      console.log("Action route guards!");
      next();
    },
  },
//   {
//     path: "/:pathMatch(.*)*",
//     redirect: "/",
//   },
{
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const auth  = store.getters;
  next();
  if (to.name !== "login" && !auth) {
    next({ name: "login" });
  } else if (to.name === "login" && auth) {
    next({ name: "managements" });
  } else {
    next();
  }
});
export default router;
