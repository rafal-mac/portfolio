<template>
  <div class="fullscreen-contact-me d-flex">
    <div class="m-auto">
      <div class="d-flex position-relative contact-me-section-title-wrapper mb-4">
        <p class="contact-me-section-title mr-auto mr-sm-0 ml-sm-auto">
          Let's work together<span class="dot">.</span>
        </p>
      </div>
      <div class="form-wrapper d-flex flex-column flex-lg-row p-4 p-sm-5">
        <div class="d-flex flex-column pl-lg-4">
          <p class="contact-me-title">
            Contact me
          </p>
          <p class="contact-me-text">
            Send me a message and I will get back to you within 24 hours. (give or take)
          </p>
          <div class="mx-auto my-4 my-lg-auto">
            <b-button class="mb-2" variant="outline-primary" size="lg" href="tel:+447545133154">
              <b-img-lazy class="mr-0 mr-sm-2" src="../../../assets/phone.svg" alt="phone" height="15px" />
              <span class="d-none d-sm-inline-block">+44 7545 133154</span>
            </b-button>
            <b-button class="mb-2" variant="outline-primary" size="lg" href="mailto:maciejewskirafal99@gmail.com">
              <b-img-lazy class="mr-0 mr-sm-2" src="../../../assets/email.svg" alt="email" height="15px" />
              <span class="d-none d-sm-inline-block">maciejewskirafal99@gmail.com</span>
            </b-button>
          </div>
          <social-icons class="mx-auto mx-lg-0 mb-4 mt-auto" />
        </div>
        <div class="form p-4 ml-auto">
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
            <input type="hidden" name="form-name" value="contact">
            <p>
              <label for="name">Your Name:</label>
              <input class="w-100" type="text" name="name">
            </p>
            <p>
              <label for="email">Your Email:</label>
              <input class="w-100" type="email" name="email">
            </p>
            <p>
              <label for="message">Message:</label>
              <textarea class="w-100" name="message" />
            </p>
            <p>
              <b-button variant="primary" type="submit">
                Send
              </b-button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SocialIcons from '~/components/molecules/SocialIcons/SocialIcons.vue'

@Component({
  components: {
    SocialIcons
  }
})
export default class ContactMeSection extends Vue {

}
</script>
<style scoped>
input, textarea{
    background-color: #f0f0f2;
    border: none;
}

.contact-me-title {
  font-size: 2.5rem;
  color: white
}

.contact-me-text {
  color: #999AB6;
  width: 100%;
}
@media only screen and (min-width: 992px) {
  .contact-me-text {
    width: 70%;
  }
}

.form-wrapper {
  background-color: #01044A;
  border-radius: 20px;
  /* max-width: 300px; */
}
@media only screen and (min-width: 992px) {
  .form-wrapper {
    width: 1000px;
  }
}

.form {
  background-color: white;
  border-radius: 20px;
  width: 100%;
}
@media only screen and (min-width: 992px) {
  .form {
    width: 45%;
  }
}

.fullscreen-contact-me {
  height: 100vh;
}

.dot {
  color: #007bff;
}

.contact-me-section-title-wrapper {
  font-size: 2.5rem;
  width: 100%;
}
@media only screen and (min-width: 1200px) {
  .contact-me-section-title-wrapper {
    width: 80%;
    font-size: 5rem;
  }
}
.contact-me-section-title::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30%;
    height: 10px;
    background: #007bff;
}
@media only screen and (max-width: 575px) {
  .contact-me-section-title::before {
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
