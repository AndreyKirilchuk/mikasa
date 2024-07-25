<script setup>
defineProps({
  title: String,
  img: String
})

import { ref } from 'vue'

import Button from '@/components/UI components/Button.vue'
import axios from 'axios'

const number = ref('')
const error_number = ref(false)

const applyMask = () => {
  let rawValue = number.value.replace(/[^0-9]/g, '')

  if (rawValue.startsWith('7')) {
    rawValue = rawValue.slice(1)
  }

  let maskedValue = '+7 (' + rawValue.substring(0, 3)

  if (rawValue.length === 0) {
    maskedValue = ''
  }

  if (rawValue.length > 3) {
    maskedValue += ') '
    maskedValue += rawValue.substring(3, 6)
  }

  if (rawValue.length > 6) {
    maskedValue += '-' + rawValue.substring(6, 8)
  }

  if (rawValue.length > 8) {
    maskedValue += '-' + rawValue.substring(8, 10)
  }

  number.value = maskedValue

  if (number.value.length === 0) {
    error_number.value = true
  } else {
    error_number.value = false
  }
}

const sendForm = async () => {
  error_number.value = false

  if (number.value.length === 0) {
    setTimeout(() => {
      error_number.value = true
    }, 10)
    return
  }

  error_number.value = false

  let txt = `<b> У вас новая заявка! </b> %0A %0A`

  const message = [
    {
      'Номер телефона': number.value
    }
  ]

  for (const item of message) {
    for (const key in item) {
      txt += `<b>${key}</b>: ${item[key]}%0A%0A`
    }
  }

  const botId = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${txt}`
    )
    console.log('Message sent', response.data)
    number.value = ''
  } catch (error) {
    console.error('Error sending message', error)
  }
}
</script>

<template>
  <section class="banner">
    <div class="banner_content">
      <div class="container">
        <div class="banner_info" v-motion-slide-visible-once-left>
          <h3 v-html="title" class="block_title"></h3>
          <hr />
          <span
            >Оставьте заявку и мы составим для вас <br/>
            индивидуальный проект</span
          >
        </div>
        <form @submit.prevent="sendForm" class="form" v-motion-slide-visible-once-bottom>
          <input
            type="text"
            placeholder="Номер телефона"
            v-model="number"
            @input="applyMask"
            :class="{ error: error_number }"
          />
          <Button text="Оставить заявку" />
        </form>
        <div class="agreed" v-motion-slide-visible-once-bottom>
          *Нажимая на кнопку вы соглашаетесь с <span>политикой <br class="mobile_br"> конфиденциальных данных</span>
        </div>
      </div>
    </div>

    <div class="banner_fon"></div>
    <div class="banner-img" v-motion-fade-visible-once>
      <img :src="img" alt="House" />
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

.banner_content {
  top: 12%;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.banner_info {
  max-width: 751px;
}

.banner_info span {
  font-size: 24px;
  color: white;
  font-weight: 500;
  margin: 0;
  line-height: 30px;
}

hr {
  margin: 25px 0px;
  border: 1px solid #444444;
}

.banner-img img {
  max-width: 100%;
  height: auto;
  z-index: -100;
}

.form {
  margin-top: 120px;
  margin-bottom: 12px;
  display: flex;
  gap: 25px;
}

.agreed {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.agreed span {
  color: #9238a8;
}

button {
  padding: 20px 30px;
  border-radius: 5px;
  font-size: 20px;
}

input {
  padding: 25px 30px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: 0;
  outline: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
  box-sizing:border-box;
  max-width: 260px;
}

input:hover {
  border: 1px solid white;
}

input:focus {
  border: 1px solid white;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 500;
}

.error {
  border: 1px solid #cc1616 !important;
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateY(2px);
  }
  25% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(3px);
  }
  75% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

@media(max-width: 1700px){
  .banner-img img{
    max-height: 530px;
  }
  .banner_info{
    width: 690px;
  }
  .form{
    margin-top: 100px;
  }
}

@media(max-width: 1600px){
  .banner_info{
    width: 580px;
  }
  button{
    padding:10px 30px !important;
  }
  .form{
    margin-top: 80px;
  }
}

@media(max-width: 1500px){
  .banner_info span{
    font-size: 20px;
  }
  .banner_info{
    width: 591px;
  }
}
</style>
