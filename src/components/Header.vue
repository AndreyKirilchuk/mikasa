<script setup>
  import Button from '@/components/UI components/Button.vue'
</script>

<template>
  <div class="header_container">
    <div class="container">
      <header>
        <div class="logo">
          <a href="#">
            <img src="/logo.svg" alt="">
          </a>
        </div>

        <nav>
          <a href="#projects">Проекты</a>
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#team">Команда</a>
          <a href="#reviews">Отзывы</a>
          <a href="#faq">Частые вопросы</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div>
          <a href="#form">
            <Button text="Оставить заявку" />
          </a>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped>
  .header_container {
    position: fixed;
    width: 100%;
    background: rgba(36, 36, 36, 0.8);
    backdrop-filter: blur(50px);
    z-index: 500;
  }

  header{
    padding: 32px 0px 22px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav{
    display: flex;
    gap: 25px;
    color: white;
    font-size: 20px;
    font-weight: 500;
  }

  nav a{
    transition: 0.3s;
  }

  nav a:hover{
    color: #9238A8;
  }


</style>