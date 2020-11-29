<template>
  <div class="fullscreen-profile position-relative d-flex flex-column">
    <div class="my-auto mx-auto position-relative">
      <p class="big-text">
        Hello<span class="dot">.</span>
        <br>
        I am Rafal
      </p>
      <who-am-i class="position-absolute who-am-i" />
    </div>
    <spinner class="spinner position-absolute" />
    <svg class="see-more mx-auto" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 473.654 473.654" style="enable-background:new 0 0 512 512" xml:space="preserve">
      <a class="see-more-link" href="#about">
        <g>
          <circle xmlns="http://www.w3.org/2000/svg" style="" cx="236.827" cy="236.827" r="236.827" fill="#000000" data-original="#6ec2cb" class=""/>
          <path xmlns="http://www.w3.org/2000/svg" style="" d="M331.416,180.767c-29.236,29.236-58.476,58.476-87.712,87.715  c-29.307-29.307-58.618-58.618-87.925-87.929c-25.56-25.564-65.08,14.259-39.456,39.883c35.885,35.885,71.766,71.77,107.651,107.655  c10.841,10.845,28.907,10.549,39.666-0.213c35.885-35.885,71.766-71.77,107.651-107.655  C396.859,194.66,357.036,155.14,331.416,180.767z" fill="#ffffff" data-original="#ffffff" class=""/>
        </g>
      </a>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WhoAmI from '~/components/atoms/WhoAmI/WhoAmI.vue'
import Spinner from '~/components/atoms/Spinner/Spinner.vue'

@Component({
  components: {
    WhoAmI,
    Spinner
  }
})
export default class Profile extends Vue {
}
</script>
<style>
.fullscreen-profile {
  height: 100vh;
}

.see-more {
  color: black;
  font-size: 4vw;
  margin-bottom: 50px;
}
.see-more-link:hover {
  opacity: 0.5;
}

.who-am-i {
  right: 10%;
}

.spinner {
  top: 0;
  left: 0;
  z-index: -1;
}

.dot {
  color: #007bff;
}

.big-text {
  font-size: 15vw;
  line-height: 100%;
}
</style>
