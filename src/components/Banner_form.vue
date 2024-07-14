<script setup>
defineProps({
  title: String,
  img: String,
})

import { ref } from 'vue'

import Button from '@/components/UI components/Button.vue'
import axios from 'axios'

const tel = ref();

const sendForm = async () => {
  tel.value = '';

  let txt = `<b> У вас новая заявка! </b> %0A %0A`;

  const message = [{
    'Номер телефона': tel.value,
  }];

  for (const item of message) {
    for (const key in item) {
      txt += `<b>${key}</b>: ${item[key]}%0A%0A`;
    }
  }

  const botId = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  try {
    const response = await axios.get(`https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${txt}`)
    console.log('Message sent',  response.data);
  } catch (error) {
    console.error('Error sending message', error);
  }
}

</script>

<template>

    <section class="banner">
      <div class="banner_content" >
        <div class="container">
          <div class="banner_info" v-motion-slide-visible-once-left>
            <h3 v-html="title" class="block_title"></h3>
            <hr>
            <span>Оставьте заявку и мы составим для вас <br> индивидуальный проект</span>
          </div>
          <form @submit.prevent="sendForm" class="form" v-motion-slide-bottom>
            <input type="text" placeholder="Номер телефона" v-model="tel" >
            <Button text="Оставить заявку" />
          </form>
          <div class="agreed">*Нажимая на кнопку вы соглашаетесь с <span>политикой конфиденциальных данных</span></div>
        </div>
      </div>

      <div class="banner_fon"> </div>
      <div class="banner-img" v-motion-fade-visible-once>
        <img :src="img" alt="House">
      </div>
    </section>


</template>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #444444;
  border-top: 1px solid #444444;
  max-height: 1001px;
  background: #202122;
}

.banner_content  {
  top: 12%;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.banner_info {
  max-width:  751px;
}

.banner_info span {
  font-size: 24px;
  color: white;
  font-weight: 500;
  margin: 0;
  line-height: 30px;
}

hr{
  margin: 25px 0px;
  border:1px solid #444444;
}

.banner-img img {
  max-width: 100%;
  height: auto;
  z-index: -100;
}

.form{
  margin-top: 120px;
  margin-bottom: 12px;
  display: flex;
  gap: 25px;
}

.agreed{
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.agreed span{
  color: #9238a8;
}

button{
  padding: 20px 30px;
  border-radius: 5px;
  font-size: 20px;
}

input{
  padding: 25px 15px;
  border-radius: 5px;
  border:1px solid rgba(255,255,255,0.7);
  background: 0;
  outline: none;
  color:white;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
}

input:hover{
  border:1px solid white;
}

input:focus{
  border: 1px solid white;
}

input::placeholder{
  color: rgba(255,255,255,0.7);
  font-size: 18px;
  font-weight: 500;
}
</style>