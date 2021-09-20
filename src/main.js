import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import database from './config/firebaseConfig'
import { Datetime } from 'vue-datetime'
import store from '../store/index'
import 'vue-datetime/dist/vue-datetime.css'


Vue.use(Datetime)

new Vue({
    router,
    database,
    store,
    render: h => h(App),
}).$mount('#app')