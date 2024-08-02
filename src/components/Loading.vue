<script setup>
  defineProps({
    isLoading: Boolean,
  })
</script>

<template>
  <div class="loading-wrapper" :class="{active: isLoading}">
    <svg class="circle-loader" viewBox="25 25 50 50" v-motion-slide-visible-once-bottom v-motion-duration="2100">
      <circle class="circle" cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<style scoped>
.loading-wrapper.active{
  max-height: 100vh;
}

.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242424;
  max-height: 0;
  z-index: 9999;
  overflow: hidden;
  transition: all 0.7s ease-in-out;
}

.circle-loader {
  width: 100px;
  height: 100px;
}

.circle {
  fill: none;
  stroke: #9238a8;
  stroke-width: 3;
  stroke-dasharray: 0, 150;
  animation: fillAnimation 3.5s linear;
}

@keyframes fillAnimation {
  0% {
    stroke-dasharray: 0, 150;
  }
  100% {
    stroke-dasharray: 150, 0;
  }
}
</style>