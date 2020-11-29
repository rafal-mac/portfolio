<template>
  <div class="fullscreen-profile position-relative d-flex flex-column">
    <div class="m-auto position-relative">
      <p class="big-text">
        Hello<span class="dot">.</span>
        <br>
        I am Rafal
      </p>
      <who-am-i class="position-absolute who-am-i" />
    </div>
    <spinner class="spinner position-absolute" />
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
  left: 50%;
}

.spinner {
  top: 0;
  left: 10vw;
  z-index: -1;
  opacity: 0.3;
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
