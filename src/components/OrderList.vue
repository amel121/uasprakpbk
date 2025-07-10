<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Daftar Pesanan</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <OrderCard v-for="order in orderStore.orders" :key="order.id" :order="order" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
import OrderCard from './OrderCard.vue'

const orderStore = useOrderStore()
onMounted(() => orderStore.fetchOrders())
</script>
