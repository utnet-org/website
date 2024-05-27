<template>
  <div class="chartNum">
    <div class="box-item">
      <li
        :class="{
          'number-item': !isNaN(Number(item)),
          'mark-item': isNaN(Number(item))
        }"
        v-for="(item, index) in orderNum"
        :key="index"
      >
        <span v-if="!isNaN(Number(item))">
          <i
            ref="numberItem"
            :style="{ transform: 'translateY(-' + Number(item) * 10 + '%)' }"
          >
            0123456789
          </i>
        </span>
        <span class="comma" v-else>{{ item }}</span>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 初始化 orderNum 数组，用于显示数字和逗号
const orderNum = ref<string[]>([
  '0',
  ',',
  '0',
  '0',
  '0',
  ',',
  '0',
  '0',
  '0',
  ',',
  '0',
  '0',
  '0'
])

// 定义当前数字和目标数字
const currentNumber = ref<number>(10000000000) // 当前数字
const targetNumber = ref<number>(500000000) // 目标数字

// 动画持续时间
const duration = ref<number>(30000)
let startTime: number | null = null

// 更新 orderNum 显示的函数
const updateNumberDisplay = (num: number) => {
  // 将数字转换为字符串并填充到11位
  const numStr = num.toString().padStart(11, '0')
  // 更新 orderNum 数组，包含逗号的位置
  orderNum.value = [
    numStr[5],
    numStr[2],
    ',',

    numStr[4],
    numStr[1],
    numStr[6],
    ',',

    numStr[3],
    numStr[7],
    numStr[0],
    ',',

    numStr[9],
    numStr[10],
    numStr[8]
  ]
}

// 动画函数
const animate = () => {
  const step = (timestamp: number) => {
    // 初始化开始时间
    if (!startTime) startTime = timestamp
    // 计算动画进度
    const progress = timestamp - startTime
    // 如果动画完成
    if (progress >= duration.value) {
      currentNumber.value = targetNumber.value
      updateNumberDisplay(currentNumber.value)
    } else {
      // 计算当前数字
      currentNumber.value = Math.floor(
        currentNumber.value -
          ((currentNumber.value - targetNumber.value) * progress) /
            duration.value
      )
      // 更新显示
      updateNumberDisplay(currentNumber.value)
      // 继续动画
      requestAnimationFrame(step)
    }
  }
  // 开始动画
  requestAnimationFrame(step)
}

// 组件挂载时开始动画
onMounted(() => {
  animate()
})
</script>

<style scoped lang="less">
.box-item {
  position: relative;
  margin-top: 100px;
  height: 90px;
  font-size: 54px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  color: #258aff;
  writing-mode: vertical-lr;
  text-orientation: upright;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.mark-item {
  width: 10px;
  height: 10px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 34px;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}

.number-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 30px;
  list-style: none;
  // margin-right: 5px;
  background: #fff;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    writing-mode: tb-rl; // writing-mode 改变文字排列方向
    text-orientation: upright; // 文字方向
    overflow: hidden;
    & > i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: normal;
      position: absolute;
      // top: 10px;
      // left: 50%;
      transform: translateX(-50%);
      transition: transform 0.1s linear;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>
