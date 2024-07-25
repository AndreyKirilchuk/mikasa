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
import MoreReviews from '@/components/MoreReviews.vue'
import Footer from '@/components/Footer.vue'
import Edge from '@/components/About.vue'
import Form from '@/components/Form.vue'

const body = ref(document.body)
const CalculateActive = ref(false)
const ModalActive = ref(false)
const ModalVideo = ref('')
const moreReviewsActive = ref(false)

const openCalculate = () => {
  body.value.classList.add('active')
  CalculateActive.value = true
}

const closeCalculate = () => {
  body.value.classList.remove('active')
  CalculateActive.value = false
}

const openModal = (video) => {
  body.value.classList.add('active')
  ModalActive.value = true
  ModalVideo.value = video
}

const closeModal = () => {
  body.value.classList.remove('active')
  ModalActive.value = false
}

const moreReviews = () => {
  body.value.classList.add('active')
  moreReviewsActive.value = true
}

const closeReviews = () => {
  body.value.classList.remove('active')
  moreReviewsActive.value = false
}

provide('Calculate', {
  openCalculate,
  closeCalculate
})

provide('Reviews', {
  openModal,
  closeModal,
  moreReviews,
  closeReviews
})
</script>

<template>
  <Header />
  <Calculate v-if="CalculateActive" />
  <MoreReviews v-if="moreReviewsActive" />
  <Modal v-if="ModalActive" :ModalVideo="ModalVideo" />
  <div class="block_container">
    <Banner />
    <Projects />
    <Banner_form title="Индивидуальный <br> подход" img="house2.png" />

    <Services />
    <Banner_form title="Ответим на все <br class='mobile_br'> ваши <br class='dekstop_br'> вопросы" img="house3.png" />
    <Reviews />
    <f-a-q />
    <Contacts />
    <Form />
    <Footer />
  </div>
</template>

<style>
.block_title {
  color: white;
  font-size: 52px;
  margin: 0;
  font-weight: 700;
  line-height: 60px;
}

.block_container {
  display: flex;
  flex-direction: column;
  row-gap: 150px;
}

.link_block {
  position: relative;
}

.link_block div {
  position: absolute;
  top: -140px;
}

@media(max-width: 1500px){
  .block_title{
    font-size: 44px;
  }
  .block_container {
    row-gap: 120px;
  }
}

.mobile_br{
  display: none;
}


@media(max-width: 1600px){
  .mobile_br{
    display: block;
  }
  .dekstop_br{
    display: none;
  }
}

</style>
