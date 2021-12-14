<template>
  <div>
    <a href="https://www.linkedin.com/in/rafa%C5%82-maciejewski-908260136/">
      <b-img-lazy class="social-icon mr-2" :class="{'blue-background' : bgBlue}" src="../../../assets/linkedin.svg" alt="linkedin" height="50px" />
    </a>
    <a href="https://twitter.com/heblushed">
      <b-img-lazy class="social-icon mr-2" :class="{'blue-background' : bgBlue}" src="../../../assets/twitter.svg" alt="twitter" height="50px" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class SocialIcons extends Vue {
    @Prop({ type: Boolean }) readonly bgBlue!: boolean;
}
</script>
<style scoped>
.social-icon {
  transition: transform 0.3s;
  padding: 10px;
  border-radius: 10%;
}

.blue-background {
    background-color: #027BFC;
}

.social-icon:hover {
  transform: scale(1.3);
  background-color: #027BFC;
}
</style>
