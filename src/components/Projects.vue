<script setup>
import { reactive, ref } from 'vue'

  import Button from '@/components/UI components/Button.vue'

  const projects = reactive([
    {id: 1 , name:'Проект 1', img:'/project1.svg', text: 'Дом 500 кв м, внутри 17 спален, 6 санузлов и две кухни, он был спроектирован в стиле барокко, были учтены все требования заказчика, не смотря на то, что дом был выполнен в архаичном стиле, он соответсвует всем современным тенденциям', 'view': false},
    {id: 2 , name:'Проект 2', img:'/project2.svg', text: 'asd', 'view': true},
    {id: 3 , name:'Проект 3', img:'/project3.svg', text: 'asd', 'view': true},
    {id: 4 , name:'Проект 4', img:'/project4.svg', text: 'asd', 'view': true},
    {id: 5 , name:'Проект 5', img:'/project5.svg', text: 'asd','view': true},
  ])

  const mainProjectAnimate = ref(false);

  const mainProject = ref(    {id: 1 , name:'Проект 1', img:'/project1.svg', text: 'Дом 500 кв м, внутри 17 спален, 6 санузлов и две кухни, он был спроектирован в стиле барокко, были учтены все требования заказчика, не смотря на то, что дом был выполнен в архаичном стиле, он соответсвует всем современным тенденциям', 'view': false},);

  const showProject = (id) => {
    projects.find(item => item.id === mainProject.value.id).view = true;
    mainProject.value = projects.find((item) => item.id === id);
    projects.find((item) => item.id === id).view = false;

    mainProjectAnimate.value = true;
    setTimeout(() => {
      mainProjectAnimate.value = false;
    },500)


    console.log(mainProject.value);
  }
</script>

<template>
  <div class="projects_container">
    <div class="container" >
      <h2>Готовые проекты</h2>
      <div class="project">
        <div class="main_project" v-motion-slide-visible-once-left :class="{ 'fade-in': mainProjectAnimate }">
          <img :src="mainProject.img" alt="" width="100%" height="500px">
          <h3>{{ mainProject.name }} <span></span></h3>
          <span class="text">
            {{ mainProject.text }}
          </span>
          <Button text="Хочу такой дом" :arrow="true"/>
        </div>

        <div class="project_list" v-motion-slide-visible-once-bottom>
          <div class="project_item" v-for="project in projects" v-auto-animate>
            <span v-if="project.view">
              <div class="image-container" @click="showProject(project.id)">
                <img :src="project.img" alt="" height="300px">
              </div>
              <h3>{{project.name}}</h3>
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .projects_container {
    padding: 150px 0px;
    border-bottom: 1px solid #444444;
  }

  h2{
    font-size: 54px;
    color: white;
    font-weight: 700;
  }

  .project{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 100px;
  }

  .main_project{
    grid-column:span 2;
    height: 500px;
    position: sticky;
    top: 150px;
    border-radius: 20px;
  }

  .main_project img{
    object-fit: cover;
    border-radius: 20px;
  }

  .fade-in{
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  h3{
    font-size: 36px;
    color: white;
    font-weight: 600;
  }

  .project_list{
    display: flex;
    flex-direction: column;
    flex-grow: 50px;
  }

  button{
    padding: 25px 35px;
    border-radius: 10px;
    margin-top: 25px;
  }

  .image-container {
    position: relative;
    height:fit-content;
    width:500px;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
  }

  .image-container img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  .image-container:hover img {
    transform: scale(1.2);
  }

  .text{
    font-weight: 500;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

</style>