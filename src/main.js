import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'

axios.defaults.baseURL = 'http://192.168.1.47:8000'

createApp(App).use(store).use(router, axios).mount('#app')


import "bootstrap/dist/js/bootstrap.js"
