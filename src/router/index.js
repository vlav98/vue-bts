import { createRouter, createWebHashHistory } from 'vue-router';

// Import views
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";

// Import Main Components
/* import MainView from "../components/MainView"; */
/* import SelectionView from "./screens/SelectionView"; */

// Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  /* 
  { path: "/", name: "discography", component: MainView },
  { path: "/selection", name: "selection", component: SelectionView }, 
  */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "underline font-bold",
});

export default router 