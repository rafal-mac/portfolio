<template>
  <div class="d-flex flex-column">
    <img class="rounded-circle mx-auto" width="300" height="300" src="../../../assets/profile_pic.jpg" alt="Profile picture">
    <p class="mt-4">
      Computer Science student looking to obtain experience in all areas of web development
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Profile extends Vue {
}
</script>
