<script setup>
  defineProps({
    text: String,
    arrow: Boolean
  })
</script>

<template>
  <button>
    {{ text }} <img src="/arrow.svg" alt="" v-if="arrow" width="12px">
  </button>
</template>

<style scoped>
  button{
    display: flex;
    gap:15px;
    border-radius: 5px;
    background:#9238A8;
    padding: 12px 30px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: white;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
    align-items: center;
  }

  button img{
    transition: 0.3s;
  }

  button:hover{
    background: #7b308d;
  }

  button:hover img{
    transform: translateX(50%);
  }
</style>