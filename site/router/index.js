import { createRouter, createWebHashHistory } from "vue-router";
import routes from './router.config.js'

var router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;