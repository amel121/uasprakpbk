<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-pink-700 mb-6">Stok Donat</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-pink-200 rounded-xl shadow-md">
        <thead class="bg-pink-100 text-pink-800">
          <tr>
            <th class="text-left px-6 py-3">No</th>
            <th class="text-left px-6 py-3">Nama Donat</th>
            <th class="text-left px-6 py-3">Harga</th>
            <th class="text-left px-6 py-3">Stok</th>
            <th class="text-left px-6 py-3">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(donat, index) in stokDonat"
            :key="donat.id"
            class="border-t hover:bg-pink-50 transition"
          >
            <td class="px-6 py-3">{{ index + 1 }}</td>
            <td class="px-6 py-3 font-medium">{{ donat.nama }}</td>
            <td class="px-6 py-3">Rp{{ donat.harga.toLocaleString() }}</td>
            <td class="px-6 py-3">{{ donat.stok }}</td>
            <td class="px-6 py-3 text-sm text-gray-500">
              <span
                :class="{
                  'text-green-600': donat.stok > 10,
                  'text-yellow-600': donat.stok <= 10 && donat.stok > 3,
                  'text-red-600': donat.stok <= 3
                }"
              >
                {{
                  donat.stok > 10
                    ? 'Stok Aman'
                    : donat.stok > 3
                    ? 'Stok Menipis'
                    : 'Segera Restok'
                }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const stokDonat = [
  { id: 1, nama: 'Donat Coklat', harga: 8000, stok: 12 },
  { id: 2, nama: 'Donat Stroberi', harga: 8500, stok: 5 },
  { id: 3, nama: 'Donat Matcha', harga: 9000, stok: 3 },
  { id: 4, nama: 'Donat Keju', harga: 9500, stok: 0 },
  { id: 5, nama: 'Donat Red Velvet', harga: 10000, stok: 9 },
  { id: 6, nama: 'Donat Oreo', harga: 9500, stok: 11 },
  { id: 7, nama: 'Donat Blueberry', harga: 9000, stok: 7 },
  { id: 8, nama: 'Donat Caramel', harga: 8500, stok: 4 },
  { id: 9, nama: 'Donat Tiramisu', harga: 9000, stok: 1 },
  { id: 10, nama: 'Donat Pandan', harga: 8500, stok: 6 },
  { id: 11, nama: 'Donat Susu', harga: 8500, stok: 8 },
  { id: 12, nama: 'Donat Vanilla', harga: 8000, stok: 2 },
  { id: 13, nama: 'Donat Durian', harga: 9000, stok: 0 }
]
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hiddena;
}
</style>
