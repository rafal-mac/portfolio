<template>
  <div class="additional-info mx-auto d-flex align-items-center">
    <div>
      <p class="m-0">
        {{ whoAmI[0] }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Spinner extends Vue {
    whoAmI: string[] = ['web developer', 'design aficionado', 'tech enthusiast', 'team player']

    mounted (): void {
      window.setInterval(() => {
        this.changeWhoIAm()
      }, 1500)
    }

    changeWhoIAm (): void {
      const first: string = this.whoAmI.shift()!
      this.whoAmI = this.whoAmI.concat(first)
    }
}
</script>
<style>
.additional-info {
  font-size: 2rem;
  line-height: 100%;
}
</style>
