import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Material from '../pages/material/index.vue';
import materialConfig from '../../material/index';
import Login from "../pages/login/index.vue";
import docRouter from '../pages/doc/doc-router';

import Layout from '@/components/layout/index.vue'
import Index from '@/pages/index.vue'


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
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        // component: Home,
        component: Index,
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export default routes;