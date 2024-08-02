import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from '@/router/index.js'

const app = createApp(App)

app.use(autoAnimatePlugin)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
