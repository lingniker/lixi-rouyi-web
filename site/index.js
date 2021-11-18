import { createApp } from 'vue';

import router from './router/index.js';
import App from "./app.vue";
// import 'ant-design-vue/dist/antd.css';
// import Button from '../src/components/button/package/index.js';
import ElementPlus from 'element-plus'
// import LixiUiVue from '../lib/index.js'
import LixiUiVue from 'lixi-ui-vue'
import lixiMaterialVue from 'lixi-material-vue'
// import LixiUiVue from '../src/index.js'
import demoBlock from './components/demo-block/index.vue'
import SvgIcon from '@/components/SvgIcon'// svg component
import store from './store/index'
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, download, handleTree } from "@/utils/ruoyi";
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import Pagination from "@/components/Pagination";
import directive from "@/directive/index";
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar"
// 字典标签组件
import DictTag from '@/components/DictTag'
// 富文本组件
import Editor from "@/components/Editor"

// import { LRM } from "../material/index"

import "./assets/icons/index.js"

import 'element-plus/dist/index.css'
import './assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import './style/index.scss'
import './permission'
import 'lixi-ui-vue/lib/style/styles.css'

var app = createApp(App);
directive(app)
app.component('DemoBlock', demoBlock)
app.component('svg-icon', SvgIcon)
app.component('Pagination', Pagination)
app.component('RightToolbar', RightToolbar)
app.component('DictTag', DictTag)
app.component('Editor', Editor)

// .use(LRM).use(LixiUiVue)
app.use(store).use(router).use(LixiUiVue).use(lixiMaterialVue).use(ElementPlus);

app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.getDicts = getDicts
app.config.globalProperties.getConfigKey = getConfigKey
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.selectDictLabel = selectDictLabel


app.mount('#app');