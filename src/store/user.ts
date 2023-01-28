import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: ''
  }),
  getters: {
    isLogin: (state) => !!state.token,
    getUserName: (state) => state.username
  },
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
