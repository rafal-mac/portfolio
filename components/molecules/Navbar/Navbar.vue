<template>
  <div :class="{ 'is-active': isActive }" class="navbar">
    <div class="d-flex flex-column">
      <a href="#experience" class="link mr-auto  d-sm-block d-none" @click="toggleActive">
        Experience
      </a>
      <a href="#experience" class="link mr-auto  d-sm-none d-block" @click="toggleActive">
        Jobs
      </a>
      <a href="#skills" class="link mr-auto" @click="toggleActive">
        Skills
      </a>
      <a href="#contact-me" class="link mr-auto" @click="toggleActive">
        Contact me
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  @Prop({ type: Boolean }) readonly isActive!: boolean;

  @Emit()
  toggleActive (): boolean {
    return false
  }
}
</script>

<style>
.link{
  font-size: 50px;
  color: #007bff;
}
@media only screen and (min-width: 768px) {
  .link {
    font-size: 80px;
  }
}

.navbar {
  position: fixed;
  z-index: 2500;
  width: 100%;
  transform: translate(0, -100%);
  -webkit-transform: translate(0, -100%);
  -ms-transform: translate(0, -100%);
  -o-transform: translate(0, -100%);
  transition: transform 0.2s ease-in-out;
  -ms-transition: -ms-transform 0.2s ease-in-out;
  min-height: 100vh;
  color: #007bff;
  text-align: left;
  background: white;
  height: 100vh;
  padding-left: 40px;
}

.is-active {
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
}
</style>
