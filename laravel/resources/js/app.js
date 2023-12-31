import './bootstrap';
import {createApp} from 'vue';
import App from './App.vue'
import router from "./Router";
import store from "./Store";

const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app');
