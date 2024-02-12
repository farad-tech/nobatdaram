import { createRouter, createWebHistory } from "vue-router";
import Appointment from "./pages/Appointment.vue";
import PreviousAppointments from "./pages/PreviousAppointments.vue";
import User from "./pages/User.vue";
import MyStore from "./pages/MyStore.vue";
import ManageAppointments from "./pages/Store/ManageAppointments.vue";
import ManageServices from "./pages/Store/ManageServices.vue";
import Stores from "./pages/Stores.vue";
import Store from "./pages/Store.vue";

const routes = [
  {
    path: "/",
    component: Appointment,
    name: "appointment",
  },

  {
    path: "/previous-appointments",
    component: PreviousAppointments,
    name: "previouses",
  },

  {
    path: "/user",
    component: User,
    name: "user",
  },

  {
    path: "/my-store",
    component: MyStore,
    name: "MyStore",
  },

  {
    path: "/my-store/manage-appointments",
    component: ManageAppointments,
    name: "manage-appointments"
  },

  {
    path: "/my-store/manage-services",
    component: ManageServices,
    name: "manage-services"
  },

  {
    path: "/stores",
    component: Stores,
    name: "stores",
  },

  {
    path: "/store",
    component: Store,
    name: "store",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
