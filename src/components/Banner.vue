<script setup>
import { inject } from 'vue'

import Button from '@/components/UI components/Button.vue'

const { openCalculate } = inject('Calculate')
</script>

<template>
  <main>
    <section class="banner">
      <div class="banner_content">
        <div class="container">
          <div class="banner_info" v-motion-slide-visible-once-left>
            <h2>
              Строим дома
              <p>для комфортной<br> жизни</p>
            </h2>
            <div>Строительство загородной<br class="mobile_br"> недвижимости в Уфе</div>
            <Button text="Рассчитать стоимость" :arrow="true" @click="openCalculate" />
          </div>
          <div class="info-boxes" v-motion-slide-bottom>
            <div class="info-box">
              <p>От индивидуального проекта до дома «под ключ» за 120 дней</p>
            </div>
            <div class="info-box">
              <p>Стоимость не меняется в процессе строительства</p>
            </div>
            <div class="info-box">
              <p>Расширенная гарантия – 5 лет, прописана в договоре</p>
            </div>
          </div>
        </div>
      </div>

      <div class="banner_fon"></div>
      <div class="banner-img" v-motion-fade-visible-once>
        <img src="/house.png" alt="house" />

        <img src="/house_mobile.png" alt="house">
      </div>


    </section>

    <div class="container">
      <Button text="Расчитать стоимость" class="button-mobile"/>
    </div>
  </main>
</template>

<style scoped>

.button-mobile{
  display:none;
}

.banner {
  display: flex;
  justify-content: space-between;
  position: relative;
  max-height: 1001px;
  border-bottom: 1px solid #444444;
}

.banner_content {
  top: 20%;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.banner_info {
  line-height: 80px;
  max-width: 751px;
}

.banner_info h2 {
  color: #9238a8;
  font-size: 78px;
  margin: 0;
  font-weight: 800;
}

.banner_info p {
  margin: 0;
  color: white;
  font-weight: 800;
}

.banner_info div {
  font-size: 28px;
  color: white;
  font-weight: 500;
  margin: 30px 0px;
  line-height: 30px;
}

button {
  padding: 30px 40px;
  font-size: 28px;
  border-radius: 10px;
}

.info-boxes {
  display: flex;
  margin-top: 40px;
  gap: 60px;
}

.info-box {
  background-color: rgba(32, 33, 34, 0.6);
  border: 1px solid #444444;
  color: white;
  padding: 0px 30px;
  max-width: 350px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  align-items: center;
  align-content: center;
  backdrop-filter: blur(50px);
}

.banner-img{
  height: fit-content;
}

.banner-img img {
  max-width: 100%;
  height: auto;
  z-index: -100;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.banner-img img:last-child{
  display: none;
}


@media(max-width: 1600px){
  .banner_info h2{
    font-size: 56px;
    line-height: 60px;
  }
  .banner_info div {
    font-size: 24px;
    max-width: 450px;
  }
  button{
    font-size: 24px;
    padding: 25px 30px;
  }
  .info-box{
    font-size: 16px;
    padding:1px 15px;
    max-width: 270px;
  }
  .info-boxes{
    gap: 50px;
  }
  .banner-img{
    width: 850px;
  }
}

@media(max-width: 1440px){
  .banner-img{
    width: 800px;
  }
}

@media(max-width: 1300px){
  .info-boxes{
    gap: 25px;
  }

}

@media(max-width: 1200px){
  .banner_info h2{
    font-size: 40px;
    line-height: 46px;
  }
  .banner_info div {
    font-size: 24px;
    margin:20px 0px;
  }
  button{
    font-size: 18px;
    padding: 23px 27px;
  }
  .info-box{
    font-size: 14px;
    padding:1px 10px;
    max-width: 230px;
  }
  .info-boxes{
    gap: 20px;
  }
  .banner-img{
    width: 656px;
  }
  .banner_content{
    top: 15%;
  }
}

@media(max-width: 1024px){
  .banner_info div{
    font-size: 18px;
    line-height: 21px;
    margin-top: 10px;
  }

  button{
    font-size: 18px;
    padding:20px;
  }
}

@media(max-width: 850px){
  .info-boxes div:nth-child(2){
    display: none;
  }

  .info-boxes{
    margin-top: 15px;
  }

  .banner-img img{
    width: 655px;
    float: right;
    height: 500px;
  }
}

@media(max-width: 650px){
  .banner-img img:first-child{
    display:none
  }

  .banner-img img:last-child{
    display: block;
  }

  h2{
    color: white !important;
  }

  .banner-img img{
    width: 100%;
    height: 100%;
  }

  .banner{
    height: auto;
  }

  .button-mobile{
    display:block;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
  }

  .banner_info button{
    display:none;
  }

  .banner{
    border:inherit;
  }

  .info-boxes{
    margin-top: 60px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
  }

  .info-box{
    padding: 10px;
    max-width: 100%;
  }
}

@media(max-width: 605px){
  .info-box{
    padding: 8px;
    font-size: 12px;
  }
}

@media(max-width: 540px){
  .info-box{
    font-size: 10px;
    padding:5px 10px;
  }
  .info-boxes{
    margin-top: 40px;
  }

}

@media(max-width: 480px){
  .info-boxes{
    margin-top: 20px;
  }
  .info-box{
    font-size: 10px;
    padding:8px 10px;
  }
  .banner_info h2{
    font-size: 30px;
    line-height: 28px;
  }

  .banner_content{
    top: 20%;
  }

  .banner_info div{
    font-size: 16px;
    color:rgba(255,255,255,0.7)
  }
}


</style>
