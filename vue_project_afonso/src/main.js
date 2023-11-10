import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Sobremesas from './components/Sobremesas.vue'

let app = createApp(App)
app.component('sobremesas-vue', Sobremesas)
app.mount('#app')
