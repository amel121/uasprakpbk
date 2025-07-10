<template>
  <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
    <h3 class="text-lg font-semibold text-amber-700">{{ item.name }}</h3>
    <p class="text-gray-600">Stok: {{ item.quantity }} unit</p>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>
