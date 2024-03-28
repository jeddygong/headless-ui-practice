import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { add } from 'yi-ui'

console.log(add(1, 2));

createApp(App).mount('#app')
