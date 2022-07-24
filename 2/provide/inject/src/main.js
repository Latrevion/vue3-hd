import { createApp } from 'vue'
import App from './App.vue'
import Card from "./components/Card.vue"
import Xinput from "./components/Xinput.vue"
import XTextarea from "./components/XTextarea.vue"

const app = createApp(App)
app.component('card',Card)
app.component('Xinput',Xinput)
app.component('x-textarea',XTextarea)
app.config.unwrapInjectedRef = true
app.mount('#app')
