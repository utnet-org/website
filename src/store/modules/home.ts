// 管理分类导航的数据
import { defineStore } from 'pinia'
let useHomeStore = defineStore('home', {
  state: () => ({
    theme: false
  }),
  actions: {
    setTheme() {
      this.theme = document.body.classList.contains('dark-theme')
    }
  },
  getters: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'home',
        storage: localStorage, // 或 sessionStorage
      }
    ]
  }
})
export default useHomeStore

