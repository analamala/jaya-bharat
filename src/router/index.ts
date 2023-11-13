import { createRouter, createWebHistory } from 'vue-router';
import ProductsDetail from "@/components/Products/ProductsDetail.vue";
import SagesDetail from "@/components/Products/SagesDetail.vue";
import FeederBreakerDetail from "@/components/Products/FeederBreakerDetail.vue";
import EquipmentRetrieverDetail from "@/components/Products/EquipmentRetrieverDetail.vue";
import ElectricDozerDetail from "@/components/Products/ElectricDozerDetail.vue";
import HydraulicCylinderDetail from "@/components/Products/HydraulicCylinderDetail.vue";
import DrillAndBolterDetail from "@/components/Products/DrillAndBolterDetail.vue";
import PowerPackDetail from "@/components/Products/PowerPackDetail.vue";

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
        children: [
          {
            path: 'allProducts',
            name: 'AllProducts',
            component: ProductsDetail
          },
          {
            path: 'sagesDetail',
            name: 'SagesDetail',
            component: SagesDetail
          },
          {
            path: 'feederBreakerDetail',
            name: 'FeederBreakerDetail',
            component: FeederBreakerDetail,
          },
          {
            path: 'equipmentRetrieverDetail',
            name: 'EquipmentRetrieverDetail',
            component: EquipmentRetrieverDetail,
          },
          {
            path: 'electricDozerDetail',
            name: 'ElectricDozerDetail',
            component: ElectricDozerDetail,
},
          {
            path: 'hydraulicCylinderDetail',
            name: 'HydraulicCylinderDetail',
            component: HydraulicCylinderDetail,
},
          {
            path: 'drillAndBolterDetail',
            name: 'DrillAndBolterDetail',
            component: DrillAndBolterDetail,
},
          {
            path: 'powerPackDetail',
            name: 'PowerPackDetail',
            component: PowerPackDetail,
}
        ]
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
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
