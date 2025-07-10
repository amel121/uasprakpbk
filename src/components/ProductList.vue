<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Daftar Produk</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        @hapus="productStore.deleteProduct"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/productstore'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
onMounted(() => productStore.fetchProducts())
</script>
