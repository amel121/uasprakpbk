<template>
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-2">Tambah Produk</h3>
    <input v-model="name" placeholder="Nama Produk" class="border p-2 mr-2" />
    <input v-model.number="price" type="number" placeholder="Harga" class="border p-2 mr-2" />
    <button @click="addProduct" class="bg-green-600 text-white px-4 py-2">Tambah</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productstore'
const name = ref('')
const price = ref(0)
const productStore = useProductStore()

function addProduct() {
  if (name.value && price.value > 0) {
    productStore.addProduct({ name: name.value, price: price.value })
    name.value = ''
    price.value = 0
  }
}
</script>