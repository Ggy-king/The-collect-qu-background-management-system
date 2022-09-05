import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pdfupload',
    name: 'pdfupload',
    component: () => import(/* webpackChunkName: "PdfUpload" */ '../views/PdfUpload.vue')
  },
  {
    path: '/imgupload',
    name: 'imgupload',
    component: () => import(/* webpackChunkName: "ImgUpload" */ '../views/ImgUpload.vue')
  },
  {
    path: '/checkcollect',
    name: 'checkcollect',
    component: () => import(/* webpackChunkName: "CheckCollect" */ '../views/CheckCollect.vue')
  },
  {
    path: '/donecollect',
    name: 'donecollect',
    component: () => import(/* webpackChunkName: "DoneCollect" */ '../views/DoneCollect.vue')
  },
  {
    path: '/studentmanage',
    name: 'studentmanage',
    component: () => import(/* webpackChunkName: "StudentManage" */ '../views/StudentManage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
