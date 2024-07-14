<script setup>

import Button from '@/components/UI components/Button.vue'
import { inject } from 'vue'

const { closeReviews } = inject("Reviews")
</script>

<template>
  <div class="more_reviews_container" v-motion-fade>
    <div>
      <h3 v-motion-fade>Убедитесь в нашем профессионализме</h3>
      <span v-motion-fade>Отзывы наших клиентов на разных площадках</span>
      <div class="info-boxes" v-motion-slide-visible-once-bottom>
        <a class="info-box" href="">
          <p>
            <img src="/2gis.svg" alt="">
            2GIS
          </p>
        </a>
        <a class="info-box" href="">
          <p>
            <img src="/yandex.svg" alt="">
            Яндекс Карты
          </p>
        </a>
        <a class="info-box" href="">
          <p>
            <img src="/avito.svg" alt="">
            Авито
          </p>
        </a>
      </div>
      <Button text="Назад" @click="closeReviews" />
    </div>
  </div>
</template>

<style scoped>
  .more_reviews_container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #242424;
    z-index: 800;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
  }

  h3{
    font-size: 48px;
    font-weight: 700;
    margin:25px 0px;
  }

  span{
    font-size: 24px;
    font-weight: 500;
  }

  .info-boxes {
    display: flex;
    margin:50px auto;
    justify-content: center;
    gap: 60px;
  }

  .info-box {
    background-color: rgba(32,33,34,0.6);
    border: 1px solid #444444;
    color: white;
    padding:  0px 30px;
    max-width: 350px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    backdrop-filter: blur(50px);
    display: flex;
    transition: 0.3s;
  }

  .info-box p{
    align-items: center;
    align-content: center;
    display: flex;
    gap: 20px;
  }

  .info-box:hover{
    background-color: rgba(22, 22, 23, 0.6);
    color:  #cecece;;
  }

  button{
    padding: 25px 50px;
    border-radius: 10px;
    margin: 0 auto;
  }
</style>