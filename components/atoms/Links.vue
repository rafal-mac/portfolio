<template>
  <div class="links">
    <a
      href="https://nuxtjs.org/"
      class="button--green"
    >
      About
    </a>
    <a
      href="https://github.com/nuxt/nuxt.js"
      class="button--grey"
    >
      Experience
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Links extends Vue {
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
