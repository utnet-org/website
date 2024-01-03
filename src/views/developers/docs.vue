<script setup lang="ts">
import { ref } from "vue";

const options_list = ref([
  {
    title: "Run a node",
    text: "docs.Empower_the_Network",
    images:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image1.png",
    style: "width: 87px; height: 100px; ",
  },
  {
    title: "Provide my hashing power",
    text: "docs.Contribute_Computing_Power",
    images:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image2.png",

    style: "width: 88px; height: 123px; ",
  },
  {
    title: "build a dapp",
    text: "docs.Innovate_with_Us",
    images:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image3.png",
    style: "width: 100px; height: 95px; ",
  },
  {
    title: "White Paper",
    text: "docs.Explore_Our_Foundation",
    images:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/options_image4.png",
    style: "width: 87px; height: 100px; ",
  },
]);
</script>
<template>
  <div class="container">
    <div class="header">
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
        <img
          :src="item.images"
          alt=""
          :style="item.style"
          style="margin: 50px"
        />
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
    background: url("https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/docs_background.png")
      no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header_image {
      .header_title {
        color: rgba(21, 28, 26, 0.9);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 25px;
      }

      .header_text {
        max-width: 834px;
        padding: 0 10px;
        color: rgba(21, 28, 26, 0.9);
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
    box-shadow: var(--docs-box-shadow-light);
    cursor: pointer;

    &:hover {
      background: url("https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/docs_options_background.png")
        no-repeat;
      background-size: cover;
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
    background: url("https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/m_Background.svg")
      no-repeat;
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
      box-shadow: 0px 1px 1px 1px #dfe7e6 inset;
      backdrop-filter: blur(4px);
      padding: 40px 28px;
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
    padding: 32px 20px 44px 20px;
  }

  .options_item {
    width: 342px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(
      180deg,
      rgba(149, 235, 227, 0.17) 1.02%,
      rgba(149, 235, 227, 0) 38.87%
    );
    display: flex;
    // 更改主轴方向
    flex-direction: column;
    align-items: center;
    padding: 0 26px 56px 26px;

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
      color: var(--where-text);
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
