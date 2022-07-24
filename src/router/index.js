import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import AdminHome from '../components/admin/AdminHome'
import Users from '../components/admin/Users'
import UserHome from '../components/user/UserHome'
import UserDashboard from '../components/user/UserDashBoard'
import ListRoom from '../components/user/ListRoom'
import NotPermission from '../components/NotPermission'
import BookingRoom from '../components/user/BookingRoom'
import Roomate from '../components/user/Roomate'
import ListCadres from '../components/user/ListCadres'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/admin',
    component: AdminHome,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'users',
        name: 'UserManagement',
        component: Users
      }
    ]
  },
  {
    path: '/user',
    component: UserHome,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        name: 'UserDashboard',
        component: UserDashboard
      },
      {
        path: 'room-registration',
        name: 'RoomRegistration',
        component: ListRoom
      },
      {
        path: 'booking-room',
        name: 'BookingRoom',
        component: BookingRoom
      },
      {
        path: 'roomate',
        name: 'Roomate',
        component: Roomate
      },
      {
        path: 'list-cadres',
        name: 'ListCadres',
        component: ListCadres
      }
    ]
  },
  {
    path: '/not-permission',
    name: 'NotPermission',
    component: NotPermission
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from , next) => {
  if (to.matched.some(record => record.meta.requireAuth) && !store.state.isAuthenticated) {
    next({name: 'NotPermission', query: {to: to.path} });
  } else {
    next()
  }
})

export default router
