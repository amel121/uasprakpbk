import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ProductView from '@/views/produk.vue'
import OrderView from '@/views/OrderView.vue'
import StockView from '@/views/StockView.vue'
import ReportView from '@/views/ReportView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/produk', name: 'produk', component: ProductView },
  { path: '/pesanan', name: 'pesanan', component: OrderView },
  { path: '/stok', name: 'stok', component: StockView },
  { path: '/laporan', name: 'laporan', component: ReportView },
  { path: '/login', name: 'login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router