<template>
  <div class="d-flex">
    <span class="name mr-2">
      {{ name }}
    </span>
    <b-img-lazy
      :src="src"
      :alt="alt"
      :width="width"
      class="skill-icon my-auto"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SkillBadge extends Vue {
    @Prop({ type: String }) readonly name!: string;
    @Prop({ type: String }) readonly src!: string;
    @Prop({ type: String }) readonly alt!: string;
    @Prop({ type: String }) readonly width!: string;
}
</script>

<style scoped>
.name {
  font-size: 1.5rem;
  font-weight: 200;
}

.skill-icon {
  border: none;
}
</style>
