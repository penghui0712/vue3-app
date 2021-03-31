import { createApp } from 'vue'
import Antd from "ant-design-vue"
import App from './App.vue'
import router from './router'
import "ant-design-vue/dist/antd.css"
import './index.css'

// const app = createApp(App)

createApp().use(Antd)
// app.use(router)
createApp(App).mount('#app')
