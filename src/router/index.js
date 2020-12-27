import { createRouter, createWebHistory } from "@ionic/vue-router";

import MemoriesPage from "../pages/MemoriesPage";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: MemoriesPage,
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/MemoryDetailsPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
