// 管理网络请求
import axios from 'axios'
// 创建 axios 副本对象
let request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000
})
// 设置请求拦截器
request.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
// 设置响应拦截器
request.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return Promise.reject(err)
    }
)
// 暴露对象
import router from "../router/index";
export const openNewPage = (link: string) => {
    console.log("go to : ", link);
    if (link.startsWith("http://") || link.startsWith("https://")) {
        window.open(link, '_blank');
    } else {
        router.push(link);
    }
}
