import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Historia from '../views/Historia.vue'
import Historia1 from '../views/Historia1.vue'
import Historia2 from '../views/Historia2.vue'
import Historia3 from '../views/Historia3.vue'
import Historia4 from '../views/Historia4.vue'
import Comunidad from '../views/Comunidad.vue'
import Comunidad1 from '../views/Comunidad1.vue'
import Comunidad2 from '../views/Comunidad2.vue'
import Comunidad3 from '../views/Comunidad3.vue'
import Comunidad4 from '../views/Comunidad4.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
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
    {
        path: '/categorias/comunidad/1',
        name: 'Comunidad1',
        component: Comunidad1
    },
    {
        path: '/categorias/comunidad/2',
        name: 'Comunidad2',
        component: Comunidad2
    },
    {
        path: '/categorias/comunidad/3',
        name: 'Comunidad3',
        component: Comunidad3
    },
    {
        path: '/categorias/comunidad/4',
        name: 'Comunidad4',
        component: Comunidad4
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router