// 引入pinia
import useStore from '@/store'
import { storeToRefs } from "pinia";
export function saveThemePreference() {
    const { home } = useStore()
    home.setTheme()
}

export function loadThemePreference() {
    const { home } = useStore()
    const { theme } = storeToRefs(home)
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



