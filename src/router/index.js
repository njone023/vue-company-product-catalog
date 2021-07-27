import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About';
import Home from '../views/Home'
import ContactSalesRep from '../views/ContactSalesRep'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contactsales',
    name: 'ContactSalesRep',
    component: ContactSalesRep,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
