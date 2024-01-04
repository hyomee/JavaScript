import { createApp } from 'vue'

// CSS Import  
import './assets/scss/styles.scss'

// Bootstrap's JS 모두 Import 
import "bootstrap/dist/js/bootstrap.js";
// import * as bootstrap from 'bootstrap'

import App from './App.vue'
// import router from './router'

const app = createApp(App)
// app.use(router)

app.mount('#app')
