import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 导入 router.js 文件



  createApp(App)
  .use(router) // Use Vue Router
  .mount('#app');