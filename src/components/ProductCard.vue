<template>
  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
    <h3 class="text-lg font-semibold text-pink-700">{{ product.name }}</h3>
    <p class="text-gray-600">Harga: Rp{{ product.price }}</p>
    <p class="text-gray-600">Stok: {{ product.stock }}</p>
    <div class="mt-3 flex justify-end">
      <button @click="hapus" class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded">Hapus</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['product'])
const emit = defineEmits(['hapus'])
function hapus() {
  emit('hapus', product.id)
}
</script>
