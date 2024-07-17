<script setup>
  import axios from 'axios'
  import { ref, inject, provide, reactive } from 'vue'

  import Button from '@/components/UI components/Button.vue'
  import CalculateNav from '@/components/UI components/CalculateNav.vue'

  const { closeCalculate } = inject("Calculate");

  const progress = ref(1)
  const answers = ref([])
  const selectedOption = ref(null)
  const name = ref('')
  const number = ref('')
  const error_name = ref(false)
  const error_number = ref(false)
  const error_agreed = ref(false)

  const questions = reactive([
    {
      title: 'Есть ли у вас участок?',
      options: [
        { id: 'with', value: 'Есть участок', text: 'Есть участок', img: '/with_a_plot.png' },
        { id: 'without', value: 'Нет участка', text: 'Нет участка', img: '/without_plot.png' }
      ]
    },
    {
      title: 'Какую площадь дома планируете?',
      options: [
        { id: 'ss1', value: 'От 50 до 100 м2', text: 'От 50 до 100 м²' },
        { id: 's2', value: 'От 100 до 150 м2', text: 'От 100 до 150 м²' },
        { id: 's3', value: 'От 150 до 200 м2', text: 'От 150 до 200 м²' },
        { id: 's4', value: 'От 200 м2 и более', text: 'От 200 м² и более' },
        { id: 's5', value: 'Еще думаю', text: 'Еще думаю' }
      ]
    },
    {
      title: 'Сколько этажей планируете?',
      options: [
        { id: '1flor', value: '1 этаж', text: '1 этаж', img: '/1flor.png' },
        { id: '1.5flor', value: '1.5 этажа', text: '1.5 этажа', img: '/without_plot.png' },
        { id: '2flor', value: '2 этажа', text: '2 этажа', img: '/2flor.png' },
        { id: 'dontknowflor', value: 'Не знаю', text: 'Не знаю', img: '/dontknowflor.png' }
      ]
    },
    {
      title: 'В какие сроки планируете начать строительство?',
      options: [
        { id: 's1', value: 'В течение полугода', text: 'В течение полугода' },
        { id: 's2', value: 'В течение года', text: 'В течение года' },
        { id: 's3', value: 'В течение двух лет', text: 'В течение двух лет' },
        { id: 's4', value: 'Пока не планировали', text: 'Пока не планировали' }
      ]
    }
  ]);

  const checkboxes = reactive([
    { id: 'checkbox1', name: 'checbox', text: 'Свяжитесь со мной в <span style="color: #9238A8">WhatsApp</span>', checked: false },
    { id: 'checkbox2', name: 'checbox', text: '<span style="color: #9238A8">Бесплатная консультация</span> по телефону', checked: false },
    { id: 'checkbox3', name: 'checbox', text: 'Я согласен с <span style="color: #9238A8">политикой конфиденциальных данных</span>', checked: true }
  ]);

  const nextProgress = () => {
    progress.value++;
    answers.value.push(selectedOption.value);
    selectedOption.value = '';
  }

  const backProgress = () => {
    progress.value--;
    if(progress.value === 0){
      closeCalculate();
    }
    answers.value.pop();
  }

  const applyCheckbox = () => {
    if (checkboxes[2].checked === false) {
      error_agreed.value = true;
    } else {
      error_agreed.value = false;
    }

    console.log('asd');
  }

  const applyName = () => {
    if(name.value.length === 0){
      error_name.value = true;
    }else{
      error_name.value = false;
    }
  }

  const applyMask = () => {

    let rawValue = number.value.replace(/[^0-9]/g, '');

    if (rawValue.startsWith('7')) {
      rawValue = rawValue.slice(1);
    }

    let maskedValue = '+7 (' + rawValue.substring(0, 3);

    if(rawValue.length === 0){
      maskedValue = '';
    }

    if (rawValue.length > 3) {
      maskedValue += ') ';
      maskedValue += rawValue.substring(3, 6);
    }

    if (rawValue.length > 6) {
      maskedValue += '-' + rawValue.substring(6, 8);
    }

    if (rawValue.length > 8) {
      maskedValue += '-' + rawValue.substring(8, 10);
    }

    number.value = maskedValue;

    if(number.value.length === 0){
      error_number.value = true;
    }else{
      error_number.value = false;
    }
  }

  const validateForm = () => {
    error_name.value = false;
    error_number.value = false;
    error_agreed.value = false;

    setTimeout( () => {


      if(name.value.length < 1){
        error_name.value = true;
      }

      if(number.value.length < 1){
        error_number.value = true;
      }

      if(checkboxes[2].checked === false){
        error_agreed.value = true;
      }

      if(error_name.value === false && error_name.value === false && checkboxes[2].checked === true){
        sendCalculation()
      }
    },0.01)
  }

  const sendCalculation = async () => {
    let txt = `<b> У вас новая заявка! </b> %0A %0A`;

    const message = [{
      'Имя': name.value,
      'Номер': number.value,
      'Участок': answers.value[0],
      'Площадь дома': answers.value[1],
      'Количество этажей': answers.value[2],
      'Заселение в дом': answers.value[3],
      'Свяжитесь со мной в WhatsApp': checkboxes[0].checked,
      'Бесплатная консультация по телефону': checkboxes[1].checked,
    }];

    const botId = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

    for (const item of message) {
      for (const key in item) {
        txt += `<b>${key}</b>: ${item[key]}%0A%0A`;
      }
    }

    try {
      const response = await axios.get(`https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${txt}`)
      console.log('Message sent',  response.data);
      progress.value++;
    } catch (error) {
      console.error('Error sending message', error);
    }
  }

  provide("backProgress", backProgress)

</script>

<template>
  <div class="calculate" v-motion-fade-visible>
    <!--    header -->
    <div class="calculate_header">
      <div></div>
      <div class="progress_bar" v-if="progress < 6">
        <div v-for="step in 5" :key="step" :class="{'step': true, 'completed': step <= progress}"></div>
      </div>
    </div>

    <button class="cross" @click="closeCalculate">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.56066 0.43934C1.97487 -0.146447 1.02513 -0.146447 0.43934 0.43934C-0.146447 1.02513 -0.146447 1.97487 0.43934 2.56066L12.8787 15L0.439341 27.4393C-0.146446 28.0251 -0.146446 28.9749 0.439341 29.5607C1.02513 30.1464 1.97487 30.1464 2.56066 29.5607L15 17.1213L27.4393 29.5607C28.0251 30.1464 28.9749 30.1464 29.5607 29.5607C30.1464 28.9749 30.1464 28.0251 29.5607 27.4393L17.1213 15L29.5607 2.56066C30.1464 1.97487 30.1464 1.02513 29.5607 0.43934C28.9749 -0.146447 28.0251 -0.146447 27.4393 0.43934L15 12.8787L2.56066 0.43934Z" fill="white"/>
      </svg>
    </button>
    <!--    progress 1 - 4-->

      <form @submit.prevent="nextProgress" class="calculate_form" v-if="progress <= 4">
        <h2 v-motion-fade-visible>{{ questions[progress - 1].title }}</h2>

        <div class="options_img" v-if="progress === 1 || progress === 3"  v-motion-fade-visible>
          <div v-for="(option, index) in questions[progress - 1].options" :key="index" class="option_img">
            <div class="radio_container">
              <input type="radio" :id="option.id" name="answer" required v-model="selectedOption" :value="option.value" />
              <label :for="option.id" class="сustom_radio">
                <img v-if="option.img" :src="option.img" alt="">
              </label>
            </div>
            <p>{{ option.text }}</p>
          </div>
        </div>

        <div class="options_text" v-if="progress === 2 ||  progress === 4" v-motion-fade-visible>
          <div class="option_text"  v-for="(option, index) in questions[progress - 1].options" :key="index">
            <div class="option_container">
                <input type="radio" :id="option.id" name="answer" required v-model="selectedOption" :value="option.value" />
                <label :for="option.id" class="сustom_radio">
                  <img v-if="option.img" :src="option.img" alt="">
                </label>
            </div>
            <label class="hover_text" :for="option.id">{{ option.text }}</label>
          </div>
        </div>

        <CalculateNav text="Далее"/>
      </form>

    <!--    progress 5-->
      <form @submit.prevent="validateForm"  class="calculate_form" v-if="progress === 5">
        <h2 v-motion-fade-visible>Введите номер телефона, на который <br>Вам отправить расчет</h2>
        <div class="sendForm" v-motion-fade-visible>

          <div class="sendForm_input">
            <label for="name">Ваше имя</label>
            <input
              type="text"
              v-model="name"
              placeholder="Иванов Иван"
              @input="applyName"
              :class="{ 'error': error_name }"
            >
            <div class="error_text"><span  v-if="error_name">*Обязательное поле для заполнения</span></div>
          </div>

          <div class="sendForm_input">
            <label for="number">Ваш номер</label>
            <input
              id="number"
              v-model="number"
              placeholder="+7 (987) 654 32 10"
              @input="applyMask"
              :class="{ 'error': error_number }"
            >
            <div class="error_text"><span  v-if="error_number">*Обязательное поле для заполнения</span></div>
          </div>


            <div class="checkbox_inner" v-for="(checkbox, index) in checkboxes" :key="index">
              <div class="custom_checbox">
                <input
                  type="checkbox"
                  :id="checkbox.id"
                  :name="checkbox.name"
                  v-model="checkbox.checked"
                  @change="applyCheckbox(checkbox.id)"
                >
                <label :for="checkbox.id" :class="{ 'error': error_agreed && checkbox.id === 'checkbox3' }">
                  <img src="/check_mark.svg" alt="check_mark" width="13px">
                </label>
              </div>
              <div v-html="checkbox.text">

              </div>
            </div>



        </div>
        <CalculateNav text="Готово"/>
      </form>

      <!--    after send -->
      <div class="calculate_form" v-if="progress === 6">
        <div class="accept_container">
          <img src="/successful.svg" alt="successful" width="100px" v-motion-fade-visible>

          <h2 v-motion-fade-visible> Спасибо, данные успешно отправлены!
            Наш специалист скоро свяжется с вами!</h2>

          <Button text="На главную" @click="closeCalculate"/>
        </div>

      </div>


    </div>




</template>

<style scoped>

  .hover_text:hover > .option_container  {
    outline: 2px solid #9238A8;
  }

  .calculate{
    position: fixed;
    z-index: 800;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    background: rgba(20,22,26,0.8);
    backdrop-filter: blur(100px);
  }

  .calculate_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 88px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .progress_bar{
    display: flex;
    gap: 4px;
  }

  .step{
    background: white;
    width: 66px;
    height: 4px;
    border-radius: 1px;
    transition: 0.3s;
  }

  .step.completed{
    background: #9238A8;
  }

  .cross{
    background: 0;
    border:0;
    cursor: pointer;
    position: absolute;
    right: 75px;
    top: 65px;
  }

  .cross svg path{
    transition: 0.3s;
  }

  .cross:hover svg path{
    fill: #9238A8;
  }


  .calculate_form{
    display: flex;
    justify-content: center;
    text-align: center;
    height:90vh;
    flex-direction: column;
    margin: 0 auto;
  }

  .calculate_form h2{
    color: white;
    font-size: 40px;
    font-weight: 600;
  }

  .options_img{
    display: flex;
    gap: 50px;
    color: white;
    font-size: 24px;
    font-weight: 500;
    margin: 0 auto;
  }

  .options_text{
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .option_text{
    display: flex;
    gap: 20px;
    font-size: 28px;
    font-weight: 500;
    color: white;
    width: fit-content;
    display: flex;
    align-items: center;
  }

  .radio_container label img{
    transition: 0.3s;
    cursor: pointer;
    border: 3px solid rgba(1,1,1,0);
    border-radius: 20px;
  }

  .radio_container label:hover img{
    border: 3px solid #9238A8;
  }

  .radio_container input[type="radio"] {
    display: none;
  }

  input[type=radio]:checked + label img{
    border: 3px solid #9238A8;
  }

  .option_container  input[type="radio"] {
    display: none;
  }

  .option_container label{
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border:3px solid #242424;
    outline: 2px solid #ffffff;
    cursor: pointer;
    transition: 0.3s;
  }

  .option_container label:hover{
    outline: 2px solid #9238A8;
  }

  .option_container input[type=radio]:checked + label{
    background: #9238A8;
    outline: 2px solid #9238A8;
  }

  .sendForm{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
  }

  .sendForm_input{
    text-align: left;
    gap: 15px;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: 400;
    color: white;
  }

  .sendForm_input input{
    font-size: 20px;
    padding: 20px;
    background: white;
    width: 100%;
    border-radius: 10px;
    border: 1px solid white;
    outline: none;
  }

  .checkbox_container{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .checkbox_inner{
    display: flex;
    gap: 20px;
    text-align:left;
    font-size: 20px;
    color: white;
  }

  .violet{
    color: #9238A8;
  }

  .custom_checbox input{
    display: none;
  }

  .custom_checbox label{
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

  .custom_checbox label img{
    display: none;
  }

  .custom_checbox input:checked + label img{
    display: block;
  }

  .error_text{
    font-size: 14px;
    font-weight: 400;
    color: #CC1616;
    height:15px;
  }

  .error{
    border:1px solid #CC1616 !important;
    animation: shake 0.5s;
  }

  @keyframes shake {
    0% { transform: translateY(2px); }
    25% { transform: translateY(-4px); }
    50% { transform: translateY(3px); }
    75% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }


  .accept_container{
    max-width: 900px;
    margin: 0 auto;
    font-size: 40px;
    font-weight: 600;
  }

  .accept_container button{
    position: absolute;
    bottom: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>