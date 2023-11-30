<script setup lang="ts">
import { onMounted } from 'vue';

//监听窗口大小变化
onMounted(() => {
  window.addEventListener('resize', () => {
    localStorage.setItem('viewableWidth', document.documentElement.clientWidth.toString());
    console.log(localStorage.getItem('viewableWidth'));
  });

});
</script>
<template>
  <!-- <Suspense> 是一个用于实现组件延迟加载和异步渲染的组件 -->
  <!-- 一级路由出口 -->
  <router-view></router-view>
</template>
<style scoped lang="less"></style>
