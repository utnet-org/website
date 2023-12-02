<script setup lang="ts">
import headerImage from '@/assets/images/mining_tool_icon.png';
import wallet_img1 from '@/assets/images/mining_tool_img1.png';
import wallet_img2 from '@/assets/images/mining_tool_img2.png';
import { ref } from 'vue';
const headerTitle = 'soloutions.mining_tools';
const switchList = ['soloutions.mining_tools_options1', 'soloutions.mining_tools_options2', 'soloutions.mining_tools_options3'];
const firstLevelTitle = 'soloutions.about_us_title';
const firstLevelText = 'soloutions.mining_tools_about_us_text';
const secondLevelTitle = 'soloutions.key_features_title';
const secondLevelTextFirst = 'soloutions.mining_tools_key_features_text';
const secondLevelTextSecond = '';
const secondLevelTextThird = "";
const imageList = [
    wallet_img1,
    wallet_img2
]
</script>
<template>
    <MiddleMessageIntroduce :headerImage="headerImage" :headerTitle="headerTitle" :switchList="switchList"
        :firstLevelTitle="firstLevelTitle" :firstLevelText="firstLevelText" :secondLevelTitle="secondLevelTitle"
        :secondLevelTextFirst="secondLevelTextFirst" :secondLevelTextSecond="secondLevelTextSecond"
        :secondLevelTextThird="secondLevelTextThird" :imageList="imageList">
    </MiddleMessageIntroduce>
</template>
<style scoped lang="less"></style>