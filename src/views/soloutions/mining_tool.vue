<script setup lang="ts">
import { ref } from "vue";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const headerTitle = "soloutions.mining_tools";
const switchList = [
  "soloutions.mining_tools_options1",
  "soloutions.mining_tools_options2",
  "soloutions.mining_tools_options3",
];
const firstLevelTitle = "soloutions.about_us_title";
const firstLevelText = "soloutions.mining_tools_about_us_text";
const secondLevelTitle = "soloutions.key_features_title";
const secondLevelTextFirst = "soloutions.mining_tools_key_features_text";
const secondLevelTextSecond = "";
const secondLevelTextThird = "";
const imageList = [
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/56788566342323.png",
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/1236545324564.png",
];
</script>
<template>
  <MiddleMessageIntroduce :headerImage="!theme
    ? 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/mining_tool_icon.png'
    : 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/mp_mining_tool.png'
    " :headerTitle="headerTitle" :switchList="switchList" :firstLevelTitle="firstLevelTitle"
    :firstLevelText="firstLevelText" :secondLevelTitle="secondLevelTitle" :secondLevelTextFirst="secondLevelTextFirst"
    :secondLevelTextSecond="secondLevelTextSecond" :secondLevelTextThird="secondLevelTextThird" :imageList="imageList"
    :canUse="true" linkUrl="https://console.utlab.io/openai/">
  </MiddleMessageIntroduce>
</template>
<style scoped lang="less"></style>
