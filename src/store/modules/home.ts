import { defineStore } from 'pinia';

let useHomeStore = defineStore('home', {
  state: () => ({
    theme: false,  // 默认值为 false（即亮色主题）
    locale_zh: 'Zh',
  }),
  actions: {
    setTheme() {
      this.theme = document.body.classList.contains('dark-theme');
    },
    setlocale(i: any) {
      this.locale_zh = i;
      console.log(i);
      console.log(this.locale_zh);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'home',
        storage: localStorage, // 或 sessionStorage
      }
    ]
  }
});

export default useHomeStore;
