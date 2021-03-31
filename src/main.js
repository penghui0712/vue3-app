import { createApp } from 'vue'
import Antd from "ant-design-vue"
import App from './App.vue'
import router from './router/index'
import "ant-design-vue/dist/antd.css"
import './index.css'

const app = createApp(App)
app.use(router).use(Antd).mount('#app')
