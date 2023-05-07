const util = {
    //设置黑夜主题
    setTheme() {
        //判断id为app的元素是否有dark类
        if (document.getElementById('app')!.classList.contains('dark')) {
            //如果有dark类，就移除dark类
            document.getElementById('app')!.classList.remove('dark')
            //并且将theme设置为light
            localStorage.setItem('theme', 'light')
            return false
        } else {
            //如果没有dark类，就添加dark类
            document.getElementById('app')!.classList.add('dark')
            //并且将theme设置为dark
            localStorage.setItem('theme', 'dark')
            return true
        }
    },
    //获取本地主题
    getTheme() {
        //判断本地是否有theme
        if (localStorage.getItem('theme')) {
            //如果有theme，就判断theme是否为dark
            if (localStorage.getItem('theme') == 'dark') {
                //如果theme为dark，就添加dark类
                document.getElementById('app')!.classList.add('dark')
                return true
            } else {
                //如果theme不为dark，就移除dark类
                document.getElementById('app')!.classList.remove('dark')
                return false
            }
        } else {
            //如果本地没有theme，就添加dark类
            document.getElementById('app')!.classList.add('dark')
            return true
        }
    }
}

export default util