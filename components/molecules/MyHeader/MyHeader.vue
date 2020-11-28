<template>
  <div>
    <div class="header d-flex flex-row justify-content-between">
      <h1 class="text-dark">
        portfolio_
      </h1>
      <burger-icon class="burger" @toggle-active="toggleActive" />
    </div>
    <navbar :is-active="isActive" />
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3000;
    background: transparent;
    transition: top 0.3s ease-in-out;
    padding: 40px;
}
</style>
