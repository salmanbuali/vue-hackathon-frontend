import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import Enroll from './pages/Enroll.vue'
import CreateStudent from './pages/CreateStudent.vue'
import CreateCourse from './pages/CreateCourse.vue'
import StudentDetails from './pages/StudentDetails.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage'
  },
  {
    path: '/enroll',
    component: Enroll,
    name: 'enroll'
  },
  {
    path: '/CreateStudent',
    component: CreateStudent,
    name: 'AddStudent'
  },
  {
    path: '/CreateCourse',
    component: CreateCourse,
    name: 'addCourse'
  }, {
    path: '/:student_id',
    component: StudentDetails,
    name: 'StudentDetails'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
