<script setup>
import { reactive, ref } from 'vue'

const name = ref('')
const number = ref('')
const error_name = ref(false)
const error_number = ref(false)
const error_agreed = ref(false)

const checkboxes = reactive([
  {
    id: 'checkbox1',
    name: 'checbox',
    text: 'Свяжитесь со мной в <span style="color: #9238A8">WhatsApp</span>',
    checked: false
  },
  {
    id: 'checkbox2',
    name: 'checbox',
    text: '<span style="color: #9238A8">Бесплатная консультация</span> по телефону',
    checked: false
  },
  {
    id: 'checkbox3',
    name: 'checbox',
    text: 'Я согласен с <span style="color: #9238A8">политикой конфиденциальных данных</span>',
    checked: true
  }
])

const applyCheckbox = () => {
  if (checkboxes[2].checked === false) {
    error_agreed.value = true
  } else {
    error_agreed.value = false
  }

  console.log('asd')
}

const applyName = () => {
  if (name.value.length === 0) {
    error_name.value = true
  } else {
    error_name.value = false
  }
}

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

import axios from 'axios'
import Button from '@/components/UI components/Button.vue'

const validateForm = () => {
  error_name.value = false
  error_number.value = false
  error_agreed.value = false

  setTimeout(() => {
    if (name.value.length < 1) {
      error_name.value = true
    }

    if (number.value.length !== 18) {
      error_number.value = true
    }

    if (checkboxes[2].checked === false) {
      error_agreed.value = true
    }

    if (
      error_name.value === false &&
      error_number.value === false &&
      checkboxes[2].checked === true
    ) {
      sendCalculation()
    }
  }, 0.01)
}

const sendCalculation = async () => {
  let txt = `<b> У вас новая заявка! </b> %0A %0A`

  const message = [
    {
      Имя: name.value,
      Номер: number.value,
      'Свяжитесь со мной в WhatsApp': checkboxes[0].checked,
      'Бесплатная консультация по телефону': checkboxes[1].checked
    }
  ]

  const botId = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  for (const item of message) {
    for (const key in item) {
      txt += `<b>${key}</b>: ${item[key]}%0A%0A`
    }
  }

  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${txt}`
    )
    console.log('Message sent', response.data)

    name.value =''
    number.value = ''

  } catch (error) {
    console.error('Error sending message', error)
  }
}
</script>

<template>
  <div class="container">
    <div class="link_block">
      <div id="form"></div>
    </div>

    <div class="form_container">

      <form @submit.prevent="validateForm" class="calculate_form">
      <h2 class="block_title" v-motion-slide-visible-once-left>Постройте дом <br />своей мечты!</h2>
      <h4 v-motion-slide-visible-once-left>
        Оставьте контакты и мы с вами<br />
        оперативно свяжемся
      </h4>
      <div class="sendForm">
        <div class="sendForm_input" v-motion-slide-visible-once-bottom>
          <input
            type="text"
            v-model="name"
            placeholder="Ваше имя"
            @input="applyName"
            :class="{ error: error_name }"
          />
        </div>

        <div class="sendForm_input" v-motion-slide-visible-once-bottom>
          <input
            id="number"
            v-model="number"
            placeholder="Ваше телефон"
            @input="applyMask"
            :class="{ error: error_number }"
          />
        </div>

        <div
          class="checkbox_inner"
          v-for="(checkbox, index) in checkboxes"
          :key="index"
          v-motion-slide-visible-once-bottom
        >
          <div class="custom_checbox">
            <input
              type="checkbox"
              :id="checkbox.id"
              :name="checkbox.name"
              v-model="checkbox.checked"
              @change="applyCheckbox(checkbox.id)"
            />
            <label
              :for="checkbox.id"
              :class="{ error: error_agreed && checkbox.id === 'checkbox3' }"
            >
              <img src="/check_mark.svg" alt="check_mark" width="13px" />
            </label>
          </div>
          <div v-html="checkbox.text"></div>
        </div>

        <Button text="Отправить" />
      </div>
    </form>

      <img src="/form.png" alt="">
    </div>
  </div>
</template>

<style scoped>

.form_container{
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.container {
  padding: 0px 120px;
}

.sendForm {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 480px;
  float: left;
}

.sendForm_input {
  text-align: left;
  gap: 15px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 400;
  color: white;
}

.sendForm_input input {
  font-size: 20px;
  padding: 20px;
  background: white;
  width: 100%;
  border-radius: 10px;
  border: 1px solid white;
  outline: none;
}

.sendForm_input input::placeholder{
  color: black;
}

.sendForm_input input:focus {
  border: 1px solid #9238a8;
}

.checkbox_inner {
  display: flex;
  gap: 20px;
  text-align: left;
  font-size: 20px;
  color: white;
  align-items: center;
}

.violet {
  color: #9238a8;
}

.custom_checbox input {
  display: none;
}

.custom_checbox label {
  display: block;
  border-radius: 5px;
  border: 1px solid white;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom_checbox label img {
  display: none;
}

.custom_checbox input:checked + label img {
  display: block;
}

.error_text {
  font-size: 14px;
  font-weight: 400;
  color: #cc1616;
  height: 15px;
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

h4 {
  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 10px;
  margin-bottom: 20px;
}

button {
  border-radius: 10px;
  padding: 25px 30px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
}

@media(max-width: 1600px){
  h4{
    font-size: 20px;
  }
  .sendForm{
    gap: 20px;
  }
  .sendForm_input{
    font-size: 20px;
  }
  .sendForm_input input{
    font-size: 18px;
  }
  .checkbox_inner{
    font-size: 16px;
  }

  button{
    font-size: 16px;
  }

  .sendForm{
    width: 400px;
  }

  .form_container img{
    width: 530px;
  }
  .container{
    padding: 0px 80px;
  }
}


@media(max-width: 1200px){

  .sendForm{
    width: 400px;
  }
  .sendForm_input input{
    padding: 15px 20px;
    font-size: 15px;
    border-radius: 5px;
  }
  .custom_checbox > *{
    width: 20px !important;
    height: 20px !important;
    border-radius: 5px !important;
  }
  .custom_checbox img {
    width: 10px;
  }

  .checkbox_inner{
    font-size: 14px;
  }

  button{
    padding: 20px 0px;
  }

  .form_container img{
    width: 450px;
  }
}

@media(max-width: 1024px){

  h4{
    font-size: 16px;
  }

  .sendForm_input input{
    padding: 15px 20px;
    font-size: 14px;
    border-radius: 5px;
  }

  .sendForm{
    width: 300px;
    gap: 15px;
  }

  .custom_checbox > *{
    width: 16px !important;
    height: 16px !important;
    border-radius: 2px !important;
  }
  .custom_checbox img {
    width: 8px;
  }

  button{
    font-size: 14px;
    padding: 15px 0px;
    margin-top: 0;
    border-radius: 5px;
  }

  .form_container img{
    width: 350px;
  }

  .form_container{
    gap: 20px;
  }

}

@media(max-width: 768px){
  .form_container img{
    display: none;
  }

  .container{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .form_container{
    justify-content: center;
  }

  .block_title{
    text-align: center;
  }

  h4{
    text-align: center;
  }
}

@media(max-width: 480px){
  h4{
    font-size: 14px;
  }
}


</style>
