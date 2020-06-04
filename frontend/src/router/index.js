import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "empty",
      requiresLogged: true
    },
    component: () => import("../views/LoginPage.vue")
  },
  // {
  //   path: "/registr",
  //   name: "registration",
  //   meta: {
  //     layout: "empty",
  //     requiresLogged: true
  //   },
  //   component: () => import("../views/Registration.vue")
  // },
  {
    path: "/logout",
    name: "logout",
    meta: {
      layout: "empty",
      requiresAuth: true
    },
    component: () => import("../views/LogoutPage.vue")
  },
  // {
  //   path: "/",
  //   name: "home",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/HomePage.vue")
  // },
  {
    path: "/",
    name: "home",
    meta: {
      layout: "main",
      requiresAuth: true
    },
    component: () => import("../views/MortgageSearchPage.vue")
  },
  // {
  //   path: "/mortgage-search",
  //   name: "mortgage-search",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/MortgageSearchPage.vue")
  // },
  {
    path: "/mortgage-editbank",
    name: "mortgage-editbank",
    meta: {
      layout: "main",
      requiresAuth: true
    },
    component: () => import("../views/EditMortgageBankPage.vue")
  },
  {
    path: "/mortgage-edittargetcredits",
    name: "mortgage-edittargetcredits",
    meta: {
      layout: "main",
      requiresAuth: true
    },
    component: () => import("../views/EditTargetCreditsPage.vue")
  },
  {
    path: "/mortgage-editprogram",
    name: "mortgage-editprogram",
    meta: {
      layout: "main",
      requiresAuth: true
    },
    component: () => import("../views/EditMortgageProgramPage.vue")
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/About.vue")
  // },
  // {
  //   path: "/help",
  //   name: "help",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/HelpPage.vue")
  // },
  // {
  //   path: "/contacts",
  //   name: "contacts",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/ContactsPage.vue")
  // },
  // {
  //   path: "/cars",
  //   name: "cars",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/CarsPage.vue")
  // },
  // {
  //   path: "/mods",
  //   name: "mods",
  //   meta: {
  //     layout: "main",
  //     requiresAuth: true
  //   },
  //   component: () => import("../views/ModsPage.vue")
  // },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
