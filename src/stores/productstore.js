import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
  state: () => ({ products: [] }),
  actions: {
    async fetchProducts() {
      const res = await axios.get('http://localhost:3000/products')
      this.products = res.data
    },
    async addProduct(product) {
      await axios.post('http://localhost:3000/products', product)
      this.fetchProducts()
    },
    async deleteProduct(id) {
      await axios.delete(`http://localhost:3000/products/${id}`)
      this.fetchProducts()
    }
  }
})
