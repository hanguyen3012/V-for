// import App from "./App.vue";
// import * as Vue from 'vue'
// import store from "./store";

// new Vue({ 
//     render: (h) => h(App), 
//     store
//  }).mount("#app");
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

// Vue.config.productionTip = false

const app = createApp(App)

app.use(store)

app.mount('#app')