// 管理分类导航的数据
import { useI18n } from "vue-i18n";
import { defineStore } from 'pinia'
let useHomeStore = defineStore('home', {
  state: () => ({
    theme: false,

    locale_zh: 'Zh',
  }),
  actions: {
    setTheme() {
      this.theme = document.body.classList.contains('dark-theme')
    },
    setlocale(i: any) {
      this.locale_zh = i;
      console.log(i);
      console.log(this.locale_zh);

    },
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

