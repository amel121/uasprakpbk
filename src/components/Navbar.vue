<template>
  <header class="bg-gradient-to-r from-pink-100 via-pink-50 to-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <!-- Logo & Judul -->
      <div class="flex items-center space-x-3">
        <img src="@/assets/logo.png" alt="Logo" class="w-12 h-12" />
        <h1 class="text-3xl font-extrabold text-pink-700 drop-shadow-sm">Manajemen Toko Donat</h1>
      </div>

      <!-- Tombol hamburger -->
      <button
        class="sm:hidden text-pink-600 focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
          />
        </svg>
      </button>

      <!-- Menu Navigation -->
      <nav
        :class="[
          'transition-all duration-300 ease-in-out',
          isOpen ? 'block' : 'hidden',
          'sm:flex sm:items-center sm:space-x-6 text-base font-medium text-gray-800'
        ]"
        class="absolute sm:static bg-white sm:bg-transparent w-full sm:w-auto top-full left-0 sm:top-auto sm:left-auto sm:block p-4 sm:p-0 shadow sm:shadow-none z-10"
      >
        <RouterLink
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="block py-2 sm:py-0 hover:text-pink-600"
          :class="{ 'text-pink-600 font-bold border-b-2 border-pink-500 sm:border-0': $route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const links = [
  { label: 'Dashboard', to: '/' },
  { label: 'Produk', to: '/produk' },
  { label: 'Pesanan', to: '/pesanan' },
  { label: 'Stok', to: '/stok' },
  { label: 'Laporan', to: '/laporan' },
  { label: 'Login', to: '/login' },
];
</script>
