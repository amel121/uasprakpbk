import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('orderStore', {
  state: () => ({ orders: [] }),
  actions: {
    async fetchOrders() {
      const res = await axios.get('http://localhost:3000/orders')
      this.orders = res.data
    },
    async addOrder(order) {
      await axios.post('http://localhost:3000/orders', order)
      this.fetchOrders()
    }
  }
})