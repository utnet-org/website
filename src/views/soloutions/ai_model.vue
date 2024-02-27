<script setup lang="ts">
import { ref } from "vue";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const headerTitle = "soloutions.ai_model";
const switchList = [
  "soloutions.ai_model_options1",
  "soloutions.ai_model_options2",
  "soloutions.ai_model_options3",
];
const firstLevelTitle = "soloutions.about_us_title";
const firstLevelText = "soloutions.ai_model_about_us_text";
const secondLevelTitle = "soloutions.key_features_title";
const secondLevelTextFirst = "soloutions.ai_model_key_features_text";
const secondLevelTextSecond = "";
const secondLevelTextThird = "";
const imageList = [
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/ai_img1.png",
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/ai_img2.png",
];
</script>
<template>
  <MiddleMessageIntroduce
    :headerImage="
      !theme
        ? 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/ai_icon.png'
        : 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/mp_ai_model.png'
    "
    :headerTitle="headerTitle"
    :switchList="switchList"
    :firstLevelTitle="firstLevelTitle"
    :firstLevelText="firstLevelText"
    :secondLevelTitle="secondLevelTitle"
    :secondLevelTextFirst="secondLevelTextFirst"
    :secondLevelTextSecond="secondLevelTextSecond"
    :secondLevelTextThird="secondLevelTextThird"
    :imageList="imageList"
  >
  </MiddleMessageIntroduce>
</template>
<style scoped lang="less"></style>
