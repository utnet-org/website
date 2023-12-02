<script setup lang="ts">
import headerImage from '@/assets/images/ai_icon.png';
import wallet_img1 from '@/assets/images/ai_img1.png';
import wallet_img2 from '@/assets/images/ai_img2.png';
import { ref } from 'vue';
const headerTitle = 'soloutions.ai_model';
const switchList = ['soloutions.ai_model_options1', 'soloutions.ai_model_options2', 'soloutions.ai_model_options3'];
const firstLevelTitle = 'soloutions.about_us_title';
const firstLevelText = 'soloutions.ai_model_about_us_text';
const secondLevelTitle = 'soloutions.key_features_title';
const secondLevelTextFirst = 'soloutions.ai_model_key_features_text';
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