<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const changeLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("upaclang", lang);
  document
    .querySelector("html")!
    .setAttribute("lang", localStorage.getItem("upaclang") || "en");
  show.value = false;
};
const show = ref(false);
const setLang = () => {
  if (locale.value === "en") {
    changeLang("zh");
  } else {
    changeLang("en");
  }
};
</script>
<template>
  <div class="setlanguage_div">
    <div
      :class="['setlanguage', 'text_style_top', show ? 'hover' : '']"
      @mouseenter="show = true"
      @mouseleave="show = false"
    >
      <div class="text">
        {{ locale === "en" ? "English" : "中文简体" }}
        <el-icon class="icon"><ArrowDownBold /></el-icon>
      </div>
    </div>
    <div
      class="text_style_top setlanguage_dropdown_wrap"
      :style="{
        width: `120px`,
        height: show ? `94px` : 0,
        border: show ? `1px solid rgba(21, 28, 26, 0.15)` : `none`,
        transition: show
          ? 'height 0.1s cubic-bezier(0.07, 0.69, 0.14, 0.8)'
          : 'height 0.1s cubic-bezier(0.7, 0.08, 0.82, 0.16)',
      }"
      @mouseenter="show = true"
      @mouseleave="show = false"
    >
      <div class="options">
        <div class="opt_item" @click="changeLang('en')">English</div>
        <div class="opt_item" @click="changeLang('zh')">中文简体</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.setlanguage_div {
  width: 87px;
  position: relative;
  height: 69px;
  display: flex;
  justify-content: end;
}
.setlanguage {
  height: 69px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .text {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .icon {
    color: var(--app-header-icon-bgc);
    height: 14px;
    width: 14px;
  }
}
.hover {
  .text {
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 20px;
      background: #3edfcf;
      filter: blur(10px);
    }
  }
}

.setlanguage_dropdown_wrap {
  max-height: calc(100vh - 69px) !important;
  width: fit-content;
  height: fit-content;
  background-color: var(--app-header-setlanguage_bgc);
  border-radius: 8px;
  position: absolute;
  top: 69px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  box-shadow: var(--app-header-setlanguage_shadow);

  .options {
    width: 100%;
    padding: 10px;
    height: 94px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .opt_item {
      cursor: pointer;
      width: 100%;
      height: 35px;
      text-align: center;
      line-height: 35px;
      flex-shrink: 0;
      color: var(--app-header-options-item-color);
      &:hover {
        color: var(--app-header-options-color);
        border-radius: 6px;
        background: var(--app-header-options-bg);
        box-shadow: var(--app-header-options-shadow);
      }
    }
  }
}
</style>
