import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: ''
  }),
  getters: {},
  actions: {
    setUserInfo(username: string, token: string) {
      this.username = username
      this.token = token
    },
    removeUserInfo() {
      this.username = ''
      this.token = ''
    }
  },
  persist: true
})
