<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
const updatedWidth = function () {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};
onMounted(async () => {
  window.addEventListener("resize", updatedWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updatedWidth);
});
const options_list = computed(() => [
  {
    title: "Run a node",
    text: "docs.Empower_the_Network",
    images: !theme.value
      ? "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/Layer_1_docs.png"
      : "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image1.png",
    style: !theme.value
      ? width.value > 835
        ? "width: 87px; height: 100px; margin: 50px"
        : "width: 87px; height: 100px; margin: 50px 0 25px 0"
      : width.value > 835
      ? "width: 152px; height: 151px; margin:24px 0 23px 16px;"
      : "width: 152px; height: 151px; margin-top:26px;",
  },
  {
    title: "Provide my hashing power",
    text: "docs.Contribute_Computing_Power",
    images: !theme.value
      ? "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/Layer_2_docs.png "
      : "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image2.png",
    style: !theme.value
      ? width.value > 835
        ? "width: 88px; height: 123px;margin: 50px "
        : "width: 88px; height: 123px; margin: 50px 0 28px 0"
      : width.value > 835
      ? "width: 152px; height: 151px; margin:48px 0 23px 18px;"
      : "width: 152px; height: 151px; margin-top:50px;",
  },
  {
    title: "build a dapp",
    text: "docs.Innovate_with_Us",
    images: !theme.value
      ? "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/Layer_3_docs.png"
      : "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image3.png",
    style: !theme.value
      ? width.value > 835
        ? "width: 100px; height: 95px; margin: 50px"
        : "width: 100px; height: 95px; margin: 50px 0 28px 0"
      : width.value > 835
      ? "width: 152px; height: 151px; margin: 22px"
      : "width: 152px; height: 151px; margin-top:24px;",
  },
  {
    title: "White Paper",
    text: "docs.Explore_Our_Foundation",
    images: !theme.value
      ? "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/Layer_4_docs.png"
      : "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image4.png",
    style: !theme.value
      ? width.value > 835
        ? "width: 87px; height: 100px;margin: 50px "
        : "width: 87px; height: 100px;margin: 50px 0 28px 0"
      : width.value > 835
      ? "width: 152px; height: 151px; margin:24px 0 24px 17px;"
      : "width: 152px; height: 151px; margin-top:26px;",
  },
]);
</script>
<template>
  <div class="container">
    <div
      class="header"
      :style="{
        // background: theme
        //   ? ''
        //   : 'url(' +
        //     'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/docs_background.png' +
        //     ')' +
        //     ' no-repeat',
        // 'background-size': !theme ? 'cover' : '',
      }"
    >
      <div class="header_image">
        <div class="header_title">Utility Docs</div>
        <div class="header_text">
          {{ $t("docs.At_this_stage_UNC") }}
        </div>
      </div>
    </div>
    <div class="options_list">
      <div
        v-for="(item, index) in options_list"
        :key="index"
        class="options_item"
      >
        <img :src="item.images" alt="" :style="item.style" />
        <div class="options_item_title">{{ item.title }}</div>
        <div class="options_item_text">
          {{ $t(item.text) }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  // background: #fffefb;
  padding-top: 70px;
}

@media (min-width: 835px) {
  .header {
    width: 100%;
    height: 430px;
    background: var(--docs-bgc);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header_image {
      .header_title {
        color: var(--where-text);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 25px;
      }

      .header_text {
        max-width: 834px;
        padding: 0 10px;
        color: var(--where-text);
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 154%;
        /* 24.64px */
        opacity: 0.8;
      }
    }
  }

  .options_list {
    display: flex;
    justify-content: center;
    //多行对其
    flex-wrap: wrap;
    padding: 60px 0 100px 0;
  }

  .options_item {
    width: 716px;
    height: 394px;
    margin: 8px 8px;
    padding: 0px 50px;
    border-radius: 12px;
    border: var(--docs-box-options_item-border);
    box-shadow: var(--docs-box-shadow-light);
    cursor: pointer;
    background-color: var(--docs-box-options_item-background);
    &:hover {
      background: var(--docs-box-options_item-background1);
      border: var(--unc_token-header-border);
      box-shadow: var(--unc_token-subtitle-shadow);
    }

    .options_item_title {
      color: #3edfcf;
      font-family: Lantinghei SC;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 14px;
    }

    .options_item_text {
      color: var(--where-text);
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 142%;
      /* 22.72px */
      letter-spacing: 0.48px;
      opacity: 0.8;
    }
  }
}

@media (max-width: 835px) {
  .header {
    width: 100%;
    height: 430px;
    background: var(--docs-bgc-phone);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px 30px 20px;

    .header_image {
      border-radius: 10px;
      background: linear-gradient(
        180deg,
        rgba(244, 248, 248, 0.05) 0.13%,
        rgba(244, 248, 248, 0) 99.87%
      );

      backdrop-filter: blur(4px);
      padding: 40px 28px;
      box-shadow: var(--unc_token-header_content-shadow);
      backdrop-filter: blur(var(--unc_token-header_content-filter));
    }

    .header_title {
      color: var(--where-text);
      // font-family: Lantinghei SC;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 18px;
    }

    .header_text {
      color: var(--where-text);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 154%;
      /* 24.64px */
    }
  }

  .options_list {
    display: flex;
    justify-content: center;
    //多行对其
    flex-wrap: wrap;
    padding: 32px 10px 44px 10px;
  }

  .options_item {
    width: 342px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--docs-phone-options_item-background);
    display: flex;
    // 更改主轴方向
    flex-direction: column;
    align-items: center;
    padding: 0 26px 56px 26px;
    margin-bottom: 18px;

    .options_item_title {
      color: #3edfcf;
      // text-align: center;
      // font-family: Lantinghei SC;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;

      margin-bottom: 14px;
    }

    .options_item_text {
      color: var(--unc_token-main_text-color);
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 142%;
      /* 22.72px */
      letter-spacing: 0.48px;
    }
  }
}
</style>
