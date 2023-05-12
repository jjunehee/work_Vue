import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView.vue";
import NaverView from "../views/NaverView.vue";

import NaverBlogView from "../views/naver/NaverBlogView.vue";
import NaverNewsView from "../views/naver/NaverNewsView.vue";
import NaverShopView from "../views/naver/NaverShopView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book",
    name: "book",
    component: BookView,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/naver",
    name: "naver",
    component: NaverView,
    children: [
      {
        path: "blog",
        name: "NaverBlogView",
        component: NaverBlogView,
      },
      {
        path: "news",
        name: "NaverNewsView",
        component: NaverNewsView,
      },
      {
        path: "shop",
        name: "NaverShopView",
        component: NaverShopView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
