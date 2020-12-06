<template>
  <div class="additional-info mx-auto d-flex align-items-center">
    <div
      class="words-wrapper"
      :class="{ 'is-loading': isLoading }"
    >
      <p class="m-0 text-nowrap">
        {{ whoAmI[0] }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class WhoAmI extends Vue {
  isLoading: boolean = false;
  whoAmI: string[] = ['web developer', 'design aficionado', 'tech enthusiast', 'team player']

  mounted (): void {
    this.toggleIsLoading()
    window.setInterval(() => {
      this.changeWhoIAm()
      this.toggleIsLoading()
      window.setTimeout(() => {
        this.toggleIsLoading()
      }, 100)
    }, 3000)
  }

  changeWhoIAm (): void {
    const first: string = this.whoAmI.shift()!
    this.whoAmI = this.whoAmI.concat(first)
  }

  toggleIsLoading (): void {
    this.isLoading = !this.isLoading
  }
}
</script>
<style>
.additional-info {
  font-size: 7vw;
  line-height: 100%;
}
@media only screen and (min-width: 768px) {
  .additional-info {
    font-size: 4vw;
  }
}

.words-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 0px;
  background: #007bff;
}
.words-wrapper.is-loading::after {
  width: 100%;
  transition: width 2.9s;
}
</style>
