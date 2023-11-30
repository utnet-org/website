// 管理所有的全局组件
import { App } from "vue";
import ut_top_nav from "./ut_top_nav.vue";
import set_language from "./set_language.vue";
import search from "./search.vue";
import middle_message_IntroduceVue from "./middle_message_ introduce.vue";
import accordion from "./accordion.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("UTTOPNAV", ut_top_nav);
    Vue.component("SETLANGUAGE", set_language);
    Vue.component("SEARCH", search);
    Vue.component("MiddleMessageIntroduce", middle_message_IntroduceVue);
    Vue.component("Accordion", accordion);
  },
};
