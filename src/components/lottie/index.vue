<script setup lang='ts'>
import lottie from "lottie-web";
import animationData from "@/assets/lottie/Utility-Loading.json"
import { nextTick } from "vue";
defineProps({
    size: {
        type: String,
        default: "200",
    },
})
function svgFun() {
    let params = {
        container: document.getElementById("lottie"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    let anim;
    anim = lottie.loadAnimation(params as any);
}
nextTick(() => {
    svgFun()
})
</script>
<template>
    <div :style="{ width: size + 'px', height: size + 'px' }" id="lottie"></div>
</template>
<style scoped lang='less'></style>