<script setup>
import { inject, reactive, ref, watch } from 'vue'
import Button from '@/components/UI components/Button.vue'

const thisContent = ref({})
const About = ref('video')
const aboutAnimate = ref(false)

const videos = reactive([
  {
    id: '1',
    name: 'Почему выбирают нас',
    text: 'Узнайте больше о компании,<br> посмотрев видео',
    img: '/house2.png',
    video: ''
  },
  {
    id: '2',
    name: 'Наши достижения',
    text: 'Посмотрите наше видео о достижениях',
    img: '/house2.png',
    video: ''
  }
])

const images = reactive([
  {
    id: '1',
    name: 'Почему asd нас',
    text: 'Узнайте больше о компании,<br> посмотрев изображение',
    img: '/house2.png'
  },
  { id: '2', name: 'Наши asd', text: 'Посмотрите наши достижения', img: '' }
])

let videoIndex = 0
let imgIndex = 0

const setVideo = () => {
  aboutAnimate.value = true
  thisContent.value = videos[videoIndex]
  setTimeout(() => (aboutAnimate.value = false), 1000)
}

const setImg = () => {
  aboutAnimate.value = true
  thisContent.value = images[imgIndex]
  setTimeout(() => (aboutAnimate.value = false), 1000)
}

setVideo()

const toggleAbout = () => {
  if (About.value === 'video') {
    About.value = 'img'
    setImg()
  } else {
    About.value = 'video'
    setVideo()
  }
}

const nextVideo = () => {
  videoIndex = (videoIndex + 1) % videos.length
  setVideo()
}

const nextImg = () => {
  imgIndex = (imgIndex + 1) % images.length
  setImg()
}

const toggleVideo = (id) => {
  videoIndex = videos.findIndex((item) => item.id === id)
  setVideo()
}

const toggleImg = (id) => {
  imgIndex = images.findIndex((item) => item.id === id)
  setImg()
}

const { openModal } = inject('Reviews')
</script>

<template>
  <section>
    <div class="link_block">
      <div id="about"></div>
    </div>

    <div class="about_container">
      <div class="about_info" :class="{ 'fade-in': aboutAnimate }">
        <h4 class="block_title">{{ thisContent.name }}</h4>
        <span v-html="thisContent.text"> </span>

        <a
          class="play mobile_play"
          :class="{ active: About === 'video' }"
          @click="openModal(thisContent.video)"
        >
          <img src="/big_play.svg" alt="play" width="130px" height="130px" />
        </a>

        <a href="#form" class="info-btn">
          <Button text="Быстрая заявка" :arrow="true" />
        </a>
      </div>

      <div
        :style="{ background: `url(${thisContent.img})` }"
        class="about_preview"
        :class="{ 'fade-in': aboutAnimate }"
      >
        <a
          class="play"
          :class="{ active: About === 'video' }"
          @click="openModal(thisContent.video)"
        >
          <img src="/big_play.svg" alt="play" width="130px" height="130px" />
        </a>
      </div>
    </div>

    <nav>
      <div class="about_navigate" @click="toggleAbout">
        <button :class="{ active: About === 'img' }"></button>

        <svg
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="left"
          :class="{ active: About === 'video' }"
        >
          <path
            d="M9.57143 1.42871L1.68367 9.49504C1.30364 9.88367 1.30364 10.5047 1.68367 10.8933L9.57143 18.9597"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="right"
          :class="{ active: About === 'img' }"
        >
          <path
            d="M1.71428 1.42871L9.60203 9.49504C9.98207 9.88367 9.98207 10.5047 9.60203 10.8933L1.71428 18.9597"
            stroke="#14161A"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div class="content_navigate">
        <div
          v-for="circle in videos"
          :class="{ active: thisContent.id === circle.id }"
          v-if="About === 'video'"
          @click="toggleVideo(circle.id)"
        ></div>
        <div
          v-for="circle in images"
          :class="{ active: thisContent.id === circle.id }"
          v-if="About === 'img'"
          @click="toggleImg(circle.id)"
        ></div>
      </div>
    </nav>

    <div class="fon" :style="{ background: `url(${thisContent.img})` }"     :class="{ 'fade-in': aboutAnimate }">

    </div>
  </section>
</template>

<style scoped>
.mobile_play{
  display: none !important;
}

section{
  position: relative;
  border-radius: 10px;
}

.fon{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: none;

  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  border-radius: 10px;
}

.about_info {
  height: 450px;
  position: relative;
}

.fade-in {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.play {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}

.play.active {
  display: block;
}

nav {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 120px;
  align-items: center;
}

h4 {
  margin-top: 40px;
  margin-bottom: 25px;
  line-height: 40px;
}

.about_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}

.about_preview {
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

span {
  font-size: 24px;
  font-weight: 500;
  color: #ffffffb3;
}

.about_container button {
  padding: 25px 30px;
  font-size: 24px;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
}

.about_navigate {
  border-radius: 100px;
  border: 2px solid white;
  display: flex;
  height: fit-content;
  width: 120px;
  position: relative;
  cursor: pointer;
}

.about_navigate button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  transform: translateX(-1px);
}

.about_navigate button .left path {
  stroke: red;
}

.about_navigate svg {
  position: absolute;
  top: 21px;
  cursor: pointer;
}

.about_navigate .left {
  left: 22px;
}

.about_navigate .right path {
  stroke: white;
  transition: 0.4s;
}

.about_navigate .left path {
  stroke: white;
  transition: 0.4s;
}

.about_navigate .left.active path {
  stroke: #14161a;
}

.about_navigate .right.active path {
  stroke: #14161a;
}

.about_navigate .right {
  right: 22px;
}

.about_navigate button.active {
  transform: translateX(61px);
}

.content_navigate {
  display: flex;
  gap: 15px;
  float: right;
}

.content_navigate div {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1px solid white;
  transition: 0.3s;
  cursor: pointer;
}

.content_navigate div:hover {
  background: white;
}

.content_navigate div.active {
  background: white;
}

@media(max-width: 1600px){
  .about_info, .about_preview{
    height: 400px;
  }
  h4{
    margin-top: 35px;
    margin-bottom: 15px;
  }
  span, button{
    font-size: 20px !important;
  }
  .play img{
    width:100px;
    height:100px;
  }
}

@media(max-width: 1500px){
  .about_container{
    display: flex !important;
    gap: 100px;
    justify-content:space-between;
  }
  .about_info{
    min-width: 560px;
  }
}

@media(max-width: 1400px){
  .about_info{
    min-width: 450px;
  }
}

@media(max-width: 1300px){
  .about_container{
    gap: 55px;
  }
  .about_info, .about_preview{
    height: 375px;
  }
}

@media(max-width: 1200px){
  .about_container{
    gap: 0px;
  }
  .about_info, .about_preview{
    height: 350px;
  }
}

@media(max-width: 1024px){
  .info-btn button{
    padding: 20px;
    font-size: 16px;
  }
  .play img{
    width: 90px;
    height:90px;
  }
  span, button{
    font-size: 16px !important;
  }
  nav{
    margin-top: 25px;
    margin-bottom: 5px;
  }
  h4{
    margin-top: 0;
  }

  section{
    padding: 25px 40px;
    height: fit-content;
    margin-bottom: 80px;
  }

  .about_preview{
    background: inherit !important;
  }
  .fon{
    display:block;
  }

  .about_navigate {
    border-radius: 70px;
    border: 1.4px solid white;
    width: 84px;
  }

  .about_navigate button {
    width: 42px;
    height: 42px;
    transform: translateX(-0.7px);
  }

  .about_navigate svg {
    top: 14.7px;
  }

  .about_navigate .left {
    left: 15.4px;
  }

  .about_navigate .right {
    right: 15.4px;
  }

  .about_navigate button.active {
    transform: translateX(42.7px);
  }

  .about_navigate svg{
    width:8px;
    top: 12px;
  }

  .content_navigate div{
    width: 12px;
    height: 12px;
  }

  .about_info{
    max-height: 300px;
  }

  .about_preview{
    max-height: 300px;
  }
}

@media(max-width: 900px){
  .play img{
    width: 80px;
    height:80px;
  }
}

@media(max-width: 768px){
  .play img{
    width:80px;
    height:80px;
  }

  section{
    margin-bottom: 100px;
  }

  .about_preview{
    display:none;
  }

  .mobile_play{
    display: block !important;
  }

  .play img{
    margin-top: 20px;
  }

  .about_container{
    width: 100%;
    flex-direction: column !important;
  }

  .about_navigate {
    border-radius: 40px;
    border: 0.8px solid white;
    width: 55px;
  }

  .about_navigate button {
    width: 30px;
    height: 30px;
    transform: translateX(-0.4px);
    padding: 0;
  }

  .about_navigate .left {
    left: 10px
  }

  .about_navigate .right {
    right: 10px;
  }

  .about_navigate button.active {
    transform: translateX(25.4px);
  }

  .about_navigate svg {
    width: 6px;
    top: 6px;
  }

  .content_navigate div {
    width: 10px;
    height: 10px;
  }

  .play img{
    width:60px;
    height:60px;
  }

  .about_info{
    height: 280px;
  }

  .info-btn button{
    font-size: 14px !important;
    padding: 15px;
  }

  section{
    padding: 25px 30px;
  }


  h4{
    max-width: 350px;
  }


  .about_info{
    height:290px;
    min-width: 0px;
  }

}

@media(max-width: 480px){
  section{
    margin-bottom: 80px;
  }

  .play img{
    width:44px;
    height:44px;
  }

  .play img{
    margin-top: 12px;
  }

  .info-btn button{
    font-size: 12px !important;
  }
  section{
    padding: 25px 10px;
  }

  .about_info{
    height:250px;
  }
}

</style>
