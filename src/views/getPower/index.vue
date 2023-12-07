<script setup lang="ts">
import { ref } from 'vue';
const headerTitle = 'soloutions.core_system';
const switchList = ['soloutions.computing_power_rental_platform', 'soloutions.score', 'soloutions.diversified_computing_power', 'soloutions.customized_configuration'];
const firstLevelTitle = 'soloutions.about_us_title';
const firstLevelText = 'soloutions.core_system_about_us_text';
const secondLevelTitle = 'soloutions.key_features_title';
const secondLevelTextFirst = 'soloutions.core_system_key_features_text';
const secondLevelTextSecond = "";
const secondLevelTextThird = "";
const imageList = [
   'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/get_power_img1.png',
   'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/get_power_img2.png',
   'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/get_power_img3.png'
]
</script>
<template>
    <MiddleMessageIntroduce headerImage="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/get_power_icon.png" :headerTitle="headerTitle" :switchList="switchList"
        :firstLevelTitle="firstLevelTitle" :firstLevelText="firstLevelText" :secondLevelTitle="secondLevelTitle"
        :secondLevelTextFirst="secondLevelTextFirst" :secondLevelTextSecond="secondLevelTextSecond"
        :secondLevelTextThird="secondLevelTextThird" :imageList="imageList">
    </MiddleMessageIntroduce>
</template>
<style scoped lang="less"></style>