import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Historia from '../views/Historia.vue'
import Comunidad from '../views/Comunidad.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/video',
        name: 'Video',
        component: Video
    },

    {
        path: '/categorias/historia',
        name: 'Historia',
        component: Historia
    },
    {
        path: '/categorias/historia/1',
        name: 'Historia1',
        component: Historia1
    },
    {
        path: '/categorias/historia/2',
        name: 'Historia2',
        component: Historia2
    },
    {
        path: '/categorias/historia/3',
        name: 'Historia3',
        component: Historia3
    },
    {
        path: '/categorias/historia/4',
        name: 'Historia4',
        component: Historia4
    },

    {
        path: '/categorias/comunidad',
        name: 'Comunidad',
        component: Comunidad
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router