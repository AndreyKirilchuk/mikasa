<script setup>
  import { ref, provide } from 'vue'

  import Header from '@/components/Header.vue'
  import Banner from '@/components/Banner.vue'
  import Projects from '@/components/Projects.vue'
  import Calculate from '@/components/Calculate.vue'

  const body = ref(document.body)
  const CalculateActive = ref(false);

  const openCalculate = () => {
    body.value.classList.add('active')
    CalculateActive.value = true;
  }

  const closeCalculate = () => {
    body.value.classList.remove('active')
    CalculateActive.value = false;
  }

  provide("Calculate", {
    openCalculate,
    closeCalculate,
  });

  const items = ref(['asd', 'asd', 'y2e', 'xv'])

  const addItem = () => {
    items.value.push('ads');
  }
</script>

<template>
  <Header/>
  <Calculate v-if="CalculateActive" />

  <Banner/>
  <Projects/>

  <button @click="addItem"></button>
  <div v-auto-animate style="display:flex; gap:15px; font-size:20px; color:white;">
    <div v-for="(item, index) in items" :key="index" >
      {{ item }}
    </div>
  </div>
</template>

<style scoped>

</style>
