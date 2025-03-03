import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { useWordStore } from "./store/wortschatzStore";


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

const wordStore = useWordStore();
wordStore.uploadData()

app.mount('#app')
