<template>
  <div>
    <my-header />
    <div id="scroll" class="mx-4">
      <profile />
      <div class="d-flex flex-column">
        <div id="words" class="mx-auto">
          <p v-for="i of 20" :key="i">
            words words words words words words words words words words words words words words words words words words words words
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyHeader from '~/components/molecules/MyHeader/MyHeader.vue'
import Profile from '~/components/molecules/Profile/Profile.vue'

@Component({
  components: {
    MyHeader,
    Profile
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
