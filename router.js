// router.js

import { createRouter, createWebHistory } from 'vue-router';
// Import your components that you want to use as pages/routes
import Home from './components/newsList.vue'; // Example: Home component
import registerPage from './views/registerPage.vue';
import loginPage from './views/loginPage.vue'; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
      // Your routes here
      { path: '/Home', component: Home }, // Route for the Home component
        { path: '/registerPage', component: registerPage }, // Route for the About component
        { path: '/loginPage', component: loginPage, name: 'loginPage' }, // Route for the Login component
        // Add more routes as needed
    ],
  });
  



export default router;
