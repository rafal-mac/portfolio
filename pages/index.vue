<template>
  <div class="fullscreen-header d-flex flex-column">
    <h1 class="title">
      Rafal Maciejewski
    </h1>
    <h2 class="subtitle">
      fullstack developer
    </h2>
    <menu-links class="mt-auto" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MenuLinks from '@/components/molecules/MenuLinks.vue'

@Component({
  components: {
    MenuLinks
  }
})
export default class Index extends Vue {
}
</script>

<style>
@import 'https://unpkg.com/chota@latest';

.title {
font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
display: block;
font-weight: 300;
font-size: 100px;
color: #35495e;
letter-spacing: 1px;
}

.subtitle {
font-weight: 300;
font-size: 42px;
color: #526488;
word-spacing: 5px;
padding-bottom: 15px;
}

.fullscreen-header {
min-height: 100vh;
}
</style>
