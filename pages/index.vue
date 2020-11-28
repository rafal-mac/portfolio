<template>
  <div>
    <my-header />
    <div class="bg-white" style="height: 100vh;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyHeader from '~/components/molecules/MyHeader/MyHeader.vue'

@Component({
  components: {
    MyHeader
  }
})
export default class Index extends Vue {
}
</script>
