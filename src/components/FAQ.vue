<script setup>
import { reactive, ref } from 'vue'

const thisActive = ref(null);

const questions = reactive([
  { name: 'Вопрос 1', content: 'Ответ на вопрос 1', open: false },
  { name: 'Вопрос 2', content: 'Ответ на вопрос 2', open: false },
  {
    name: 'Вопрос 3',
    content:
      'Мы предлагаем широкий выбор проектов домов, от классических до современных, а также возможность разработки индивидуального проекта под ваши потребности и предпочтения. Наши специалисты помогут вам выбрать проект, который соответствует вашим желаниям и бюджету',
    open: false
  },
  { name: 'Вопрос 4', content: 'Ответ на вопрос 4', open: false },
  { name: 'Вопрос 5', content: 'Ответ на вопрос 5', open: false },
  { name: 'Вопрос 6', content: 'Ответ на вопрос 6', open: false }
])

const toggleAccordion = (index) => {
  if(thisActive.value !== null){
    if(thisActive.value === index){

    }else{
      questions[thisActive.value].open = false;
    }
  }
  thisActive.value = index
  questions[index].open = !questions[index].open
}
</script>

<template>
  <div class="container">
    <div class="link_block">
      <div id="faq"></div>
    </div>

    <h2 class="block_title" v-motion-slide-visible-once-left>Частые вопросы</h2>

    <div class="faq_container">
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="faq"
        v-motion-slide-visible-once-bottom
      >
        <div class="accordion">
          <div class="name">
            {{ question.name }}
          </div>
          <button class="toggle" @click="toggleAccordion(index)" :class="{ active: question.open}">
            <svg
              width="17"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.56066 0.43934C1.97487 -0.146447 1.02513 -0.146447 0.43934 0.43934C-0.146447 1.02513 -0.146447 1.97487 0.43934 2.56066L12.8787 15L0.439341 27.4393C-0.146446 28.0251 -0.146446 28.9749 0.439341 29.5607C1.02513 30.1464 1.97487 30.1464 2.56066 29.5607L15 17.1213L27.4393 29.5607C28.0251 30.1464 28.9749 30.1464 29.5607 29.5607C30.1464 28.9749 30.1464 28.0251 29.5607 27.4393L17.1213 15L29.5607 2.56066C30.1464 1.97487 30.1464 1.02513 29.5607 0.43934C28.9749 -0.146447 28.0251 -0.146447 27.4393 0.43934L15 12.8787L2.56066 0.43934Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div class="content" :class="{ active: question.open }">
          {{ question.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq_container {
  padding: 50px 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  transition: 0.3s ease-in-out;
}

.faq {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0px 17px 20px 17px;
  transition: 0.3s ease-in-out;
}

.accordion {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  color: white;
  font-size: 32px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.content.active {
  margin-top: 20px;
  max-height: 100px;
}

.toggle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle:hover {
  background: #9238a8;
}

.toggle svg path {
  transition: 0.3s;
}

.toggle:hover svg path {
  fill: white;
}

.toggle svg {
  transform: rotate(45deg);
  transition: all 0.3s ease-in-out;
}

.toggle div:last-child {
  transform: rotate(90deg);
}

.toggle.active {
  background: #9238a8;
}

.toggle.active svg {
  transform: rotate(90deg);
}

.toggle.active svg path {
  fill: white;
}

@media(max-width: 1440px){
  .faq_container{
    padding: 35px 0px;
  }
  .name{
    font-size: 28px;
  }

  .content{
    font-size: 18px;
  }

  .toggle{
    width:45px;
    height: 45px;
  }

  .toggle svg{
    width: 16px;
  }
}

@media(max-width: 1200px){
  .name{
    font-size: 26px;
  }
  .content{
    font-size: 16px;
  }

  .toggle{
    width:40px;
    height: 40px;
  }

  .toggle svg{
    width: 15px;
  }

  .faq{
    padding: 0px 15px 13px 15px;
  }

  .content.active{
    margin-top: 10px;
  }
}

@media(max-width: 1024px){
  .name{
    font-size: 20px;
  }
  .content{
    font-size: 14px;
  }

  .toggle{
    width:33px;
    height: 33px;
  }

  .toggle svg{
    width: 13px;
  }

  .faq{
    padding: 0px 12px 15px 12px;
  }
}

@media(max-width: 768px){
  .faq{
    padding: 0px 9px 15px 9px;
  }
}

@media(max-width: 480px){
  .name{
    font-size: 16px;
  }
  .content{
    font-size: 11px;
    line-height: 15px;
  }

  .faq{
    padding: 0px 5px 10px 5px;
  }

  .content{
    transition: all 0.6s ease-in-out;
  }

  .content.active{
    max-height: 200px;
  }
}
</style>
