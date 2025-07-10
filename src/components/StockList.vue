<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Daftar Stok Bahan</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <StockCard v-for="item in stockStore.stocks" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStockStore } from '@/stores/stockStore'
import StockCard from './StockCard.vue'

const stockStore = useStockStore()
onMounted(() => stockStore.fetchStocks())
</script>
