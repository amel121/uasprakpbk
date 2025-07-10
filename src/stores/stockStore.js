import { defineStore } from 'pinia'
import axios from 'axios'

export const useStockStore = defineStore('stockStore', {
  state: () => ({ stocks: [] }),
  actions: {
    async fetchStocks() {
      const res = await axios.get('http://localhost:3000/stocks')
      this.stocks = res.data
    }
  }
})