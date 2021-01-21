import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/token'
import { Message } from 'element-ui'
const Login = () => import('../views/login/index.vue')
const Layout = () => import('../views/layout/Index.vue')

// 导入layout 子组件
const User = () => import('@/views/layout/User/Index')
const Welcome = () => import('@/views/layout/welcome/Index')
const Chart = () => import('@/views/layout/Chart/Index')
const Enterprise = () => import('@/views/layout/Enterprise/Index')
const Question = () => import('@/views/layout/Question/Index')
const Subject = () => import('@/views/layout/Subject/Index')

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/', redirect: '/login' },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        component: Welcome,
        meta: {
          path: '/layout',
          title: '欢迎登录',
          icon: 'el-icon-loading',
          role: ['超级管理员', '管理员', '老师', '学生']
        }
      },
      {
        path: 'user',
        component: User,
        meta: {
          path: '/layout/user',
          title: '用户列表',
          icon: 'el-icon-pie-chart',
          role: ['超级管理员', '管理员', '老师']
        }
      },
      {
        path: 'chart',
        component: Chart,
        meta: {
          path: '/layout/chart',
          title: '数据预览',
          icon: 'el-icon-user',
          role: ['超级管理员', '管理员', '老师']
        }
      },
      {
        path: 'enterprise',
        component: Enterprise,
        meta: {
          path: '/layout/enterprise',
          title: '企业列表',
          icon: 'el-icon-office-building',
          role: ['超级管理员', '管理员', '老师']
        }
      },
      {
        path: 'question',
        component: Question,
        meta: {
          path: '/layout/question',
          title: '题库列表',
          icon: 'el-icon-edit-outline',
          role: ['超级管理员', '管理员', '老师', '学生']
        }
      },
      {
        path: 'subject',
        component: Subject,
        meta: {
          path: '/layout/subject',
          title: '学科列表',
          icon: 'el-icon-notebook-2',
          role: ['超级管理员', '管理员', '老师']
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // ...
  if (to.path === '/login') {
    next()
  } else {
    const token = getToken()
    // console.log(token)
    if (token) {
      next()
    } else {
      next('/login')
      Message.error('token已过期')
    }
  }
})
// 后置路由导航守卫
router.afterEach((to, from) => {
  document.title = to.meta.title || '黑马面面'
})

export default router
