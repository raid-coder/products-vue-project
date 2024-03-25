import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Homme from "@/components/products/Homme.vue";
import Femme from "@/components/products/Femme.vue";
import Live from "@/components/products/Live.vue";
import Lookbook from "@/components/products/Lookbook.vue";
import Manifeste from "@/components/products/Manifeste.vue";
import Walksforschool from "@/components/products/Walksforschool.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/products",
      children: [
        {
          path: "homme",
          component: Homme,
        },
        {
          path: "femme",
          component: Femme,
        },
        {
          path: "live",
          component: Live,
        },
        {
          path: "lookbook",
          component: Lookbook,
        },
        {
          path: "manifeste",
          component: Manifeste,
        },
        {
          path: "walksforschool",
          component: Walksforschool,
        },
      ],
    },
  ],
});

export default router;
