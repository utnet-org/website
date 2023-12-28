import { ref } from "vue";

export function saveThemePreference() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', `${isDarkTheme}`);
}

export function loadThemePreference() {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
    }
}

// 页面加载时加载主题偏好
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();

});


// 切换主题
export function toggleTheme() {
    // 保存主题偏好
    document.body.classList.toggle('dark-theme');


}



