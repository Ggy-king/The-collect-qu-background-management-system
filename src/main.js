import { createApp } from 'vue'
import App from './App.vue'
// 引入ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

import router from './router'
import store from './store'

// 引入公共样式
import './assets/style/reset.css'
import './assets/style/index.css'


createApp(App).use(store).use(router).use(Antd).mount('#app')
