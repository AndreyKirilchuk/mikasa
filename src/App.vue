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


</script>

<template>
  <Header/>
  <Calculate v-if="CalculateActive" />

  <Banner/>
  <Projects/>
</template>

<style scoped>

</style>
