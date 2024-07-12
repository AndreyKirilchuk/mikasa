<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  import Button from '@/components/UI components/Button.vue'

  const headerClass = ref('header_container');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerClass.value = 'header_container scrolled';
    } else {
      headerClass.value = 'header_container';
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

</script>

<template>
  <div class="header_container" :class="headerClass" >
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
    z-index: 500;
    transition: 0.3s;
  }

  .header_container.scrolled {
    background: rgba(36, 36, 36, 0.8);
    backdrop-filter: blur(50px);
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