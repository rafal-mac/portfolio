<template>
  <a class="link text-decoration-none" :href="link">{{ title }}</a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class MenuLink extends Vue {
@Prop({ type: String }) readonly title!: string;
@Prop({ type: String }) readonly link!: string;
}
</script>

<style scoped>
.link {
padding: 1rem 2rem;
-webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
color: var(--color-darkGrey);
border-bottom: 2px solid var(--color-lightGrey);
text-align: center;
}
</style>
