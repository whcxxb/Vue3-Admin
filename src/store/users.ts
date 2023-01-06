import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userName: '',
    token: ''
  }),
  getters: {},
  actions: {}
})
