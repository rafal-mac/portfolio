<template>
  <div class="d-flex justify-content-center">
    <menu-link title="About" link="https://nuxtjs.org/" />
    <menu-link title="Experience" link="https://github.com/rafal-mac" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MenuLink from '@/components/atoms/MenuLink.vue'

@Component({
  components: {
    MenuLink
  }
})
export default class MenuLinks extends Vue {
}
</script>
