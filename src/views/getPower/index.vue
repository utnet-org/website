<script setup lang="ts">
import headerImage from '@/assets/images/get_power_icon.png';
import wallet_img1 from '@/assets/images/get_power_img1.png';
import wallet_img2 from '@/assets/images/get_power_img2.png';
import wallet_img3 from '@/assets/images/get_power_img3.png';
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
    wallet_img1,
    wallet_img2,
    wallet_img3
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