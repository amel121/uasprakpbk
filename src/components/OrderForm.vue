<template>
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-2">Tambah Pesanan</h3>
    <input v-model.number="qty" type="number" placeholder="Jumlah Item" class="border p-2 mr-2" />
    <input v-model.number="total" type="number" placeholder="Total Harga" class="border p-2 mr-2" />
    <button @click="addOrder" class="bg-blue-600 text-white px-4 py-2">Tambah</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
const qty = ref(0)
const total = ref(0)
const orderStore = useOrderStore()

function addOrder() {
  if (qty.value > 0 && total.value > 0) {
    orderStore.addOrder({ qty: qty.value, total: total.value, date: new Date().toISOString().split('T')[0] })
    qty.value = 0
    total.value = 0
  }
}
</script>