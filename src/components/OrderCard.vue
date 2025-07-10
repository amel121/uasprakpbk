<template>
  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
    <h3 class="text-lg font-semibold text-pink-600">Pesanan #{{ order.id }}</h3>
    <p class="text-gray-700">Tanggal: {{ order.date }}</p>
    <p class="text-gray-600">Jumlah Item: {{ order.qty }}</p>
    <p class="text-gray-600">Total: Rp{{ order.total }}</p>
  </div>
</template>

<script setup>
defineProps(['order'])
</script>
