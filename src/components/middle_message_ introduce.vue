<script setup lang="ts">
import { Url } from "url";
import { ref } from "vue";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const props = defineProps({
  headerImage: String,
  headerTitle: String,
  switchList: Array,
  firstLevelTitle: String,
  firstLevelText: String,
  secondLevelTitle: String,
  secondLevelTextFirst: String,
  secondLevelTextSecond: String,
  secondLevelTextThird: String,
  imageList: Array<string>,
});
// const switchList = [
//     'COIWN',
//     'COIWN',
//     'COIWN',
//     'COIWN'
// ]
const switchId = ref(0);
const changeSwitchId = (id: number) => {
  switchId.value = id;
};
</script>
<template>
  <div class="container">
    <div
      :style="{
        // background: theme ? 'rgba(21, 28, 26, 0.90)' : '',
      }"
    >
      <div
        class="header"
        :style="{
          background: theme
            ? ''
            : 'url(' +
              'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/components_middle_background.png' +
              ')' +
              ' no-repeat',
          'background-size': theme ? '' : 'cover',
        }"
      >
        <div class="header_image">
          <img :src="headerImage" alt="" />
          <div class="header_title">{{ $t(headerTitle as string) }}</div>
          <div class="header_switch">
            <!-- @click="changeSwitchId(index)" -->
            <div
              v-for="(item, index) in switchList"
              :key="index"
              :class="switchId == index ? 'active' : ''"
            >
              {{ $t(item as string) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="first_level_message">
      <div class="first_level_title">{{ $t(firstLevelTitle as string) }}</div>
      <div class="first_level_text">{{ $t(firstLevelText as string) }}</div>
    </div>
    <div class="second_level_message">
      <div class="second_level_title">{{ $t(secondLevelTitle as string) }}</div>
      <div class="second_level_text">
        <div>{{ $t(secondLevelTextFirst as string) }}</div>
        <div>{{ $t(secondLevelTextSecond as string) }}</div>
        <div>{{ $t(secondLevelTextThird as string) }}</div>
      </div>
    </div>
    <div class="images_list">
      <div
        v-for="(item, index) in imageList"
        :key="index"
        :style="`background: url(${item}) no-repeat;background-size: cover;`"
      >
        {{ $t("soloutions.ongoing") }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  // background: linear-gradient(
  //   250deg,
  //   #cdeaf1 5.3%,
  //   #fafbfb 43.99%,
  //   #def2f3 100.09%
  // );

  padding-top: 69px;
  .header {
    width: 100%;
    height: 479px;
    background: url("@/assets/images/components_middle_background1.png")
      no-repeat;
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .header_image {
      img {
        width: 120px;
        height: 120px;
        margin-bottom: 42px;
      }

      .header_title {
        color: var(--where-text);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 30px;
        font-weight: 700;
      }

      .header_switch {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 29px 0 55px;

        div {
          padding: 0 18px;
          height: 27px;
          line-height: 27px;
          border-radius: 20px;
          margin: 0 4px;
          border: 1px solid #3edfcf;
          // cursor: pointer;
          color: var(--where-text);
          &:hover {
            background: #3edfcf;
            color: var(--swiper-prev-new-disabled-bg);
          }
        }

        .active {
          // background: #3EDFCF;
        }
      }
    }
  }

  .first_level_message {
    height: 247px;
    padding: 0 11.5%;
    background-color: var(--middle_message_introduce-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .first_level_title {
      color: var(--where-text);
      font-family: Lantinghei SC;
      font-size: 22px;
      font-weight: 700;
    }

    .first_level_text {
      color: var(--where-text);
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 161%;
      margin-top: 25px;
    }
  }

  .second_level_message {
    padding: 15px 11.5% 0px;
    background-color: var(--middle_message_introduce-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .second_level_title {
      color: var(--where-text);
      font-family: Lantinghei SC;
      font-size: 22px;
      font-weight: 700;
    }

    .second_level_text {
      color: var(--where-text);
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 161%;
      margin-top: 5px;

      div {
        margin-top: 15px;
      }
    }
  }

  .images_list {
    background-color: var(--middle_message_introduce-bg);
    display: flex;
    justify-content: flex-start;
    padding: 40px 11% 100px;

    div {
      width: 440px;
      height: 275px;
      border-radius: 8px;
      margin-right: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white, #fff);
      font-family: Lantinghei SC;
      font-size: 22px;
      font-weight: 400;
    }
  }
}
</style>
