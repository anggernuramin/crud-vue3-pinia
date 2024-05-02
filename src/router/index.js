import { createRouter, createWebHistory } from "vue-router";
import ShowView from "../views/ShowView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home Page",
      component: () => import("../layouts/formLayout.vue"),
      children: [
        {
          path: "",
          name: "Show Page",
          component: () => import("../views/ShowView.vue"),
        },
        {
          path: "/add",
          component: () => import("../views/AddView.vue"),
        },
        {
          path: "/update/:id",
          component: () => import("../views/UpdateView.vue"),
        },
      ],
    },
  ],
});

export default router;
