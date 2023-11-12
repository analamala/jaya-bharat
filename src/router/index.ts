// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
      },
      {
        path: 'sagesDetail',
        name: 'SAGESDetail',
        component: () => import(/* webpackChunkName: "sagesDetail" */ '@/components/products/SAGESDetail.vue'),
      },
      {
        path: 'feederBreakerDetail',
        name: 'FeederBreakerDetail',
        component: () => import(/* webpackChunkName: "feederBreakerDetail" */
          '@/components/products/FeederBreakerDetail.vue'),
      },
      {
        path: 'equipmentRetrieverDetail',
        name: 'EquipmentRetrieverDetail',
        component: () => import(/* webpackChunkName: "equipmentRetrieverDetail" */
          '@/components/products/EquipmentRetrieverDetail'),
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import(/* webpackChunkName: "services" */ '@/views/Services.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
