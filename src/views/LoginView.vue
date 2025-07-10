<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-b from-pink-100 to-white px-4">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border border-pink-200">
      <!-- Logo dan Judul -->
      <div class="flex flex-col items-center mb-6 text-center">
        <img :src="logo" alt="Logo" class="w-16 h-16 mb-2" />
        <h2 class="text-2xl font-bold text-pink-700">Login Admin</h2>
      </div>

      <!-- Form Login -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="Masukkan username"
            class="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Masukkan password"
            class="w-full px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>

      <!-- Pesan Error -->
      <p v-if="error" class="text-sm text-red-500 mt-4 text-center">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo.png' // Pastikan logo.png ada di src/assets/

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function handleLogin() {
  if (username.value === 'admin' && password.value === 'donat123') {
    router.push('/dashboard')
  } else {
    error.value = 'Username atau password salah.'
  }
}
</script>
