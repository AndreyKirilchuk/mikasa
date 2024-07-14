<script setup>
  import { reactive, ref } from 'vue'

  const thisVideo = ref({})
  const thisEdge = ref('video');

  const videos = reactive([
    {id: '1', 'name': 'Почему выбирают нас', 'text': 'Узнайте больше о компании, посмотрев видео',},
  ])

  thisVideo.value = videos[0]

  const toggleEdge = () => {
    if(thisEdge.value === 'video'){
      thisEdge.value = 'img'
    }else{
      thisEdge.value = 'video'
    }
  }
</script>

<template>
  <div class="container">
    <div class="edge_container">
      <div>
        <h4 class="block_title">{{ thisVideo.name}}</h4>
        <span>{{ thisVideo.text}}</span>
      </div>

      <div :style="{background: `url(${thisVideo.img})`, }" class="edge_preview">
        <a class="play" :class="{'active': (thisEdge.value === 'video')}">
          <img src="/big_play.svg" alt="">
        </a>
      </div>
    </div>

    <nav>
      <div class="edge_navigate">

      </div>

      <div class="content_navigate">

      </div>
    </nav>
  </div>
</template>

<style scoped>
  nav{
    display: flex;
    justify-content: space-between;
  }

  .edge_container{
    display: flex;
    justify-content: space-between;
  }

  a{
    display: none;
  }

  a.active{
    display: block;
  }

  .edge_preview{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: green !important;
  }

  span{
    font-size: 24px;
    font-weight: 500;
    color: #ffffffb3;
  }
</style>