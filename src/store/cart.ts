import { defineStore, acceptHMRUpdate } from 'pinia'
import { useUserStore } from './user'
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    rawItems: [] as any[]
  }),
  getters: {
    items: (state) => {
      const arr: any[] = []
      state.rawItems.map((item) => {
        const itemName = arr.find((i) => i.name === item)
        if (!itemName) {
          arr.push({
            name: item,
            amount: 1
          })
        } else {
          itemName.amount++
        }
      })

      return arr
    }
  },
  actions: {
    addItem(name: any) {
      this.rawItems.push(name)
    },
    removeItem(name: any) {
      const i = this.rawItems.lastIndexOf(name)
      if (i > -1) this.rawItems.splice(i, 1)
    },
    async purchaseItems() {
      const user = useUserStore()
      if (!user.name) return

      console.log('Purchasing', this.items)
      const n = this.items.length
      this.rawItems = []

      return n
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
