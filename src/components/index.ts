// 管理所有的全局组件
import { App } from 'vue'
import XtxSkeleton from './skeleton/index.vue'
import Spline from '@splinetool/vue-spline';
import Lottie from './lottie/index.vue'
// 将全局组件封装到插件中
export default {
    install(Vue: App) {
        // 全局注册组件
        Vue.component('XtxSkeleton', XtxSkeleton)
        Vue.component('Spline', Spline)
        Vue.component('Lottie', Lottie)
    }
}
