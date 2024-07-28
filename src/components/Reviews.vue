<script setup>
import { inject, reactive } from 'vue'
import Button from '@/components/UI components/Button.vue'

const reviews = reactive([
  {
    name: 'Тимур Ибрагимов',
    text: 'MeCasa построила для меня дом мечты! Профессионализм, внимание к деталям и качество работы — вот что отличает эту компанию. Рекомендую MeCasa всем, кто хочет создать свой идеальный дом!',
    img: '/avatar.png',
    video: 'https://www.youtube.com/embed/Ue0_YwonJyE?si=fup82kb8aQs6vegd'
  },
  {
    name: 'Эльвира Галяутдинова',
    text: 'Сотрудничество с MeCasa было легким и приятным. Они проявили высокий профессионализм и ответственность на каждом этапе строительства. Мой дом был построен в срок и в пределах бюджета, а качество работы просто потрясающее.',
    img: '/avatar.png',
    video: 'path/to/elvira_video.mp4'
  },
  {
    name: 'Андрей Гаврилов',
    text: 'MeCasa построила для меня дом мечты! Профессионализм, внимание к деталям и качество работы — вот что отличает эту компанию. Рекомендую MeCasa всем, кто хочет создать свой идеальный дом!',
    img: '/avatar.png',
    video: 'path/to/andrei_video.mp4'
  },
  {
    name: 'Руслан Набулин',
    text: 'Сотрудничество с MeCasa было легким и приятным. Они проявили высокий профессионализм и ответственность на каждом этапе строительства. Мой дом был построен в срок и в пределах бюджета, а качество работы просто потрясающее.',
    img: '/avatar.png',
    video: 'path/to/ruslan_video.mp4'
  }
])

const { moreReviews, openModal } = inject('Reviews')
</script>

<template>
  <div class="container">
    <div class="link_block">
      <div id="reviews"></div>
    </div>

    <h2 class="block_title" v-motion-slide-visible-once-left>Что говорят наши клиенты</h2>
    <div class="reviews_container">
      <div class="review" v-for="review in reviews" v-motion-slide-visible-once-bottom>
        <div class="review_name">
          <div>
            <img :src="review.img" :alt="review.img" class="avatar" />
          </div>

          <div>
            <h4>{{ review.name }}</h4>
            <img class="img-btn" src="/video_button.svg" alt="" @click="openModal(review.video)" />
          </div>
        </div>
        <div class="review_text">
          {{ review.text }}
        </div>
      </div>
    </div>
    <div class="btn_container" v-motion-slide-visible-once-bottom>
      <Button text="Больше отзывов" @click="moreReviews" />
    </div>
  </div>
</template>

<style scoped>
.reviews_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  padding: 60px;
}

.review {
  border-radius: 10px;
  padding: 50px;
  background-color: rgba(32, 33, 34, 0.6);
  border: 1px solid #444444;
  color: white;
}

.review_name {
  font-size: 32px;
  font-weight: 600;
  display: flex;
  gap: 25px;
  align-items: center;
}

.review_text {
  font-size: 20px;
  font-weight: 400;
  margin-top: 25px;
}

h4 {
  margin: 5px 0px;
}

.img-btn {
  cursor: pointer;
}

button {
  margin: 0 auto;
  border-radius: 10px;
  padding: 25px 30px;
}

@media(max-width: 1600px){


  h4{
    font-size: 24px;
  }

  .review{
    padding: 35px;
  }

  .avatar{
    width: 100px;
  }

  button{
    font-size:20px;
  }

}

@media(max-width: 1440px){
  .reviews_container {
    padding: 35px 0px;
  }
}

@media(max-width: 1400px){
  .review_text{
    font-size:16px;
  }
}

@media(max-width: 1200px){
  h4{
    font-size: 20px;
  }
  .review{
    padding: 30px;
  }
  .avatar{
    width: 90px;
  }

  button{
    padding: 20px 25px;
  }
  .img-btn{
    width: 35px;
  }
  .review_text{
    font-size:14px;
    margin-top: 10px;
  }

  .reviews_container{
    gap: 20px;
  }
}

@media(max-width: 1024px){
  h4{
    font-size: 18px;
  }
  .review{
    padding: 25px;
  }
  .avatar{
    width: 75px;
  }

  button{
    font-size: 16px;
  }
  .img-btn{
    width: 30px;
  }
  .review_text{
    font-size:12px;
  }

  .reviews_container{
    gap: 15px;
  }
}

@media(max-width: 768px){
  .reviews_container{
    grid-template-columns: repeat(1, 1fr);
  }
  h4{
    font-size: 20px;
  }
  .review{
    padding: 30px;
    margin:0 auto;
    max-width: 500px;
  }
  .avatar{
    width: 90px;
  }

  .img-btn{
    width: 35px;
  }
  .review_text{
    font-size:14px;
  }
}

@media(max-width: 480px){
  h4{
    font-size: 12px;
  }
  .review{
    padding: 20px;
  }
  .avatar{
    width: 50px;
  }

  .img-btn{
    width: 20px;
  }

  .review_text{
    font-size:9px;
  }

  button{
    padding: 14px 16px;
  }
}

</style>
