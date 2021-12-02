import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/todo"),
  },
  {
    path: "/ekle",
    component: () => import("./views/ekle"),
  },
  {
    path: "/like",
    component: () => import("./views/like"),
  },
  {
    path: "/bookmark",
    component: () => import("./views/bookmark"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
