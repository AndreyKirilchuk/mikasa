<script setup>
  defineProps({
    isLoading: Boolean,
  })
</script>

<template>
  <div class="loading-wrapper" :class="{active: isLoading}">

      <img src="/logo_loading.svg" alt="logo_loading" width="250px" class="logo_loading"  v-motion-slide-visible-once-bottom :delay="300" :duration="400">

      <div class="circle_container" v-motion-slide-visible-once-bottom :delay="500" :duration="400">
        <svg class="circle-loader" viewBox="25 25 50 50">
          <circle class="circle" cx="50" cy="50" r="20"></circle>
        </svg>

        <svg class="circle-loader" viewBox="25 25 50 50">
          <circle class="circle_before" cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
  </div>
</template>

<style scoped>
.loading-wrapper.active{
  max-height: 100vh;
}

.loading-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #242424;
  max-height: 0;
  z-index: 9999;
  overflow: hidden;
  transition: all 0.7s ease-in-out;
}

.logo_loading{
  position: absolute;
  top: 250px;
}

.circle_container{
  position: relative;
  width: 50px;
  height: 100vh;
}


.circle-loader {
  position: absolute;
  bottom: 100px;
  width: 50px;
  height: 50px;
  animation: scaleAnimation 0.5s linear forwards;
  animation-delay: 3.2s;
}

.circle-loader:nth-child(1) {
  z-index: 999;
}

.circle {
  position: absolute;
  fill: none;
  stroke: #9238a8;
  stroke-width: 4;
  stroke-dasharray: 0, 150;
  animation: fillAnimation 2.7s linear forwards;
  animation-delay: 0.9s;
}

.circle_before{
  fill: none;
  stroke: #444444;
  stroke-width: 4;
}

@keyframes fillAnimation {
  0% {
    stroke-dasharray: 0, 150;
  }
  100% {
    stroke-dasharray: 150, 0;
  }
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@media(max-width: 1024px){
  .logo_loading{
    top: 150px;
  }
}

@media(max-width: 768px){
  .logo_loading{
    width: 180px;
    top: 100px;
  }

  .circle_container{
    width: 40px;
  }

  .circle-loader{
    bottom: 120px;
    width: 40px;
    height: 40px;
  }
}

</style>