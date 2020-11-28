<template>
  <div>
    <my-header />
    <div class="profile d-flex">
      <profile class="my-auto mx-auto" />
    </div>
    <div class="d-flex flex-column">
      <div class="mx-auto">
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
        <p>words words words words words words words words words words words words words words words words words words words words</p>
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
}
</script>
<style>
.profile {
  height: 100vh;
}
</style>
