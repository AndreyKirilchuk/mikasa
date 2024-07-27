<script setup>
  import Button from '@/components/UI components/Button.vue'

  defineProps({
    burgerActive:Boolean,
  })

  import { inject } from 'vue'

  const toggleBurger = inject('toggleBurger')
</script>

<template>
  <div class="fon" @click="toggleBurger" :class="{active: burgerActive}"></div>

  <div class="burger_menu" :class="{active: burgerActive}">
    <div class="header_burger">
      <a href="#" @click="toggleBurger">
        <img src="/logo_mini.svg" alt="logo_mini">
      </a>

      <img src="/cross.svg" alt="cross" width="12px" @click="toggleBurger" />
    </div>
    <div class="burger-content">
      <nav>
        <a href="#projects" @click="toggleBurger">Проекты</a>
        <a href="#about"  @click="toggleBurger">О нас</a>
        <a href="#services"  @click="toggleBurger">Услуги</a>
        <a href="#reviews" @click="toggleBurger">Отзывы</a>
        <a href="#faq" @click="toggleBurger">Частые вопросы</a>
        <a href="#contacts" @click="toggleBurger">Контакты</a>
      </nav>

      <div class="burger-btn">
        <a href="#form" @click="toggleBurger">
          <Button text="Оставить заявку"/>
        </a>
        <br>
        <span>MiCasa Home | Строительная компания</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fon {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(1, 1, 1, 0.2);
    z-index: 999;
    display: none;
  }

  .fon.active{
    display:block;
  }

  .burger_menu{
    padding: 15px 25px;
    width:320px;
    height:100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: #242424;
    z-index: 999;
    transform: translateX(100%);
    transition: 0.3s ease-in-out;
  }

  .burger_menu.active{
    transform: translateX(0%);
  }

  .header_burger{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display:flex;
    flex-direction: column;
    gap: 22px;
    margin: 20px 0px;
    font-size: 16px;
  }

  nav a{
    color:rgba(255,255,255,0.7);
    font-weight:500;
  }

  .burger-content{
    position: relative;
    height: 100%;
  }

  .burger-btn{
    position: absolute;
    bottom: 35px;
  }

  .burger-btn span{
    font-size: 12px;
    color:rgba(255,255,255,0.7)
  }

  button{
    border-radius: 2px;
    padding: 12px 14px;
  }

  a:hover{
    color: white;
  }
</style>