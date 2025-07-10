<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-purple-50 text-gray-800 font-sans">
    <!-- Navbar -->
    <header class="bg-white shadow-md border-b border-pink-300 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
        <!-- Logo dan Judul -->
        <div class="flex items-center space-x-3 mb-2">
          <img src="@/assets/logo.png" alt="Logo" class="w-12 h-12 rounded-full" />
          <h1 class="text-3xl sm:text-4xl font-extrabold text-pink-700 tracking-tight drop-shadow-sm">
            Manajemen Toko Donat
          </h1>
        </div>

        <!-- Menu Navigasi -->
        <nav class="flex flex-wrap justify-center gap-4">
          <RouterLink
            v-for="item in menu"
            :key="item.name"
            :to="item.to"
            class="text-sm sm:text-base px-2 pb-1 font-medium transition-all duration-200 ease-in-out hover:text-pink-600"
            active-class="text-pink-700 font-bold border-b-2 border-pink-600"
          >
            {{ item.name }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Isi Halaman -->
    <main class="px-4 sm:px-6 lg:px-8 py-8">
      <transition name="fade-slide" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script setup>
const menu = [
  { name: 'Dashboard', to: '/' },
  { name: 'Produk', to: '/produk' },
  { name: 'Pesanan', to: '/pesanan' },
  { name: 'Stok', to: '/stok' },
  { name: 'Laporan', to: '/laporan' },
  { name: 'Login', to: '/login' }
]
</script>

<style scoped>
/* Fade + Slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Opsional tambahan fade umum */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
