import { createRouter , createWebHistory } from 'vue-router'
import Menu from './Pages/MenuPage.vue'



const routes = [
    { path: '/', name: 'Menu', component: Menu },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router;