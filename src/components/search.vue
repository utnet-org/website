<script setup lang="ts">
import Search from '@/assets/svgs/search.svg'
import useStore from '@/store'
import { storeToRefs } from 'pinia'

const { home } = useStore()
const { theme } = storeToRefs(home)
const props = defineProps({
  isfocus: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:isfocus'])

const handleClick = () => {
  emit('update:isfocus', !props.isfocus)
}
</script>
<template>
  <div class="ut_search">
    <img
      :style="{
        filter: theme ? 'brightness(100%)' : 'brightness(0%)'
      }"
      src="/src/assets/svgs/search.svg"
      alt=""
    />
  </div>
</template>
<style scoped lang="less">
.ut_search {
  // position: absolute;
  transform: translateX(-50%);
  width: 55px;
  height: 43px;
  flex-shrink: 0; // 不可缩小
  border-radius: 28px;
  border: 1px solid var(--search-ut_search-border);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; // 鼠标移入变成手指
}
</style>
