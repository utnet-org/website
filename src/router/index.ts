// 管理路由
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false });
// 导入 layout
import layout from "@/views/layout/index.vue";
let router = createRouter({
  // 设置路由模式
  history: createWebHistory(),
  // 设置路由对象
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: () => import("@/views/home/index.vue"),
          children: [
            {
              path: '',
              component: () => import('@/views/home/home.vue')
            },
            {
              path: "/news",
              component: () => import("@/views/home/news.vue"),
            },
          ],
        },
        {
          path: "/learning",
          component: () => import("@/views/learning/index.vue"),
          children: [
            {
              path: "/learning/learning_center",
              component: () => import("@/views/learning/learning_center.vue"),
            },
            {
              path: "/learning/utility_explain",
              component: () => import("@/views/learning/utility_explain.vue"),
            },
            {
              path: "/learning/unc_token",
              component: () => import("@/views/learning/unc_token.vue"),
            },
            {
              path: "/learning/poci_consensus",
              component: () => import("@/views/learning/poci_consensus.vue"),
            },
          ],
        },
        {
          path: "/soloutions",
          component: () => import("@/views/soloutions/index.vue"),
          children: [
            {
              path: "/soloutions/utility_wallet",
              component: () => import("@/views/soloutions/utility_wallet.vue"),
            },
            {
              path: "/soloutions/hashing_power",
              component: () => import("@/views/soloutions/hashing_power.vue"),
            },
            {
              path: "/soloutions/mining_tool",
              component: () => import("@/views/soloutions/mining_tool.vue"),
            },
            {
              path: "/soloutions/ai_model",
              component: () => import("@/views/soloutions/ai_model.vue"),
            },
          ],
        },
        {
          path: "/developers",
          component: () => import("@/views/developers/index.vue"),
          children: [
            {
              path: "/developers/docs",
              component: () => import("@/views/developers/docs.vue"),
            },
            {
              path: "/developers/solution_provider",
              component: () =>
                import("@/views/developers/solution_provider.vue"),
            },
          ],
        },
        {
          path: "/community",
          component: () => import("@/views/community/index.vue"),
        },
        {
          path: "/mining",
          component: () => import("@/views/mining/index.vue"),
        },
        {
          path: "/get_power",
          component: () => import("@/views/getPower/index.vue"),
        },
      ],
    },
  ],
});

// 在路由切换前显示进度条
router.beforeEach((to, from, next) => {
  NProgress.start(); //进度条开始
  window.scrollTo(0, 0);
  next();
});

// 在路由切换后结束进度条
router.afterEach(() => {
  // 跳转后页面滚动到顶部
  window.scrollTo(0, 0);
  NProgress.done(); //进度条结束
});

// 暴露路由对象
export default router;
