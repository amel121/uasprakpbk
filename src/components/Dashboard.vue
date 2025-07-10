<!-- src/components/Dashboard.vue -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-8 px-4">
    <!-- Total Produk -->
    <router-link to="/produk" class="block">
      <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition border-l-4 border-pink-500 p-6">
        <h3 class="text-lg font-semibold text-gray-800">Total Produk</h3>
        <p class="text-3xl font-bold text-pink-600">{{ dashboard.totalProduk }}</p>
        <p class="text-sm text-gray-500">Jenis donat tersedia</p>
      </div>
    </router-link>

    <!-- Pesanan Hari Ini -->
    <router-link to="/pesanan" class="block">
      <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition border-l-4 border-yellow-400 p-6">
        <h3 class="text-lg font-semibold text-gray-800">Pesanan Hari Ini</h3>
        <p class="text-3xl font-bold text-yellow-500">{{ dashboard.totalPesanan }}</p>
        <p class="text-sm text-gray-500">Pesanan masuk hari ini</p>
      </div>
    </router-link>

    <!-- Stok Donat -->
    <router-link to="/stok" class="block">
      <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition border-l-4 border-green-500 p-6">
        <h3 class="text-lg font-semibold text-gray-800">Stok Donat</h3>
        <p class="text-3xl font-bold text-green-600">{{ dashboard.totalStok }}</p>
        <p class="text-sm text-gray-500">Donat tersedia di etalase</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDashboardStore } from '@/stores/dashboardStore'

const dashboard = useDashboardStore()

onMounted(() => {
  dashboard.fetchData()
})
</script>
