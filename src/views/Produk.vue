<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-pink-700 mb-6">Daftar Produk Donat</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="item in produkDonat"
        :key="item.id"
        class="rounded-xl shadow-md border hover:shadow-lg transition p-4 bg-white border-pink-200"
      >
        <img :src="item.gambar" :alt="item.nama" class="w-full h-32 object-contain mb-4" />
        <h3 class="text-lg font-semibold text-gray-800">{{ item.nama }}</h3>
        <p class="text-pink-600 font-bold text-lg mb-1">Rp{{ item.harga.toLocaleString() }}</p>
        <p class="text-sm text-gray-500">{{ item.deskripsi }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const produkDonat = [
  {
    id: 1,
    nama: 'Donat Coklat',
    harga: 8000,
    deskripsi: 'Donat lezat dengan topping coklat lumer',
    gambar: 'src/assets/donatcoklat.jpeg'
  },
  {
    id: 2,
    nama: 'Donat Stroberi',
    harga: 8500,
    deskripsi: 'Donat segar dengan topping stroberi manis',
    gambar: 'src/assets/donatstoberi.jpeg'
  },
  {
    id: 3,
    nama: 'Donat Matcha',
    harga: 9000,
    deskripsi: 'Donat dengan taburan matcha Jepang asli',
    gambar: 'src/assets/donatmatcha.jpeg'
  },
  {
    id: 4,
    nama: 'Donat Keju',
    harga: 9500,
    deskripsi: 'Donat lembut dengan topping keju parut',
    gambar: 'src/assets/donatkeju.jpeg'
  },
  {
    id: 5,
    nama: 'Donat Red Velvet',
    harga: 10000,
    deskripsi: 'Donat merah mewah dengan krim lembut',
    gambar: 'src/assets/donatredvelvet.jpeg'
  },
  {
    id: 6,
    nama: 'Donat Oreo',
    harga: 9500,
    deskripsi: 'Donat dengan topping remahan oreo dan krim',
    gambar: 'src/assets/donatoreo.jpeg'
  },
  {
    id: 7,
    nama: 'Donat Kacang',
    harga: 8500,
    deskripsi: 'Donat topping kacang dan karamel renyah',
    gambar: 'src/assets/donatkacang.jpeg'
  },
  {
    id: 8,
    nama: 'Donat Blueberry',
    harga: 9000,
    deskripsi: 'Donat isi selai blueberry segar',
    gambar: 'src/assets/donatblueberry.jpeg'
  },
  {
    id: 9,
    nama: 'Donat Pandan',
    harga: 8500,
    deskripsi: 'Donat aroma pandan dengan kelapa parut',
    gambar: 'src/assets/donatpandan.jpeg'
  },
  {
    id: 10,
    nama: 'Donat Cappuccino',
    harga: 9500,
    deskripsi: 'Donat rasa kopi lembut dengan krim cappuccino',
    gambar: 'src/assets/donatcappucino.jpeg'
  },
  {
    id: 11,
    nama: 'Donat Tiramisu',
    harga: 9000,
    deskripsi: 'Donat rasa kopi tiramisu dengan krim lembut',
    gambar: 'src/assets/donattiramisu.jpg'
  },
  {
    id: 12,
    nama: 'Donat Susu',
    harga: 8500,
    deskripsi: 'Donat dengan topping susu dan taburan gula',
    gambar: 'src/assets/donatsusu.jpeg'
  },
  {
    id: 13,
    nama: 'Donat Strawberry',
    harga: 8500,
    deskripsi: 'Donat rasa strawberry dengan selai buah',
    gambar: 'src/assets/donatstrawberry.jpeg'
  },
  {
    id: 14,
    nama: 'Donat Vanilla',
    harga: 8000,
    deskripsi: 'Donat lembut rasa vanilla klasik',
    gambar: 'src/assets/donatvanilla.jpeg'
  },
  {
    id: 15,
    nama: 'Donat Durian',
    harga: 9000,
    deskripsi: 'Donat isi durian asli yang menggoda',
    gambar: 'src/assets/donatdurian.jpeg'
  },
  {
    id: 16,
    nama: 'Donat Caramel',
    harga: 8500,
    deskripsi: 'Donat dilapisi saus karamel lezat',
    gambar: 'src/assets/donatcaramel.jpeg'
  }
]
</script>

<style scoped>
/* Animasi hover tambahan (opsional) */
.card:hover {
  transform: scale(1.02);
  transition: all 0.3s ease-in-out;
}
</style>
