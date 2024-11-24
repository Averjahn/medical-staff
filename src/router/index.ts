import { createRouter, createWebHistory } from 'vue-router'
import Doctors from '../components/DoctorsList.vue'
import Nurses from '../components/NursesList.vue'

const routes = [
  {
    path: '/doctors',
    name: 'Doctors',
    component: Doctors
  },
  {
    path: '/nurses',
    name: 'Nurses',
    component: Nurses
  },
  {
    path: '/',
    redirect: '/doctors' // Редирект на страницу врачей по умолчанию
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router