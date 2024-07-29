<script setup>
defineProps({
  title: String,
  img: String,
  img_mobile:String
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
          *Нажимая на кнопку вы соглашаетесь с <br class="mini_br"> <span>политикой <br class="mobile_br"> конфиденциальных данных</span>
        </div>
      </div>
    </div>

    <div class="banner_fon"></div>
    <div class="banner-img" v-motion-fade-visible-once>
      <img :src="img" alt="house" />

      <img :src="img_mobile" alt="house">
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

.banner-img{
  overflow: hidden;
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
  padding: 20px 30px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: 0;
  outline: none;
  color: white;
  font-size: 20px;
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
  font-size: 20px;
  font-weight: 500;
}

.error {
  border: 1px solid #cc1616 !important;
  animation: shake 0.5s;
}

.mini_br{
  display: none;
}

.banner-img img:last-child{
  display:none;
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
    line-height: 25px;
  }
  .banner_info{
    width: 630px;
  }
  .banner-img img{
    max-height: 540px;
    max-width: 750px;
  }
  input{
    font-size: 18px;
    padding:15px 25px;
  }
  input::placeholder {
    font-size: 18px;
  }
  button{
    font-size: 18px;
    padding:15px 25px;
  }
  .agreed{
    font-size: 14px;
  }
  .banner_content{
    top: 40px;
  }
}

@media(max-width: 1440px) {
  .banner_info {
    width: 520px;
  }

}

@media(max-width: 1350px){
  .banner_content{
    top: 30px;
  }
  .banner-img img {
    max-width: 700px;
    max-height: 480px;
  }
  .banner_info {
    width: 550px;
  }
  hr{
    margin:20px 0px
  }
  .banner_info span{
    font-size: 18px;
    line-height: 20px;
  }
  input{
    font-size: 16px;
    padding: 20px 25px;
  }
}

@media(max-width: 1300px){
  .banner_content{
    top: 20px;
  }
  .banner_info{
    width: 505px;
  }
  .banner-img img {
    max-width: 650px;
    max-height: 480px;
  }
}

@media(max-width:1200px){
  .banner_info span{
    font-size:16px;
  }
  .banner-img img {
    max-width: 660px;
    max-height: 5300px;
  }
  .mobile_br{
    display: none;
  }
  .mini_br{
    display: block;
  }
}

@media(max-width: 1024px){
  .banner_info{
    max-width: 350px;
  }

  .form{
    margin-top: 30px;
    flex-direction: column;
    gap: 15px;
  }

  button{
    max-width: 260px;
    padding:19px 25px !important;
    text-align: center;
    justify-content: center;
  }

  input::placeholder {
    text-align: center;
  }

  input{
    padding: 20px;
  }
}

@media(max-width: 660px){
  .banner-img img{
    max-width: 100%;
  }

  .banner-img{
    max-height: 450px;
  }

  .banner-img img:first-child{
    display:none;
  }

  .banner-img img:last-child{
    display:block;
  }

  hr{
    border-color: rgba(255,255,255,0.7);
  }
}

@media (max-width: 480px) {
  .block_title{
    font-size: 24px;
  }

  hr{
    width: 280px;
    margin:15px 0px;
  }

  input{
    padding: 12px;
    width: 150px;
    font-size: 14px;
  }

  button{
    width: 150px;
    padding: 12px !important;
    font-size: 14px;
  }

  .agreed{
    font-size: 8px;
  }

  input::placeholder {
    font-size: 14px;
  }

  .banner_info span{
    font-size: 12px;
  }


  .banner-img img {
    min-height: 326px;
  }

  .banner_info{
    max-width: 280px;
  }
}

</style>
