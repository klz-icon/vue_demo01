import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/home/Home.vue'
import UserManage from '@/views/user/UserManage.vue'
import Me from '@/views/user/Me.vue'
import Repassword from '@/views/user/Repassword.vue'
import ArticleManage from '@/views/blog/ArticleManage.vue'
import Classify from '@/views/blog/Classify.vue'
import WriteBlog from '@/views/blog/WriteBlog.vue'
import CommentManage from '@/views/comment/CommentManage.vue'
import NoticeManage from '@/views/notice/NoticeManage.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },

  {
    path: '/home',
    component: () => import('@/components/AppMain'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{title: 'Home', icon: 'home'}
      },
    ]
  },
  // 博文
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/components/AppMain'),
    redirect: '/articleManage',
    meta: {title: 'Blog',icon: 'eidt'},
    children: [
      {
        path: '/articleManage',
        name: 'ArticleManage',
        component: ArticleManage,
        meta: {title: 'ArticleManage'}
      },
      {
        path: '/classify',
        name: 'Classify',
        component: Classify,
        meta: {title: 'Classify'}
      },
      {
        path: '/writeBlog',
        name: 'WriteBlog',
        component: WriteBlog,
        meta: {title: 'WriteBlog'}
      },
    ]
  },
  //评论
  {
    path: '/comment',
    component: () => import('@/components/AppMain'),
    children: [
      {
        path: '/commentManage',
        name: 'CommentManage',
        component: CommentManage,
        meta: {title: 'CommentManage'}
      },
    ]
  },
  //通知
  {
    path: '/notice',
    component: () => import('@/components/AppMain'),
    children: [
      {
        path: '/noticeManage',
        name: 'NoticeManage',
        component: NoticeManage,
        meta: {title: 'NoticeManage'}
      },
    ]
  },
  //用户
  {
    path: '/user',
    component: () => import('@/components/AppMain'),
    children: [
      {
        path: '/userManage',
        name: 'UserManage',
        component: UserManage,
        meta: {title: 'UserManage'}
      },
      {
        path: '/me',
        name: 'Me',
        component: Me,
        meta: {title: 'Me'}
      },
      {
        path: '/rePassword',
        name: 'Repassword',
        component: Repassword,
        meta: {title: 'Repassword'}
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
