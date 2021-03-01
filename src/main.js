import { createApp } from 'vue'
import App from './App.vue'

// service worker
import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  runtime.register();
}

createApp(App).mount('#app')
