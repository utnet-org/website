import { createApp } from 'vue'
import App from './App.vue'
// 导入 normalize
import 'normalize.css'
// 导入自定义的公共样式
import '@/assets/styles/common.less'
// 导入主题样式
import '@/assets/styles/theme.less'
// 导入路由
import router from './router/index'
// 导入复用组件
import plugin from "./components/index";
// 导入 pinia
import { createPinia } from 'pinia'
// 导入 element-plus
import ElementPlus from "element-plus";
// 导入 国际化
import i18n from './locale/index'
// 导入 element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 
import 'element-plus/dist/index.css'

import piniaPluginPersist from 'pinia-plugin-persist';

let pinia = createPinia()

pinia.use(piniaPluginPersist);

const app = createApp(App)

app.use(router)
    .use(ElementPlus)
    .use(i18n)
    .use(pinia)
    .use(plugin)
    .mount('#app')

// 挂载 element-plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}