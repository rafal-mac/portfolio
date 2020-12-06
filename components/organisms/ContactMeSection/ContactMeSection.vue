<template>
  <div class="fullscreen-contact-me d-flex">
    <div class="m-auto">
      <div class="d-flex position-relative experience-title-wrapper mx-auto mb-4">
        <p class="experience-title mr-auto mr-sm-0 ml-sm-auto">
          Let's work together<span class="dot">.</span>
        </p>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <b-input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <b-input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message" /></label>
        </p>
        <p>
          <button type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactMeSection extends Vue {

}
</script>
<style scoped>
.fullscreen-contact-me {
  height: 100vh;
}

.dot {
  color: #007bff;
}

.experience-title-wrapper {
  font-size: 2.5rem;
  width: 100%;
}
@media only screen and (min-width: 1200px) {
  .experience-title-wrapper {
    width: 80%;
    font-size: 5rem;
  }
}
.experience-title::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30%;
    height: 10px;
    background: #007bff;
}
@media only screen and (max-width: 575px) {
  .experience-title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25%;
    height: 10px;
    background: #007bff;
  }
}
</style>
