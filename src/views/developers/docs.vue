<script setup lang="ts">
import OptionsImage1 from "@/assets/images/options_image1.png";
import OptionsImage2 from "@/assets/images/options_image2.png";
import OptionsImage3 from "@/assets/images/options_image3.png";
import OptionsImage4 from "@/assets/images/options_image4.png";
import { ref } from "vue";

const options_list = ref([
  {
    title: "Run a node",
    text: "docs.Empower_the_Network",
    images: OptionsImage1,
  },
  {
    title: "Provide my hashing power",
    text: "docs.Contribute_Computing_Power",
    images: OptionsImage2,
  },
  {
    title: "build a dapp",
    text: "docs.Innovate_with_Us",
    images: OptionsImage3,
  },
  {
    title: "White Paper",
    text: "docs.Explore_Our_Foundation",
    images: OptionsImage4,
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
          style="width: 115px; height: 132px; margin: 50px 0 83px"
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
  background: #fffefb;

  .header {
    width: 100%;
    height: 430px;
    background: url("@/assets/images/docs_background.png") no-repeat;
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

    .options_item {
      width: 716px;
      height: 394px;
      margin: 8px 8px;
      padding: 0px 50px;
      border-radius: 12px;
      box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.5);
      cursor: pointer;

      &:hover {
        background: url("@/assets/images/docs_options_background.png") no-repeat;
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
        color: rgba(21, 28, 26, 0.9);
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
}
@media (max-width: 835px) {
}
@media (min-width: 835px) {
    .header{
        
    }
  .header_title {
    color: var(--Light-dark, rgba(21, 28, 26, 0.9));
    font-family: Lantinghei SC;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .header_text {
    color: var(--Light-dark, rgba(21, 28, 26, 0.9));
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 154%; /* 24.64px */
  }
}
</style>
