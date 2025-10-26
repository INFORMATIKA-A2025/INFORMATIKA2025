import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../MainLayout.vue";
import CleanLayout from "../CleanLayout.vue";
import Page from "../components/Page.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Structure from "../components/Structure.vue";
import Contact from "../components/Contact.vue";
import Galery from "@/components/Galery.vue";
import Stats from "@/components/Stats.vue";
const routes = [
  {
    path: "/",
    name: CleanLayout,
    children: [
      {
        path: "",
        name: "LandingPage",
        component: Page,
      },
    ],
  },
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/structure",
        name: "Structure",
        component: Structure,
      },
      {
        path: "/galery",
        name: "Galery",
        component: Galery,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "/stats",
        name: "Stats",
        component: Stats,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/INFORMATIKA2025/"),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
