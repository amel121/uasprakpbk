<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-pink-700 mb-6">Daftar Pesanan</h2>

    <div class="overflow-x-auto bg-white shadow-md rounded-lg border border-pink-100">
      <table class="min-w-full text-sm text-left text-gray-700">
        <thead class="text-xs text-white uppercase bg-pink-500">
          <tr>
            <th class="px-6 py-3">No</th>
            <th class="px-6 py-3">Nama Pelanggan</th>
            <th class="px-6 py-3">Produk</th>
            <th class="px-6 py-3">Jumlah</th>
            <th class="px-6 py-3">Total</th>
            <th class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in daftarPesanan"
            :key="item.id"
            class="border-b hover:bg-pink-50 transition"
          >
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4 font-medium">{{ item.nama }}</td>
            <td class="px-6 py-4">{{ item.produk }}</td>
            <td class="px-6 py-4">{{ item.jumlah }}</td>
            <td class="px-6 py-4">Rp{{ item.total.toLocaleString() }}</td>
            <td class="px-6 py-4">
              <span
                :class="{
                  'text-green-600 font-semibold': item.status === 'Selesai',
                  'text-yellow-500 font-semibold': item.status === 'Diproses',
                  'text-red-500 font-semibold': item.status === 'Dibatalkan'
                }"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const daftarPesanan = [
  { id: 1, nama: 'Dina', produk: 'Donat Coklat', jumlah: 2, total: 16000, status: 'Selesai' },
  { id: 2, nama: 'Rudi', produk: 'Donat Stroberi', jumlah: 3, total: 25500, status: 'Diproses' },
  { id: 3, nama: 'Sari', produk: 'Donat Keju', jumlah: 1, total: 9500, status: 'Selesai' },
  { id: 4, nama: 'Andi', produk: 'Donat Red Velvet', jumlah: 5, total: 50000, status: 'Dibatalkan' },
  { id: 5, nama: 'Budi', produk: 'Donat Matcha', jumlah: 4, total: 38000, status: 'Selesai' },
  { id: 6, nama: 'Rani', produk: 'Donat Oreo', jumlah: 2, total: 19000, status: 'Diproses' },
  { id: 7, nama: 'Tono', produk: 'Donat Blueberry', jumlah: 3, total: 27000, status: 'Selesai' },
  { id: 8, nama: 'Sinta', produk: 'Donat Caramel', jumlah: 1, total: 8500, status: 'Diproses' },
  { id: 9, nama: 'Lisa', produk: 'Donat Tiramisu', jumlah: 2, total: 18000, status: 'Dibatalkan' },
  { id: 10, nama: 'Hana', produk: 'Donat Pandan', jumlah: 3, total: 27000, status: 'Selesai' },
  { id: 11, nama: 'Joko', produk: 'Donat Susu', jumlah: 2, total: 17000, status: 'Selesai' },
  { id: 12, nama: 'Maya', produk: 'Donat Strawberry', jumlah: 5, total: 42500, status: 'Diproses' },
  { id: 13, nama: 'Fajar', produk: 'Donat Vanilla', jumlah: 2, total: 16000, status: 'Selesai' },
  { id: 14, nama: 'Nina', produk: 'Donat Durian', jumlah: 1, total: 9000, status: 'Dibatalkan' }
]
</script>
