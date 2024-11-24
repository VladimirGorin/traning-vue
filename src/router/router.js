import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Главная",
    component: MainPage,
  },
  {
    path: "/posts",
    name: "Посты",
    component: PostsPage,
  },
  {
    path: "/about",
    name: "О нас",
    component: AboutPage,
  },
];


const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
