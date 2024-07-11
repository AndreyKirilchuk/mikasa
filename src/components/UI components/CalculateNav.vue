<script setup>

import Button from '@/components/UI components/Button.vue'
import { inject } from 'vue'

defineProps({
  click: Function,
})

const { closeCalculate } = inject("Calculate");
const backProgress  = inject("backProgress");

</script>

<template>
  <div class="buttons">
    <button class="back" type="button" @click="click">
      <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 11.2264L11.5 1M1.5 11.2264L11.5 21.4528M1.5 11.2264L29 11.2264" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <Button text="Далее"/>
  </div>
</template>

<style scoped>
  .buttons{
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 25px;
  }

  .back{
    background-color: rgba(32,33,34,0.6);
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

  .back svg path{
    transition: 0.3s;
  }

  .back:hover svg path{
    stroke: #9238A8;
  }

</style>