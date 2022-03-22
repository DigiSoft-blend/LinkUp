import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '../views/LoginView.vue'
import RegisterViewVue from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import RegistrationSuccessView from '../views/RegistrationSuccessView.vue'
import LogoutView from '../views/LogoutView.vue'
import UserDashboardView from '../views/UserDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPasswordView
    },
    {
      path: '/registrationsuccess',
      name: 'registrationsuccess',
      component: RegistrationSuccessView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/userdashboard',
      name: 'userdashboard',
      component: UserDashboardView
    },
  ]
})

export default router


