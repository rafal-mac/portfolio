<template>
  <div class="fullscreen-profile d-flex flex-column">
    <div class="m-auto position-relative">
      <p class="big-text">
        Hello<span class="dot">.</span>
        <br>
        I am Rafał
      </p>
      <who-am-i class="position-absolute who-am-i" />
    </div>
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

.who-am-i {
  left: 30%;
}

.dot {
  color: #007bff;
}

.big-text {
  font-size: 15vw;
  line-height: 100%;
}
@media only screen and (min-width: 768px) {
  .big-text {
    font-size: 10vw;
  }
}
</style>
