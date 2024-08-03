<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

import Button from '@/components/UI components/Button.vue'

const headerClass = ref('header_container')

const handleScroll = () => {
  if (window.scrollY > 0) {
    headerClass.value = 'header_container scrolled'
  } else {
    headerClass.value = 'header_container'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleBurger = inject('toggleBurger')
</script>

<template>
  <div class="header_container" :class="headerClass">
    <div class="container">
      <header>
        <div class="logo">
          <a href="#">
            <img src="/logo.svg" alt="" />
          </a>
        </div>

        <nav>
          <a href="#projects">Проекты</a>
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#reviews">Отзывы</a>
          <a href="#faq">Частые вопросы</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div class="header-btn">
          <a href="#form">
            <Button text="Оставить заявку" />
          </a>

          <div class="burger" @click="toggleBurger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped>
.header_container {
  position: fixed;
  width: 100%;
  z-index: 500;
  transition: 0.3s;
}

.header_container.scrolled {
  background: rgba(36, 36, 36, 0.8);
  backdrop-filter: blur(50px);
}

header {
  padding:25px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 25px;
  color: white;
  font-size: 20px;
  font-weight: 50
}

nav a {
  transition: 0.3s;
}

nav a:hover {
  color: #7b308d;
}

.header-btn{
  display:flex;
  gap: 15px;
}

.burger{
  padding: 11px 7px;
  border:1px solid #444444;
  border-radius: 5px;
  background:rgba(32, 33, 34, 0.6);
  display: flex;
  flex-direction: column;
  gap: 3px;
  width:36px;
  height: 36px;
  display: none;
}

.burger div{
  background: white;
  width: 100%;
  height: 2px;
  margin-bottom: 3px;
  border-radius: 25%;
}

@media(max-width: 1600px){
  nav{
    font-size: 16px;
  }
  button{
    font-size: 16px;
  }
  img{
    width: 222px;
  }
  header{
    padding:20px 0px;
  }
}

@media(max-width: 1200px){
  nav{
    font-size: 14px;
  }
  img{
    width: 200px;
  }

  button{
    padding: 9px 16px;
    font-size: 14px;
  }
}

@media(max-width: 1100px){
  nav{
    display:none;
  }
  .burger {
    display:block
  }
}

@media(max-width: 768px){
  .burger{
    width: 34px;
  }

}

@media(max-width: 510px){
  .header-btn a{
    display: none;
  }
}
</style>
