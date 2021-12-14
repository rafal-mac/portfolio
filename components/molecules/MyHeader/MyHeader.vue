<template>
  <div>
    <div class="header d-flex flex-row justify-content-between">
      <h1 class="portfolio my-auto">
        portfolio_
      </h1>
      <b-button href="#contact-me" variant="outline-success" size="md" class="d-none d-md-flex ml-auto mr-5 mb-1">
        <span class="my-auto">CONTACT ME</span>
      </b-button>
      <burger-icon class="burger" :is-active="isActive" @toggle-active="toggleActive" />
    </div>
    <navbar :is-active="isActive" @toggle-active="toggleActive" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BurgerIcon from '~/components/atoms/BurgerIcon/BurgerIcon.vue'
import Navbar from '~/components/molecules/Navbar/Navbar.vue'

@Component({
  components: {
    BurgerIcon,
    Navbar
  }
})
export default class Header extends Vue {
  isActive: boolean = false;

  toggleActive (isActive: boolean): void {
    this.isActive = isActive
  }
}
</script>
<style>
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3000;
    background: transparent;
    transition: top 0.3s ease-in-out;
    padding: 40px;
}

.portfolio {
  font-size: 7vw;
  line-height: 100%;
}
@media only screen and (min-width: 768px) {
  .portfolio {
    font-size: 4vw;
  }
}
</style>
