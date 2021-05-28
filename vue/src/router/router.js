import { createWebHistory, createRouter } from "vue-router";
import TheScheduler from "../components/Containers/SchedulerApp.vue";
import TheGannt from "../components/Containers/GanntApp.vue";

const routes = [
  {
    path: "/scheduler",
    name: "Scheduler",
    component: TheScheduler,
  },
  {
    path: "/gannt",
    name: "Gannt",
    component: TheGannt,
  },
  {
    path: '/',
    redirect: '/scheduler'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
