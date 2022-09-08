import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
import "@/assets/base.css";

app.use(router)

app.mount('#app')
