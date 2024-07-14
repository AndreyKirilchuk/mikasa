<script setup>
  import { ref, provide } from 'vue'

  import Header from '@/components/Header.vue'
  import Banner from '@/components/Banner.vue'
  import Projects from '@/components/Projects.vue'
  import Calculate from '@/components/Calculate.vue'
  import Banner_form from '@/components/Banner_form.vue'
  import Services from '@/components/Services.vue'
  import FAQ from '@/components/FAQ.vue'
  import Contacts from '@/components/Contacts.vue'
  import Reviews from '@/components/Reviews.vue'
  import Modal from '@/components/Modal.vue'

  const body = ref(document.body)
  const CalculateActive = ref(false);
  const ModalActive = ref(false);

  const openCalculate = () => {
    body.value.classList.add('active')
    CalculateActive.value = true;
  }

  const closeCalculate = () => {
    body.value.classList.remove('active')
    CalculateActive.value = false;
  }

  const openModal = () => {
    body.value.classList.remove('active')
    ModalActive.value = true;
  }

  const closeModal = () => {
    body.value.classList.add('active')
    ModalActive.value = false;
  }

  provide("Calculate", {
    openCalculate,
    closeCalculate,
  });

</script>

<template>
  <Header/>
  <Calculate v-if="CalculateActive" />
  <Modal v-if="ModalActive"/>
  <div class="block_container">
    <Banner/>
    <Projects />
    <Banner_form title="Индивидуальный <br> подход" img="house2.png"/>
    <!--  SLIDER-->
    <Services/>
    <Banner_form title="Ответим на все ваши <br> вопросы" img="house3.png"/>
    <Reviews/>
    <f-a-q/>
    <Contacts/>
  </div>

<!--  FORM-->
<!--  FOOTER-->
</template>

<style>
  .block_title{
    color: #ffffff;
    font-size:52px;
    margin: 0;
    font-weight: 700;
    line-height: 60px;
  }

  .block_container{
    display: flex;
    flex-direction: column;
    gap: 150px;
  }
</style>
