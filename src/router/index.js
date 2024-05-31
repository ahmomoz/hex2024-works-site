import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/user/UserLayoutView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/user/UserHomeView.vue')
      },
      {
        path: 'portfolio',
        name: '作品集',
        component: () => import('@/views/user/UserPortfolioView.vue')
      },
      {
        path: 'service',
        name: '服務項目',
        component: () => import('@/views/user/UserServiceView.vue')
      },
      {
        path: 'blog',
        name: '部落格',
        component: () => import('@/views/user/UserBlogView.vue')
      },
      {
        path: 'blog/:id',
        name: '部落格單一內文頁面',
        component: () => import('@/views/user/UserBlogContentView.vue')
      },
      {
        path: 'about',
        name: '聯絡我',
        component: () => import('@/views/user/UserAboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
