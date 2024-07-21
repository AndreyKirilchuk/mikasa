<script setup>
import { inject } from 'vue'

defineProps({
  ModalVideo: String
})

const { closeModal } = inject('Reviews')
</script>

<template>
  <div class="fon" @click="closeModal" v-motion-fade-visible></div>

  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="cross"
    @click="closeModal"
    v-motion-fade-visible
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.56066 0.43934C1.97487 -0.146447 1.02513 -0.146447 0.43934 0.43934C-0.146447 1.02513 -0.146447 1.97487 0.43934 2.56066L12.8787 15L0.439341 27.4393C-0.146446 28.0251 -0.146446 28.9749 0.439341 29.5607C1.02513 30.1464 1.97487 30.1464 2.56066 29.5607L15 17.1213L27.4393 29.5607C28.0251 30.1464 28.9749 30.1464 29.5607 29.5607C30.1464 28.9749 30.1464 28.0251 29.5607 27.4393L17.1213 15L29.5607 2.56066C30.1464 1.97487 30.1464 1.02513 29.5607 0.43934C28.9749 -0.146447 28.0251 -0.146447 27.4393 0.43934L15 12.8787L2.56066 0.43934Z"
      fill="white"
    />
  </svg>

  <iframe
    class="video"
    :src="ModalVideo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>

<style scoped>
.fon {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 800;
  background: rgba(1, 1, 1, 0.2);
}

.video {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 900px;
  z-index: 810;
  background: black;
}

.cross {
  right: 1%;
  top: 2%;
  position: fixed;
  z-index: 810;
  cursor: pointer;
}

.cross path {
  transition: 0.3s;
}

.cross:hover path {
  fill: #9238a8;
}
</style>
