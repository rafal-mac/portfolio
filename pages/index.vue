<template>
  <div>
    <my-header />
    <div id="scroll" class="mx-4">
      <profile />
      <div class="d-flex flex-column">
        <div id="experience" class="mx-auto">
          <experience-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyHeader from '~/components/molecules/MyHeader/MyHeader.vue'
import Profile from '~/components/molecules/Profile/Profile.vue'
import ExperienceList from '~/components/organisms/ExperienceList/ExperienceList.vue'

@Component({
  components: {
    MyHeader,
    Profile,
    ExperienceList
  }
})
export default class Index extends Vue {
  section: HTMLElement | null = null;
  currentPixel: number = 0;

  mounted (): void {
    this.section = document.querySelector('#scroll')
    this.currentPixel = window.pageYOffset

    this.looper()
  }

  looper (): void {
    const newPixel = window.pageYOffset
    const diff = newPixel - this.currentPixel
    const speed = diff * 0.15

    this.section!.style.transform = 'skewY(' + speed + 'deg)'

    this.currentPixel = newPixel

    requestAnimationFrame(this.looper)
  }
}
</script>
<style>
#scroll {
  transition: transform .25s;
  will-change: transform;
}
</style>
