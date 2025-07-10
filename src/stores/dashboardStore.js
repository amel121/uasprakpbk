// stores/dashboardStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    totalProduk: 0,
    totalPesanan: 0,
    totalStok: 0,
  }),
  actions: {
    async fetchData() {
      const produk = await axios.get('http://localhost:3000/produk')
      const pesanan = await axios.get('http://localhost:3000/pesanan')
      const stok = await axios.get('http://localhost:3000/stok')

      this.totalProduk = produk.data.length
      this.totalPesanan = pesanan.data.length
      this.totalStok = stok.data.reduce((acc, item) => acc + item.jumlah, 0)
    },
  },
})
