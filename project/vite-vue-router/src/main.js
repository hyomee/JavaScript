
import { createApp } from 'vue'
import App from './App.vue'
import ComponenReUse from './components/cpns/ComponenReUse.vue'
// import router from './router' 

// CSS Import  
import './assets/scss/style.scss'

// Bootstrap's JS 모두 Import 
import "bootstrap/dist/js/bootstrap.js";
// import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.component('component-re-use', ComponenReUse)
// app.use(router)

app.mount('#app')
