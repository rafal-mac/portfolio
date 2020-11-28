<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Rafal Maciejewski
      </h1>
      <h2 class="subtitle">
        fullstack developer
      </h2>
      <links />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/atoms/Logo.vue'
import Links from '~/components/atoms/Links.vue'

@Component({
  components: {
    Logo,
    Links
  }
})
export default class Index extends Vue {
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
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

.links {
  padding-top: 15px;
}
</style>
