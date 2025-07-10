import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from '@/stores/productStore'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('productStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches products from API', async () => {
    const store = useProductStore()
    axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Donat Coklat', price: 8000 }] })
    await store.fetchProducts()
    expect(store.products.length).toBe(1)
    expect(store.products[0].name).toBe('Donat Coklat')
  })
})
