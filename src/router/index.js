import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjectView from '../views/AddProjectView.vue'
import EditProjectView from '../views/EditProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add_project',
    component: AddProjectView
  },
  {
    path: '/project/:id',
    name: 'edit_project',
    component: EditProjectView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
