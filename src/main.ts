import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router";
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-plugin-persistedstate";

const app = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState({
    key: id => `__store__${id}`
}))
app.use(pinia)
app.use(router)
app.mount('#app')
