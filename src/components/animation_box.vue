<script lang="ts" setup>
</script>
<template>
  <div class="gradient_border">
    <div class="gradient_border_body">
      <div class="gradient_border_body_abs"></div>
    </div>
    <div
      style="position: absolute; top: 1px; bottom: 1px; left: 1px; right: 1px"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
@property --radius {
  syntax: "<angle>";
  initial-value: 114deg;
  inherits: false;
}

@keyframes identifier {
  0% {
    --radius: 114deg;
  }
  100% {
    --radius: 474deg;
  }
}

.gradient_border {
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  .gradient_border_body {
    will-change: transform;
    width: 100%;
    height: 100%;
    border-radius: initial;
    padding: 0.5px;
    background: conic-gradient(
      from var(--radius),
      #00f7e4 0deg,
      #fa00ff 60deg 100deg,
      #ffffff 120deg,
      #ca00c1 158deg 190deg,
      #ffffff 294deg 299deg,
      #fa00ff 320deg,
      #00f7e4 350.5deg 360deg
    );
    // animation: 3s linear 1s infinite identifier;
  }
  .gradient_border_body_abs {
    flex-shrink: 0;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border-radius: 11px;
    background: #141817;
  }
  &:hover {
    .gradient_border_body {
      animation: 3s linear 1s infinite identifier;
    }
  }
}
</style>