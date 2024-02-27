<script setup lang="ts">
import { ref } from "vue";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const headerTitle = "soloutions.utility_wallet";
const switchList = [
  "soloutions.asset_management",
  "soloutions.multifunctional_wallet",
  "soloutions.dapp_interaction",
];
const firstLevelTitle = "soloutions.about_us_title";
const firstLevelText = "soloutions.about_us_text";
const secondLevelTitle = "soloutions.key_features_title";
const secondLevelTextFirst = "soloutions.key_features_text";
const secondLevelTextSecond = "";
const secondLevelTextThird = "";
const imageList = [
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/wallet_img1.png",
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/wallet_img2.png",
  "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/wallet_img3.png",
];
</script>
<template>
  <MiddleMessageIntroduce
    :headerImage="
      !theme
        ? 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/wallet_icon.png'
        : 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/mp_utility_wallet.png'
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
