import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

let crouter = require("../../public/appdata.json").urlpath.map(res => ({
    path: '/' + res.path,
    component: Layout,
    children: [
        {
            path: res.childpath,
            component: () => import('@/components/Myiframe'),
            name: res.name,
            meta: { title: res.title, icon: res.icon }
        }
    ]
}))

let constant = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: '首页', icon: 'dashboard', affix: true }
            }
        ]
    }
]

export const constantRoutes = [...constant, ...crouter]

export const asyncRoutes = []

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
