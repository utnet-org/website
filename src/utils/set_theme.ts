// 引入pinia
import useStore from '@/store'
import { storeToRefs } from "pinia";

// 保存主题偏好
export function saveThemePreference() {
    const { home } = useStore();
    home.setTheme();  // 保存当前页面主题状态
}

// 加载主题偏好
export function loadThemePreference() {
    const { home } = useStore();
    const { theme } = storeToRefs(home);

    // 根据 theme 的布尔值设置页面主题
    if (theme.value) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// 页面加载时加载主题偏好
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
});

// 切换主题
export function toggleTheme() {
    const { home } = useStore();

    // 切换主题
    document.body.classList.toggle('dark-theme');

    // 保存当前的主题状态
    home.setTheme();
}
