<script setup>

</script>

<template>
  <div class="contacts_container">
    <div class="link_block">
      <div id="contacts"></div>
    </div>
    <div class="container">
      <h2 class="block_title" v-motion-slide-visible-once-left>Контакты</h2>
    </div>
    <div class="contacts_inner">


      <div class="contacts_text_absolute">
        <div class="container" v-motion-slide-visible-once-bottom>
          <div class="contacts_text">
            <div>
              В ПН-ПТ с 9:00 до 18:00<br />
              В СБ-ВС по договоренности
            </div>

            <div class="white">
              +7 (927) 336-08-88<br />
              ivanov-inan@gmail.com
            </div>

            <div>Верхнеторговая 2<br/>
              Офис 1410 г. Уфа
            </div>
          </div>
        </div>
      </div>


      <div class="contacts_info">
        <div class="contacts_messengers" v-motion-slide-visible-once-left>
          <a href="" class="messenger">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.279 24.8438C10.279 27.6228 11.0603 30.3348 12.5335 32.6674L12.8795 33.2254L11.3951 38.6496L16.9643 37.1875L17.5 37.5112C19.7545 38.8504 22.3437 39.5647 24.9888 39.5647H25C33.1027 39.5647 39.8772 32.9688 39.8772 24.8549C39.8772 20.9263 38.1808 17.2321 35.4018 14.4531C32.6116 11.6629 28.9286 10.1339 25 10.1339C16.8862 10.1339 10.2902 16.7299 10.279 24.8438ZM30.6696 33.2589C29.2634 33.471 28.1696 33.3594 25.3683 32.154C21.2612 30.3795 18.471 26.4062 17.9018 25.6027C17.8571 25.5357 17.8237 25.5022 17.8125 25.4799C17.5893 25.1897 16.0045 23.0804 16.0045 20.904C16.0045 18.8504 17.0089 17.7902 17.4777 17.2991C17.5112 17.2656 17.5335 17.2433 17.5558 17.2098C17.9576 16.7634 18.4375 16.6518 18.7388 16.6518C19.029 16.6518 19.3304 16.6518 19.5871 16.6629H19.6763C19.933 16.6629 20.2567 16.6629 20.5804 17.4219C20.7143 17.7455 20.9152 18.2366 21.1272 18.7388C21.4955 19.6317 21.875 20.558 21.942 20.7031C22.0536 20.9263 22.1317 21.183 21.9754 21.4732C21.596 22.2321 21.2054 22.6339 20.9375 22.9241C20.5915 23.2812 20.4353 23.4487 20.6808 23.8839C22.3884 26.8192 24.096 27.8348 26.6964 29.1406C27.1429 29.3638 27.3996 29.3304 27.6562 29.029C27.9129 28.7388 28.7612 27.7344 29.0513 27.2991C29.3415 26.8527 29.6429 26.9308 30.0446 27.0759C30.4464 27.221 32.6228 28.2924 33.0692 28.5156C33.1585 28.5603 33.2366 28.5938 33.3036 28.6272C33.6161 28.7835 33.8281 28.8839 33.9174 29.029C34.0179 29.2411 34.0179 30.1339 33.6496 31.1607C33.2812 32.1987 31.5179 33.1362 30.6696 33.2589ZM50 7.14286C50 3.20312 46.7969 0 42.8571 0H7.14286C3.20312 0 0 3.20312 0 7.14286V42.8571C0 46.7969 3.20312 50 7.14286 50H42.8571C46.7969 50 50 46.7969 50 42.8571V7.14286ZM16.529 40.3906L7.14286 42.8571L9.65402 33.683C8.10268 31.0045 7.28795 27.9576 7.28795 24.8326C7.29911 15.0781 15.2344 7.14286 24.9888 7.14286C29.721 7.14286 34.1629 8.98438 37.5112 12.3326C40.8482 15.6808 42.8571 20.1228 42.8571 24.8549C42.8571 34.6094 34.7433 42.5446 24.9888 42.5446C22.0201 42.5446 19.1071 41.7969 16.529 40.3906Z"
                fill="white"
              />
            </svg>
          </a>

          <a href="" class="messenger">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7152 0C7.87404 -2.09497e-07 5.14922 1.12835 3.13985 3.13695C1.13049 5.14554 0.00109106 7.86993 0 10.7111V39.2848C0 42.1267 1.12892 44.8521 3.1384 46.8616C5.14788 48.8711 7.87333 50 10.7152 50H39.2889C42.1301 49.9989 44.8545 48.8695 46.8631 46.8601C48.8717 44.8508 50 42.126 50 39.2848V10.7111C49.9989 7.87064 48.8701 5.14687 46.8616 3.1384C44.8531 1.12992 42.1294 0.00109058 39.2889 0H10.7152ZM42.371 10.7275C42.371 11.546 42.0458 12.331 41.4671 12.9098C40.8883 13.4885 40.1033 13.8137 39.2848 13.8137C38.4663 13.8137 37.6814 13.4885 37.1026 12.9098C36.5238 12.331 36.1987 11.546 36.1987 10.7275C36.1987 9.90901 36.5238 9.12403 37.1026 8.54526C37.6814 7.9665 38.4663 7.64135 39.2848 7.64135C40.1033 7.64135 40.8883 7.9665 41.4671 8.54526C42.0458 9.12403 42.371 9.90901 42.371 10.7275ZM25.0062 16.439C22.7362 16.439 20.5592 17.3407 18.9541 18.9458C17.349 20.551 16.4472 22.728 16.4472 24.9979C16.4472 27.2679 17.349 29.4449 18.9541 31.05C20.5592 32.6552 22.7362 33.5569 25.0062 33.5569C27.2761 33.5569 29.4532 32.6552 31.0583 31.05C32.6634 29.4449 33.5651 27.2679 33.5651 24.9979C33.5651 22.728 32.6634 20.551 31.0583 18.9458C29.4532 17.3407 27.2761 16.439 25.0062 16.439ZM12.3282 24.9979C12.3282 21.6366 13.6635 18.413 16.0403 16.0362C18.4171 13.6594 21.6407 12.3241 25.0021 12.3241C28.3634 12.3241 31.587 13.6594 33.9638 16.0362C36.3406 18.413 37.6759 21.6366 37.6759 24.9979C37.6759 28.3593 36.3406 31.5829 33.9638 33.9597C31.587 36.3365 28.3634 37.6718 25.0021 37.6718C21.6407 37.6718 18.4171 36.3365 16.0403 33.9597C13.6635 31.5829 12.3282 28.3593 12.3282 24.9979Z"
                fill="white"
              />
            </svg>
          </a>

          <a href="" class="messenger">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 3.5C6.62274e-07 7.03333 0 12.6833 0 24V26C0 37.3 6.62274e-07 42.95 3.5 46.5C7.03333 50 12.6833 50 24 50H26C37.3 50 42.95 50 46.5 46.5C50 42.9667 50 37.3167 50 26V24C50 12.7 50 7.05 46.5 3.5C42.9667 6.62274e-07 37.3167 0 26 0H24C12.7 0 7.05 6.62274e-07 3.5 3.5ZM8.43333 15.2167H14.1667C14.35 24.75 18.55 28.7833 21.8833 29.6167V15.2167H27.2667V23.4333C30.55 23.0833 34.0167 19.3333 35.1833 15.2H40.55C40.1121 17.3395 39.2379 19.3657 37.9818 21.1523C36.7258 22.9388 35.115 24.4472 33.25 25.5833C35.3318 26.6191 37.1702 28.0845 38.644 29.883C40.1178 31.6814 41.1935 33.772 41.8 36.0167H35.8833C34.6167 32.0667 31.45 29 27.2667 28.5833V36.0167H26.6C15.2 36.0167 8.7 28.2167 8.43333 15.2167Z"
                fill="white"
              />
            </svg>
          </a>

          <a href="" class="messenger">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40 0C45.5228 0 50 4.47715 50 10V25V40C50 45.5228 45.5228 50 40 50H25H10C4.47717 50 0 45.5228 0 40V25V10C0 4.47715 4.47717 0 10 0H25H40ZM37.2768 17.1317L33.1752 36.4676C32.859 37.8441 32.1057 38.1975 30.9152 37.5279L28.0334 35.4052C26.0878 33.972 23.3925 34.1497 21.6518 35.8259C21.1032 36.3745 20.4424 35.782 20.4967 35.0081L20.7208 31.815C20.799 30.7006 21.3056 29.6598 22.1345 28.9108L32.4219 19.615C32.6265 19.4289 32.6637 19.2894 32.5335 19.1964C32.3289 19.0476 32.0312 19.1034 31.6406 19.3638L21.2313 25.9178C18.7539 27.4777 15.7174 27.8736 12.9229 27.0011L11.1607 26.4509C10.7143 26.3207 10.4167 26.1393 10.2679 25.9068C10.119 25.6743 10.1423 25.4278 10.3376 25.1674C10.5329 24.907 10.9003 24.6745 11.4398 24.4699L35.5469 15.1786C36.1421 14.9554 36.6211 15.0205 36.9838 15.3739C37.3466 15.7273 37.4442 16.3132 37.2768 17.1317Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="contacts_map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ce10c0a95856d11ba9470a50001547eb52c0f315f30886c36c617005fbb9b17&amp;source=constructor&theme=dark"
          width="100%"
          height="100%"
          frameborder="0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>


.contacts_inner {
  display: flex;
  border-bottom: 1px solid #444444;
  border-top: 1px solid #444444;
  margin-top: 50px;
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  font-size: 30px;
  font-weight: 300;
}

.contacts_info {
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: flex-end;
}

@media (max-width: 1920px) {
  .contacts_info{
    max-width: 800px;
  }
}

.contacts_map {
  width: 100%;
  height: 650px;
  max-width: 1200px;
  margin:0 auto;
  z-index: 100;
}

.contacts_text {
  display: flex;
  flex-direction: column;
  padding: 70px 0px;
  justify-content:space-between;
  height: 520px;
}


.contacts_text_absolute{
  position: absolute;
  width: 100%;
}

.white {
  color: white;
}

.contacts_messengers {
  border-top: 1px solid #444444;
  display: flex;
  justify-content: space-around;
  padding: 35px 0px;
  width: 100%;
}

path {
  fill: #ffffffb3;
  transition: 0.3s;
}

a:hover svg path {
  fill: white;
}

@media(max-width: 1600px){
  .contacts_inner{
    font-size: 24px;
  }

  .contacts_map{
    height: 520px;
  }

  svg{
    width: 40px;
    height: 40px;
  }

  .contacts_text{
    padding: 60px 0px;
  }

  .contacts_messengers{
    padding:30px 60px;
    gap: 100px;
  }

  .contacts_text{
    height: 420px;
  }
}

@media (max-width: 1200px) {
  .contacts_messengers{
    gap: 80px;
  }
}

@media(max-width: 1024px){
  .contacts_inner{
    font-size: 16px;
  }

  .contacts_text{
    padding:40px 0px;
    gap: 40px;
  }

  .contacts_map{
    height: 365px;
  }

  svg{
    width: 30px;
    height: 30px;
  }

  .contacts_messengers{
    gap: 60px;
  }

  .contacts_text{
    height: 275px;
  }
}

@media(max-width: 768px){
  .contacts_messengers{
    gap: 40px;
    border-top: 1px solid #444444;
    justify-content: inherit;
    padding: 20px 41px;
  }

  .contacts_inner{
    flex-direction: column;
  }
  .contacts_map{
    height: 400px;
    border-top: 1px solid #444444;
    border-bottom: 1px solid #444444;
    margin-top: 0px;
  }

  .contacts_text_absolute{
    position: inherit;
  }

  .contacts_inner{
    font-size: 20px;
  }

  .contacts_text{
    height: auto;
    justify-content: inherit;
    gap: 25px;
    padding: 20px 0px;
  }
}

@media(max-width: 480px){
  .contacts_messengers{
    padding: 15px 10px;
  }

  .contacts_inner{
    font-size: 14px;
  }

  .contacts_map{
    height: 300px;
    margin-top: 0px;
  }

  .contacts_text{
    gap: 20px;
  }
}

</style>
