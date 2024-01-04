<script setup lang="ts">
import { number } from "echarts";
import { ref } from "vue";
const props = defineProps({
  fromPage: {
    type: String,
    default: "",
  },
  accordionTitle: {
    type: String,
    default: "",
  },
  accordionList: {
    type: Object,
    default: {},
  },
  checkIndex: {
    type: String,
    default: "0",
  },
});
const checkIndex = ref(props.checkIndex);
const updateCheckIndex = (index: string) => {
  checkIndex.value = index;
};
const handleScroll = (event: { deltaY: any }) => {
  // event.deltaY 表示垂直方向上的滚动距离
  const deltaY = event.deltaY;

  // 根据滚动方向进行相应的处理
  if (deltaY > 0) {
    console.log("向下滚动");
    // 执行向下滚动时的逻辑
  } else if (deltaY < 0) {
    console.log("向上滚动");
    // 执行向上滚动时的逻辑
  }
};
const viewableWidth = ref(document.documentElement.clientWidth ?? 0);
const touchStartLocation = ref(0);
const touchEndLocation = ref(0);
const defaultTransformPx = ref(0);

const changeAccordionCardStart = (e: any) => {
  touchStartLocation.value = e.touches[0].clientX;
  defaultTransformPx.value = (Number(checkIndex.value) * 100) / 3;
};
const changeAccordionCardMove = (e: any) => {
  touchEndLocation.value = touchStartLocation.value - e.touches[0].clientX;
  if (checkIndex.value == "0") {
    if (touchEndLocation.value < 0) {
      return;
    }
  }
  if (checkIndex.value == "2") {
    if (touchEndLocation.value > 0) {
      return;
    }
  }
  defaultTransformPx.value =
    defaultTransformPx.value + touchEndLocation.value / viewableWidth.value;
};
const changeAccordionCardEnd = (e: any) => {
  console.log(touchEndLocation.value);

  if (touchEndLocation.value < 0) {
    if (Math.abs(touchEndLocation.value) > viewableWidth.value / 4) {
      if (checkIndex.value == "0") {
        return;
      }
      checkIndex.value = (Number(checkIndex.value) - 1).toString();
    }
  } else {
    if (Math.abs(touchEndLocation.value) > viewableWidth.value / 4) {
      if (checkIndex.value == (props.accordionList.length - 1).toString()) {
        return;
      }
      checkIndex.value = (Number(checkIndex.value) + 1).toString();
    }
  }
  defaultTransformPx.value = (Number(checkIndex.value) * 100) / 3;
  touchStartLocation.value = 0;
  touchEndLocation.value = 0;
};
</script>
<template>
  <div class="accordion" @wheel="handleScroll" v-if="viewableWidth > 834">
    <div class="accordion_title">{{ accordionTitle }}</div>
    <div v-for="(item, index) in accordionList" :key="index">
      <div class="accordion_item">
        <div class="accordion_item_title" @click="updateCheckIndex(index)"
          :style="checkIndex == index ? 'color:#3EDFCF;' : ''">
          {{ item.title }}
        </div>
        <div class="accordion_item_content" v-if="checkIndex == index">
          <!-- <div class="accordion_item_content_title">
            {{ accordionList[checkIndex].messageTitle }}
          </div> -->
          <div class="accordion_item_content_text">
            {{ $t(accordionList[checkIndex].messageText) }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="phone_accordion">
    <div class="accordion_title">{{ accordionTitle }}</div>
    <div class="phone_accordion_options" @touchstart="changeAccordionCardStart" @touchmove="changeAccordionCardMove"
      @touchend="changeAccordionCardEnd" :style="`transform: translateX(-${defaultTransformPx}%)`">
      <div v-for="(item, index) in accordionList" :key="index" class="phone_accordion_item" :style="props.fromPage == 'community'
        ? 'padding: 28px 30px 0;height: 315px;'
        : ''
        ">
        <div class="phone_accordion_item_title" :class="props.fromPage == 'community'
          ? 'phone_accordion_item_title_from_community'
          : ''
          ">
          {{ item.title }}
        </div>
        <div class="phone_accordion_item_content_title" :class="props.fromPage == 'community'
          ? 'phone_accordion_item_content_titlefrom_community'
          : ''
          ">
          {{ item.messageTitle }}
        </div>
        <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/toggle_menu_icon.png" alt=""
          v-if="props.fromPage == 'community'" class="phone_accordion_item_image_from_community" />
        <div class="phone_accordion_item_content_text">
          {{ $t(item.messageText) }}
        </div>
      </div>
    </div>
    <div class="phone_accordion_options_dot">
      <div class="phone_accordion_options_dot_item" v-for="(item, index) in accordionList.length" :key="index"
        :class="Number(checkIndex) == index ? 'active' : ''"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.accordion {
  width: 100%;
  padding: 80px 0;
  // background-color: #f6f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .accordion_title {
    width: 413px;
    color: var(--text-color);
    font-family: Lantinghei SC;
    font-size: 22px;
    font-weight: 700;
    text-align: right;
    margin-bottom: 38px;
  }

  .accordion_item {
    margin-right: 180px;
    display: flex;
    justify-content: flex-start;
    padding: 22px 0;

    .accordion_item_title {
      min-width: 410px;
      max-width: 413px;
      color: var(--text-color);
      text-align: right;
      font-family: Lantinghei SC;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    .accordion_item_content {
      padding-left: 138px;

      .accordion_item_content_title {
        color: var(--text-color);
        font-family: Inter;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .accordion_item_content_text {
        color: var(--text-color);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 161%;
        /* 22.54px */
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 834px) {
  .phone_accordion {
    overflow: hidden;

    .accordion_title {
      color: var(--text-color);
      font-family: Lantinghei SC;
      font-size: 22px;
      font-weight: 700;
      text-align: center;
      padding: 29px 20px 24px;
    }

    .phone_accordion_options {
      width: 300%;
      // background-color: #f6f9f9;
      background-color: var(--background-color);
      overflow-x: auto;
      display: flex;

      .phone_accordion_item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 32px 20px;

        .phone_accordion_item_title {
          color: #3edfcf;
          text-align: center;
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 700;
        }

        .phone_accordion_item_title_from_community {
          color: var(--text-color);
          text-align: left;
        }

        .phone_accordion_item_content_title {
          color: var(--text-color);
          text-align: center;
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          padding: 19px 0 10px;
        }

        .phone_accordion_item_content_titlefrom_community {
          text-align: left;
          padding: 8px 0 32px;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.8;
        }

        .phone_accordion_item_image_from_community {
          width: 37px;
          height: 31px;
          margin-bottom: 20px;
        }

        .phone_accordion_item_content_text {
          color: var(--text-color);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 161%;
          /* 22.54px */
          opacity: 0.8;
          width: 100%;
        }
      }
    }

    .phone_accordion_options_dot {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      .phone_accordion_options_dot_item {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #d0f7ef;
        margin: 0 5px;
      }

      .active {
        background-color: #38dac4;
      }
    }
  }
}
</style>
