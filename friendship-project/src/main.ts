import './assets/main.css'
import './main.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Vant from 'vant';
import '@/common/common.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(Vant);
app.use(createPinia())
app.use(router)

app.mount('#app')
