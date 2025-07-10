<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-pink-700 mb-6">Laporan Penjualan</h2>

    <div class="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6 shadow-sm">
      <p class="text-lg text-gray-700">
        Total Transaksi: <span class="font-bold text-pink-700">{{ totalTransaksi }}</span>
      </p>
      <p class="text-lg text-gray-700">
        Total Donat Terjual: <span class="font-bold text-pink-700">{{ totalDonat }}</span>
      </p>
      <p class="text-lg text-gray-700">
        Total Pendapatan: <span class="font-bold text-pink-700">Rp{{ totalPendapatan.toLocaleString() }}</span>
      </p>
    </div>

    <table class="w-full bg-white shadow rounded-lg border border-pink-200 overflow-hidden">
      <thead class="bg-pink-100 text-pink-800">
        <tr>
          <th class="px-4 py-2 text-left">No</th>
          <th class="px-4 py-2 text-left">Nama</th>
          <th class="px-4 py-2 text-left">Produk</th>
          <th class="px-4 py-2 text-left">Jumlah</th>
          <th class="px-4 py-2 text-left">Total</th>
          <th class="px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in laporan"
          :key="item.id"
          class="border-t hover:bg-pink-50 transition"
        >
          <td class="px-4 py-2">{{ index + 1 }}</td>
          <td class="px-4 py-2">{{ item.nama }}</td>
          <td class="px-4 py-2">{{ item.produk }}</td>
          <td class="px-4 py-2">{{ item.jumlah }}</td>
          <td class="px-4 py-2">Rp{{ item.total.toLocaleString() }}</td>
          <td class="px-4 py-2">
            <span
              class="inline-block px-2 py-1 rounded text-sm font-medium"
              :class="{
                'bg-green-100 text-green-700': item.status === 'Selesai',
                'bg-yellow-100 text-yellow-700': item.status === 'Diproses',
                'bg-red-100 text-red-700': item.status === 'Dibatalkan'
              }"
            >
              {{ item.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const laporan = [
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

const totalTransaksi = laporan.length
const totalDonat = laporan.reduce((sum, p) => sum + p.jumlah, 0)
const totalPendapatan = laporan
  .filter(p => p.status === 'Selesai')
  .reduce((sum, p) => sum + p.total, 0)
</script>
