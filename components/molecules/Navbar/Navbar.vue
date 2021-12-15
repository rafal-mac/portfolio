<template>
  <div :class="{ 'is-active': isActive }" class="navbar">
    <div class="d-flex flex-column">
      <a href="#experience" class="link mr-auto" @click="toggleActive">
        Experience
      </a>
      <a href="#skills" class="link mr-auto" @click="toggleActive">
        Skills
      </a>
      <a href="#education" class="link mr-auto" @click="toggleActive">
        Education
      </a>
      <a href="#contact-me" class="link mr-auto" @click="toggleActive">
        Contact me
      </a>
      <social-icons bg-blue class="mr-auto mt-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
import SocialIcons from '~/components/molecules/SocialIcons/SocialIcons.vue'

@Component({
  components: {
    SocialIcons
  }
})
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
  font-size: 2rem;
  color: #007bff;
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
