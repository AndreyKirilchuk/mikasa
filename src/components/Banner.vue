<script setup>
  import { inject } from 'vue'

  import Button from '@/components/UI components/Button.vue'

  const { openCalculate } = inject('Calculate')
</script>

<template>
  <main>
    <section class="banner">
      <div class="banner_content" >
        <div class="container">
          <div class="banner_info" v-motion-slide-visible-once-left>
            <h2>Строим дома <p>для комфортной жизни</p></h2>
            <span>Строительство загородной недвижимости в Уфе</span>
            <Button text="Рассчитать стоимость" :arrow="true" @click="openCalculate"/>
          </div>
          <div class="info-boxes" v-motion-slide-bottom>
            <div class="info-box" >
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

      <div class="banner_fon"> </div>
      <div class="banner-img" v-motion-fade-visible-once>
        <img src="/house.png" alt="House">
      </div>
    </section>
  </main>


</template>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #444444;
  max-height: 1001px;
}

.banner_content  {
  top: 20%;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.banner_info{
  line-height: 80px;
  max-width:  751px;
}

.banner_info h2 {
  color: #9238A8;
  font-size:78px;
  margin: 0;
  font-weight: 800;
}

.banner_info p{
  margin: 0;
  color: white;
  font-weight: 800;
}

.banner_info span{
  font-size: 28px;
  color: white;
  font-weight: 500;
  margin:0;
}

button{
  padding:30px 40px;
  font-size: 28px;
  border-radius: 10px;
}

.info-boxes {
  display: flex;
  margin-top: 40px;
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
  align-items: center;
  align-content: center;
  backdrop-filter: blur(50px);
}

.banner-img img {
  max-width: 100%;
  height: auto;
  z-index: -100;
}
</style>