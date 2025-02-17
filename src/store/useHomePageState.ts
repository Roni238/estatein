import { defineStore } from 'pinia';
import { Review, Product, FAQ } from '@/types'

type StateKeys = 'products' | 'reviews' | 'faqs'

export const useHomePageState = defineStore('HomePageState', {
  state: () => ({
    products: [] as Product[],
    reviews: [] as Review[],
    faqs: [] as FAQ[]
  }),
  getters: {
    getProducts(state) {
      return state.products
    },
    getReviews(state) {
      return state.reviews
    },
    getFaqs(state) {
      return state.faqs
    }
  },
  actions: {
    async loadData(lang: string, stateKey: StateKeys) {
      try {
        const response = await fetch(`/data/${lang}/${stateKey}.json`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        this[stateKey] = [...data]
      } catch (error) {
        console.error('Ошибка загрузки данных:', error)
      }
    }
  }
})