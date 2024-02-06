import { createRouter, createWebHistory } from "vue-router";
import Appointment from "./pages/Appointment.vue";
import PreviousAppointments from "./pages/PreviousAppointments.vue";
import User from "./pages/User.vue";
import MyStore from "./pages/MyStore.vue";

const routes = [
  {
    path: "/",
    component: Appointment,
    name: 'appointment',
  },

  {
    path: "/previous-appointments",
    component: PreviousAppointments,
    name: 'previouses',
  },

  {
    path: "/user",
    component: User,
    name: 'user',
  },
  
  {
    path: "/my-store",
    component: MyStore,
    name: 'MyStore',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
