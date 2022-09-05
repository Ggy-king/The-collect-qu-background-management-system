import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

import router from './router'
import store from './store'

// 引入公共样式
import './assets/style/reset.css'
import './assets/style/index.css'

// 引入ant


createApp(App).use(store).use(router).use(Antd).mount('#app')
