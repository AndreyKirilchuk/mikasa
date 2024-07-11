<script setup>
  import axios from 'axios'
  import { ref, inject, provide, reactive } from 'vue'

  import Button from '@/components/UI components/Button.vue'
  import CalculateNav from '@/components/UI components/CalculateNav.vue'

  const { closeCalculate } = inject("Calculate");

  const progress = ref(1);
  const answers = ref([]);
  const selectedOption = ref(null);
  const name = ref();
  const number = ref();
  const gochat = ref(false);
  const gocall = ref(false);
  const botId = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const nextProgress = () => {
    progress.value++;
    answers.value.push(selectedOption.value);
  }

  const backProgress = () => {
    progress.value--;
    answers.value.pop();
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
      'Свяжитесь со мной в WhatsApp': gochat.value,
      'Бесплатная консультация по телефону': gocall.value,
    }];

    for (const item of message) {
      for (const key in item) {
        txt += `<b>${key}</b>: ${item[key]}%0A%0A`;
      }
    }

    console.log(txt);

    try {
      const response = await axios.get(`https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${txt}`)
      console.log('Message sent',  response.data);
    } catch (error) {
      console.error('Error sending message', error);
    }
  }

  provide("backProgress", backProgress)

</script>

<template>
  <div class="calculate">
    <div class="calculate_header">
      <div></div>
      <div class="progress_bar">
        <div v-for="step in 5" :key="step" :class="{'step': true, 'completed': step <= progress}"></div>
      </div>
      <button class="cross" @click="closeCalculate">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.56066 0.43934C1.97487 -0.146447 1.02513 -0.146447 0.43934 0.43934C-0.146447 1.02513 -0.146447 1.97487 0.43934 2.56066L12.8787 15L0.439341 27.4393C-0.146446 28.0251 -0.146446 28.9749 0.439341 29.5607C1.02513 30.1464 1.97487 30.1464 2.56066 29.5607L15 17.1213L27.4393 29.5607C28.0251 30.1464 28.9749 30.1464 29.5607 29.5607C30.1464 28.9749 30.1464 28.0251 29.5607 27.4393L17.1213 15L29.5607 2.56066C30.1464 1.97487 30.1464 1.02513 29.5607 0.43934C28.9749 -0.146447 28.0251 -0.146447 27.4393 0.43934L15 12.8787L2.56066 0.43934Z" fill="white"/>
        </svg>
      </button>

    </div>

<!--    progress 1-->

      <form @submit.prevent="nextProgress" class="calculate_form" v-if="progress === 1">
        <h2>Есть ли у вас участок?</h2>
        <div class="options_img">
          <div class="option_img">
            <div class="radio_container">
              <input type="radio" id="with" name="answer" required v-model="selectedOption" value="Есть участок" />
              <label class="сustom_radio" for="with">
                <img src="/with_a_plot.png" alt="">
              </label>
            </div>
            <p>Есть участок</p>
          </div>

          <div class="option_img">
            <div class="radio_container">
              <input type="radio" id="without" name="answer" required v-model="selectedOption" value="Нет участка" />
              <label class="сustom_radio" for="without">
                <img src="/without_plot.png" alt="">
              </label>
            </div>
            <p>Нет участка</p>
          </div>

        </div>

        <CalculateNav :click="closeCalculate"/>
      </form>


      <form @submit.prevent="nextProgress" class="calculate_form" v-if="progress === 2">
        <h2>Какую площадь дома планируете?</h2>
        <div class="options_text">
          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="ss1" name="answer" required v-model="selectedOption" value="От 50 до 100 м2"/>
              <label for="s1"></label>
            </div>
            От 50 до 100 м<sup>2</sup>
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s2" name="answer" required v-model="selectedOption" value="От 100 до 150 м2"/>
              <label for="s2"></label>
            </div>
            От 100 до 150 м<sup>2</sup>
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s3" name="answer" required v-model="selectedOption" value="От 150 до 200 м2"/>
              <label for="s3"></label>
            </div>
            От 150 до 200 м<sup>2</sup>
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s4" name="answer" required v-model="selectedOption" value="От 200 м2 и более" />
              <label for="s4"></label>
            </div>
            От 200 м<sup>2</sup> и более
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s5" name="answer" required v-model="selectedOption" value="Еще думаю">
              <label for="s5"></label>
            </div>
            Еще думаю
          </div>
        </div>


        <CalculateNav :click="backProgress" />
      </form>

      <form @submit.prevent="nextProgress" class="calculate_form" v-if="progress === 3">
        <h2>Сколько этажей планируете?</h2>
        <div class="options_img">
          <div class="option_img">
            <div class="radio_container">
              <input type="radio" id="1flor" name="answer" required v-model="selectedOption" value="1 этаж" />
              <label class="сustom_radio" for="1flor">
                <img src="/1flor.png" alt="">
              </label>
            </div>
            <p>1 этаж</p>
          </div>

          <div class="option_img">
            <div class="radio_container">
              <input type="radio" id="1.5flor" name="answer" required v-model="selectedOption" value="1.5 этажа" />
              <label class="сustom_radio" for="1.5flor">
                <img src="/without_plot.png" alt="">
              </label>
            </div>
            <p>1.5 этажа</p>
          </div>

          <div class="option_img">
            <div class="radio_container">
              <input type="radio" id="2flor" name="answer" required v-model="selectedOption" value="2 этажа" />
              <label class="сustom_radio" for="2flor">
                <img src="/2flor.png" alt="">
              </label>
            </div>
            <p>2 этажа</p>
          </div>

          <div class="option_img">
            <div class="radio_container">
              <input type="radio" id="dontknowflor" name="answer" required v-model="selectedOption" value="Не знаю" />
              <label class="сustom_radio" for="dontknowflor">
                <img src="/dontknowflor.png" alt="">
              </label>
            </div>
            <p>Не знаю</p>
          </div>

        </div>


        <CalculateNav :click="backProgress"/>
      </form>



      <form @submit.prevent="nextProgress"  class="calculate_form" v-if="progress === 4">

        <h2>Какую площадь дома планируете?</h2>
        <div class="options_text">
          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s1" name="answer" required v-model="selectedOption" value="В течение полугода"/>
              <label for="s1"></label>
            </div>
            В течение полугода
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s2" name="answer" required v-model="selectedOption" value="В течение года"/>
              <label for="s2"></label>
            </div>
            В течение года
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s3" name="answer" required v-model="selectedOption" value="В течении двух лет"/>
              <label for="s3"></label>
            </div>
            В течении двух лет
          </div>

          <div class="option_text">
            <div class="option_container">
              <input type="radio" id="s4" name="answer" required v-model="selectedOption" value="Пока не планировали" />
              <label for="s4"></label>
            </div>
            Пока не планировали
          </div>
        </div>

        <CalculateNav :click="backProgress"/>
      </form>


      <form @submit.prevent="sendCalculation"  class="calculate_form" v-if="progress === 5">
        <h2>Введите номер телефона, на который <br>
          Вам отправить расчет</h2>

        <div class="sendForm">
          <div class="sendForm_input">
            <label for="name">Ваше имя</label>
            <input type="text" v-model="name" placeholder="Иванов Иван">
          </div>

          <div class="sendForm_input">
            <label for="name">Ваш номер</label>
            <input type="number" v-model="number" placeholder="+7(987) 654-32-10">
          </div>

          <div class="checkbox_container">
            <div class="custom_checbox">
              <input type="checkbox" id="checbox1" name="checbox" v-model="gochat">
              <label for="checbox1">
                <img src="/check_mark.svg" alt="check_mark" width="13px">
              </label>
            </div>
            <div>
              Свяжитесь со мной в <span class="violet">WhatsApp</span>
            </div>
          </div>


          <div class="checkbox_container">
            <div class="custom_checbox">
              <input type="checkbox" id="checbox2" name="checbox" v-model="gocall">
              <label for="checbox2">
                <img src="/check_mark.svg" alt="check_mark" width="13px">
              </label>
            </div>
            <div>
              <span class="violet">Бесплатная консультация</span> по телефону
            </div>
          </div>

          <div class="checkbox_container">
            <div class="custom_checbox">
              <input type="checkbox" id="checbox3" name="checbox" required>
              <label for="checbox3">
                <img src="/check_mark.svg"  alt="check_mark" width="13px">
              </label>
            </div>
            <div>
              Я согласен с <span class="violet">политикой конфиденциальных данных</span>
            </div>
          </div>
        </div>  

        <CalculateNav :click="backProgress"/>
      </form>
    </div>


</template>

<style scoped>
  .calculate{
    position: fixed;
    z-index: 800;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    background: rgba(20,22,26,0.8);
    backdrop-filter: blur(100px);
    padding: 70px;
  }

  .calculate_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding: 300px 0px;
    height: 700px;
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
    gap: 40px;
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
    border: none;
    outline: none;
  }

  .checkbox_container{
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

</style>