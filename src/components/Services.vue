<script setup>
import { reactive } from 'vue'

const services = reactive([
  { name: `Строительство <br>дома`, img: '/home_build.png' },
  { name: `Механизированная<br> штукатурка`, img: '/mechanized_plastering.png' },
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
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.service:hover {
  background: url('/violet_block.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
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

@media(max-width: 1700px){
  .services_container{
    padding:50px;
  }
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

@media(max-width: 1530px){
  .services_container{
    gap: 20px;
  }
  .service{
    height: 220px;
  }
  .service_inner{
    font-size: 20px;
    bottom:20px;
    padding: 0px 20px;
  }
}

@media(max-width: 1200px){
  .service{
    height: 180px;
  }
}

@media(max-width: 1100px){
  .service_inner{
    font-size: 16px;
    bottom:20px;
  }
  .service{
    height: 164px;
  }
  .service_inner img{
    width: 12px;
  }
}



@media(max-width: 1000px){
  .services_container{
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
  }
}

@media(max-width: 600px){
  .services_container{
    grid-template-columns: repeat(1,1fr);
    gap: 15px;
  }
}

@media(max-width: 480px){
  .service{
    border-radius: 8px;
    height: 120px;
    gap: 10px;
  }
}
</style>
