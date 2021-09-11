import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Material from '../pages/material/index.vue';
import materialConfig from '../../material/index';
import Login from "../pages/login/index.vue";
import docRouter from '../pages/doc/doc-router'

var routes = [
  {
    path: "/home",
    name: 'name',
    component: Home
  },
  {
    path: "/doc",
    name: 'doc',
    component: Doc,
    children: docRouter
  },
  {
    path: '/material',
    name: 'materila',
    component: Material,
    children: materialConfig
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  }
]

export default routes;