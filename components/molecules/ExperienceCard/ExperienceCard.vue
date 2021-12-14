<template>
  <div class="d-flex mx-auto flex-column flex-md-row experience-card w-100">
    <slot />
    <div class="px-4 pb-4 pb-md-0 my-auto">
      <div class="d-flex align-items-center justify-content-between">
        <p class="position-name mb-0">
          <b>{{ positionName }} - <a class="text-decoration-none" :href="positionLink">{{ companyName }}</a></b>
        </p>
        <p class="d-none d-lg-block mb-0">
          <b>{{ date }}</b>
        </p>
      </div>
      <p v-if="employmentType">
        ({{ employmentType }})
      </p>
      <hr :class="{'mt-3': employmentType}">
      <slot name="bulletpoints" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ExperienceCard extends Vue {
  @Prop({ type: String }) readonly positionName!: string;
  @Prop({ type: String }) readonly companyName!: string;
  @Prop({ type: String }) readonly positionLink!: string;
  @Prop({ type: String }) readonly date!: string;
  @Prop({ type: String }) readonly employmentType?: string;
}
</script>
<style scoped>
.experience-card {
  background-color: transparent;
  min-height: 300px;
  border-radius: 40px;
  transition: box-shadow 0.25s;
}
@media only screen and (max-width: 575px) {
  .experience-card {
    -webkit-box-shadow: 0px 15px 20px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 15px 20px 1px rgba(0,0,0,0.1);
  }
}
@media only screen and (min-width: 576px) {
  .experience-card:hover {
    -webkit-box-shadow: 0px 15px 20px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 15px 20px 1px rgba(0,0,0,0.1);
  }
}

@media only screen and (min-width: 576px) {
  .logo {
    transition: transform 0.25s;
  }
  .experience-card:hover .logo {
    transform: scale(1.10);
  }
}

.position-name {
  font-size: 1.5rem;
}
</style>
