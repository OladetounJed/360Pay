import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from "./assets/routes";
import AOS from "aos";
import "aos/dist/aos.css";



Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history'
  
})


new Vue({
  created() {
    AOS.init();
  },
  el: '#app',
  router,
  render: h => h(App)
})
