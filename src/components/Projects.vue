<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'

import Button from '@/components/UI components/Button.vue'

const projects = reactive([
  {
    id: 1,
    main_name: `Проект <span style="color:#9238a8">№1</span>`,
    name: 'Проект 1',
    preview: '/project1.svg',
    images: ['/project1.svg', '/project2.svg', '/project3.svg'],
    text: 'Дом 500 кв м, внутри 17 спален, 6 санузлов и две кухни, он был спроектирован в стиле барокко, были учтены все требования заказчика, не смотря на то, что дом был выполнен в архаичном стиле, он соответсвует всем современным тенденциям',
    view: false
  },
  {
    id: 2,
    main_name: `Проект <span style="color:#9238a8">№2</span>`,
    name: 'Проект 2',
    preview: '/project2.svg',
    images: ['/project2.svg', '/project1-2.svg', '/project1-3.svg'],
    text: 'asd',
    view: true
  },
  {
    id: 3,
    main_name: `Проект <span style="color:#9238a8">№3</span>`,
    name: 'Проект 3',
    preview: '/project3.svg',
    images: ['/project3.svg', '/project1-2.svg', '/project1-3.svg'],
    text: 'asd',
    view: true
  },
  {
    id: 4,
    main_name: `Проект <span style="color:#9238a8">№4</span>`,
    name: 'Проект 4',
    preview: '/project4.svg',
    images: ['/project4.svg', '/project1-2.svg', '/project1-3.svg'],
    text: 'asd',
    view: true
  },
  {
    id: 5,
    main_name: `Проект <span style="color:#9238a8">№5</span>`,
    name: 'Проект 5',
    preview: '/project5.svg',
    images: ['/project5.svg', '/project1-2.svg', '/project1-3.svg'],
    text: 'asd',
    view: true
  }
])

const slideAnimate = ref(false)
const mainProjectAnimate = ref(false)
const currentImageIndex = ref(0)
const screenWidth = ref(window.innerWidth);

const mainProject = ref({
  id: 1,
  main_name: `Проект <span style="color:#9238a8">№5</span>`,
  name: 'Проект 1',
  preview: '/project1.svg',
  images: ['/project1.svg', '/project2.svg', '/project3.svg'],
  text: 'Дом 500 кв м, внутри 17 спален, 6 санузлов и две кухни, он был спроектирован в стиле барокко, были учтены все требования заказчика, не смотря на то, что дом был выполнен в архаичном стиле, он соответсвует всем современным тенденциям',
  view: false
})

const showProject = (id) => {
  projects.find((item) => item.id === mainProject.value.id).view = true
  mainProject.value = projects.find((item) => item.id === id)
  projects.find((item) => item.id === id).view = false
  currentImageIndex.value = 0

  mainProjectAnimate.value = true
  setTimeout(() => {
    mainProjectAnimate.value = false
  }, 500)

  console.log(mainProject.value)
}

const slideAnimteFade = () => {
  slideAnimate.value = true

  setTimeout(() => {
    slideAnimate.value = false
  }, 200)
}

const nextImage = () => {
  slideAnimteFade()
  currentImageIndex.value = (currentImageIndex.value + 1) % mainProject.value.images.length
}

const prevImage = () => {
  slideAnimteFade()
  currentImageIndex.value =
    (currentImageIndex.value - 1 + mainProject.value.images.length) %
    mainProject.value.images.length
}

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

</script>

<template>
  <div class="projects_container">
    <div class="container" id="projects">
      <h2 class="block_title">Готовые проекты</h2>
      <div class="project">
        <div
          class="main_project"
          v-motion-slide-visible-once-left
          :class="{ 'fade-in': mainProjectAnimate }"
        >
          <div class="main_preview">
            <img
              :class="{ 'fade-in': slideAnimate }"
              :src="mainProject.images[currentImageIndex]"
              :alt="mainProject.images[currentImageIndex]"
              width="100%"
              height="500px"
            />
            <!--          slider nav-->
            <div class="prev" @click="nextImage">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" transform="matrix(-1 0 0 1 60 0)" fill="white" />
                <path
                  d="M33 20L23.6837 29.5272C23.3036 29.9159 23.3036 30.5369 23.6837 30.9255L33 40.4528"
                  stroke="#14161A"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="next" @click="prevImage">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="white" />
                <path
                  d="M27 20L36.3163 29.5272C36.6964 29.9159 36.6964 30.5369 36.3163 30.9255L27 40.4528"
                  stroke="#14161A"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <h3 v-html="mainProject.main_name"></h3>
          <span class="text">
            {{ mainProject.text }}
          </span>
          <a href="#form">
            <Button text="Хочу такой дом" :arrow="true" />
          </a>
        </div>

        <div class="project_list"  v-if="screenWidth > 1024"  v-motion-slide-visible-once-bottom >
          <div
            class="project_item"
            v-for="(project, index) in projects"
            :key="index"
            v-auto-animate
            v-show="project.view"
          >
            <span v-if="project.view">
              <div class="image-container" @click="showProject(project.id)">
                <img :src="project.preview" :alt="project.preview" height="300px" />
              </div>
              <h4>{{ project.name }}</h4>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="project_list" v-if="screenWidth <= 1024" v-motion-slide-visible-once-bottom>
      <div
        class="project_item"
        v-for="(project, index) in projects"
        :key="index"
        v-auto-animate
        v-show="project.view"
      >
            <span v-if="project.view">
              <div class="image-container" @click="showProject(project.id)">
                <img :src="project.preview" :alt="project.preview" height="300px" />
              </div>
              <h4>{{ project.name }}</h4>
            </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2{
  margin-bottom:50px;
}

.projects_container {
  margin-bottom: 200px;
}

.project {
  width: 100%;
  display: flex;
  gap: 100px;
  max-height: 1550px;
}

.main_project {
  grid-column: span 2;
  height: fit-content;
  position: sticky;
  top: 150px;
  border-radius: 20px;
}

h3 {
  margin: 25px 0px;
}

.main_preview{
  position: relative;
}

.main_preview img {
  object-fit: cover;
  border-radius: 20px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}

svg circle,
svg path {
  transition: 0.3s;
}

.prev:hover svg circle,
.next:hover svg circle {
  fill: #9238a8;
}

.prev:hover svg path,
.next:hover svg path {
  stroke: white;
}

.prev {
  left: 25px;
}

.next {
  right: 25px;
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

h3, h4 {
  font-size: 36px;
  color: white;
  font-weight: 600;
}

h4{
  margin-bottom: 0;
  margin-top: 20px;
}

.project_list {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

button {
  padding: 25px 35px;
  border-radius: 10px;
  margin-top: 25px;
}

.image-container {
  position: relative;
  height: fit-content;
  width: 500px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.image-container img {
  width: 100%;
  height: 300px;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.2);
}

.text {
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}

@media(max-width: 1600px){
  .main_project{
    top: 120px;
  }
  h2{
    margin-bottom:40px;
  }
  h3, h4{
    font-size: 28px;
  }
  .text{
    font-size: 16px;
  }
  button{
    font-size: 20px;
    padding:25px;
  }
  .main_preview img{
    height: 400px;
    background-size: 20%;
  }
  .prev svg, .next svg{
    width: 50px;
    height: 50px;
  }
  .project{
    gap: 30px;
    justify-content: space-between;
    width: 100%;
    max-height: 1250px;
  }
  .image-container{
    width: fit-content;
  }
  .image-container img{
    width: 400px;
    height: 240px;
  }
  .project_item{
    width: 400px;
  }
  .project_list{
    gap: 30px;
  }
}

@media(max-width: 1300px){
  .main_project{
    top: 150px;
  }
  .main_preview img{
    height: 350px;
  }
}

@media(max-width: 1200px){
  h2{
    margin-bottom:35px;
  }
  .prev svg, .next svg{
    width: 45px;
    height: 45px;
  }
  .image-container img{
    width: 310px;
    height: 186px;
  }
  .project_item{
    width: 310px;
  }
}

@media(max-width: 1100px){
  h2{
    margin-bottom:20px;
  }
  h3{
    margin:10px 0px;
    font-size:24px;
  }
  h4{
    margin-top: 10px;
    font-size: 22px;
  }
  .text{
    font-size: 14px;
  }
  button{
    font-size: 14px;
    padding:20px;
  }
  .main_preview img{
    height: 300px;
  }
  .project_list{
    gap: 20px;
  }
  .project{
    gap: 20px;
  }
}

@media(max-width: 1024px){
  .main_preview img{
    height: 400px;
  }

  .main_project{
    top: 0;
    position: inherit;
    width:100%;
  }

  .project{
    flex-direction: column;
  }

  .project_list{
    margin-top: 20px;
    flex-direction: row;
    overflow-x: scroll;
    margin-left: 60px;
  }

  .projects_container{
    margin-bottom: 0;
  }
}

@media(max-width: 900px){
  .main_preview img{
    height: 350px;
  }
}

@media(max-width: 768px){
  .project_list{
    margin-left: 40px;
  }

  .image-container img{
    width: 250px;
    height: 150px;
  }
}

@media(max-width: 580px){
  .main_preview img{
    height: 250px;
  }
  .prev svg, .next svg{
    width:35px;
    height: 35px;
  }
}

@media(max-width: 500px){
  .prev svg, .next svg{
    width:25px;
    height: 25px;
  }

  .project_list{
    margin-left: 10px;
  }

  .main_preview img{
    height: 200px;
  }

  h3{
    font-size: 14px;
  }

  h4{
    font-size: 12px
  }

  .image-container img{
    width: 160px;
    height: 96px;
  }

  .text{
    font-size: 8px;
  }

  button{
    margin-top:10px;
    font-size:14px;

  }
}

@media(max-width: 380px){
  .main_preview img{
    height: 150px;
  }

  .prev svg, .next svg{
    width:20px;
    height: 20px;
  }

}
</style>
