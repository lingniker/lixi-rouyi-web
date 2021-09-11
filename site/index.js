import { createApp } from 'vue';

import router from './router/index.js';
import Antd from 'ant-design-vue';
import App from "./app.vue";
import 'ant-design-vue/dist/antd.css';
// import Button from '../src/components/button/package/index.js';
import ElementPlus from 'element-plus'
// import LixiUiVue from '../src/index.js'
import demoBlock from './components/demo-block/index.vue'
import 'element-plus/dist/index.css'

import './style/index.scss'

var app = createApp(App);
app.component('DemoBlock', demoBlock)

app.use(router).use(Antd).use(ElementPlus);

app.mount('#app');