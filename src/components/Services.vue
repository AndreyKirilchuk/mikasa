<script setup>
import { reactive } from 'vue'

const services = reactive([
  { name: `Строительство <br>дома`, img: '/home_build.png' },
  { name: 'Механизированная штукатурка', img: '/mechanized_plastering.png' },
  { name: `Полусухая<br> стяжка`, img: '/semi_dry_screed.png' },
  { name: 'Электромонтаж', img: '/electrical_installation.png' },
  { name: 'Системы отопления', img: '/heating_systems.png' },
  { name: 'Водоснабжение', img: '/water_supply.png' }
])

import About from '@/components/About.vue'
</script>

<template>
  <div class="container">
    <About />

    <div class="link_block">
      <div id="services"></div>
    </div>

    <h2 class="block_title" v-motion-slide-visible-once-left>Комплекс услуг</h2>
    <div class="services_container">
      <a
        :style="{ background: `url(${service.img})` }"
        class="service"
        v-for="service in services"
        href="#form"
        v-motion-slide-visible-once-bottom
      >
        <div class="service_inner">
          <div v-html="service.name"></div>

          <img src="/arrow.svg" alt="" />
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.services_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 50px 100px;
  position: relative;
  border-radius: 19px;
}

.service {
  border-radius: 19px;
  width: 450px;
  height: 260px;
  transition: 0.3s;
  position: relative;
}

@media(max-width: 1600px){
  .services_container{
    padding:35px 0px;
    gap: 30px;
  }
  .service{
    width: 100%;
  }
}

@media(max-width: 1400px){
  .services_container{
    gap: 20px;
  }
}

.service:hover {
  background: url('/violet_block.png') !important;
}

img {
  display: none;
  transition: 0.3s;
}

.service:hover img {
  display: block;
}

.service_inner {
  width: 100%;
  position: absolute;
  padding: 0px 40px;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  line-height: 26px;
}
</style>
