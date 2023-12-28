// 引入pinia
import useStore from '@/store'
import { storeToRefs } from "pinia";
import { ref } from 'vue';
export function saveThemePreference() {
    const { home } = useStore()
    home.setTheme()
}

export function loadThemePreference() {
    const { home } = useStore()
    const { theme } = storeToRefs(home)
    isDarkMode.value = true;
    if (theme.value) {
        document.body.classList.add('dark-theme');
    }
    home.setTheme()
}

// 页面加载时加载主题偏好
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
});


// 切换主题
export function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}



import { computed, watch } from "vue";


// 创建一个响应式变量
const isDarkMode = ref(false);




// 页面加载时加载主题偏好
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();

});




// 使用 MutationObserver 监听 body 类的变化
const observer = new MutationObserver(() => {
    isDarkMode.value = document.body.classList.contains('dark-theme');
});
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });



export default isDarkMode