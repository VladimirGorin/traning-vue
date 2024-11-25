import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import PostPage from "@/pages/PostPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
