import { createRouter , createWebHistory } from 'vue-router'
import Menu from './Pages/MenuPage.vue'
import Private from './Pages/PrivatePage.vue'



const routes = [
    { path: '/', name: 'Menu', component: Menu },
    { path: '/private', name: 'Private', component: Private },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router;