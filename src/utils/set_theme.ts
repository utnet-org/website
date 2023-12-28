
import { computed, ref, watch } from "vue";


// 创建一个响应式变量
const isDarkMode = ref(false);


// 切换主题
export function toggleTheme() {
    // 保存主题偏好
    document.body.classList.toggle('dark-theme');
    isDarkMode.value = document.body.classList.contains('dark-theme');
    saveThemePreference();
}


// 保存主题偏好
function saveThemePreference() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', `${isDarkTheme}`);
}

export function loadThemePreference() {
    const storedTheme = localStorage.getItem('darkTheme');
    if (storedTheme) {
        isDarkMode.value = storedTheme === 'true';
        if (isDarkMode.value) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
}

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