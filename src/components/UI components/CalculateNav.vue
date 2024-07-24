<script setup>
import Button from '@/components/UI components/Button.vue'
import { inject } from 'vue'

const backProgress = inject('backProgress')

defineProps({
  text: String
})
</script>

<template>
  <div class="buttons">
    <button class="back" type="button" @click="backProgress">
      <svg
        width="30"
        height="23"
        viewBox="0 0 30 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 11.2264L11.5 1M1.5 11.2264L11.5 21.4528M1.5 11.2264L29 11.2264"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <Button :text="text" class="next" />
  </div>
</template>

<style scoped>
.buttons {
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 25px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.back {
  background-color: rgba(32, 33, 34, 0.6);
  border: 1px solid #444444;
  width: 67px;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  backdrop-filter: blur(50px);
  transition: 0.3s;
}

.back svg path {
  transition: 0.3s;
}

.back:hover {
  background-color: rgba(22, 22, 23, 0.6);
}

.back:hover svg path {
  stroke: #cecece;
}

@media(max-width: 1500px){
  .next{
    padding:15px 25px;
  }
}

</style>
