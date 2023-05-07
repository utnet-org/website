// 管理分类导航的数据
import { defineStore } from 'pinia'
type HomeObj = {
  setBackgroundColor: (color: string) => {},
}
let useHomeStore = defineStore('home', {
  state: () => ({
    themeShow: false,
    homeObj: {
      yoZEKkDaaM4Bf0Lc: {} as HomeObj,
      YFmYddqszej3kVrS: {} as HomeObj,
      SgyiTMMFrboWvNt2: {} as HomeObj,
      k4JRyXh7Gy1jhj: {} as HomeObj,
      ivEMfk9ulAFRBn22: {} as HomeObj,
    },
  }),
  actions: {},
  getters: {
    temS: state => state.themeShow

  }
})
export default useHomeStore

