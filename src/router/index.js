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