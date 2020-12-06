<template>
  <div class="fullscreen-experience d-flex">
    <div class="m-auto">
      <div class="d-flex position-relative experience-title-wrapper mx-auto mb-4">
        <p class="experience-title mr-auto mr-sm-0 ml-sm-auto">
          Where did I work?
        </p>
      </div>

      <experience-card
        position-name="Fullstack Web Developer"
        company-name="Tutorful"
        position-link="https://tutorful.co.uk/"
        date="June 2020 - Present"
        employment-type="Industry Placement"
      >
        <picture class="p-4 my-auto mx-auto">
          <source srcset="~/assets/tutorful_logo.webp" type="image/webp">
          <source srcset="~/assets/tutorful_logo.svg" type="image/svg+xml">
          <b-img-lazy
            src="../../../assets/tutorful_logo.svg"
            class="logo"
            height="210px"
            width="210px"
            alt="tutorful logo"
          />
        </picture>
        <template v-slot:bulletpoints>
          <p>
            • Working in small, autonomous teams who favour continuous integration and delivery, and test-driven development
          </p>
          <p>
            • <b>Vue, TypeScript</b> and <b>Nuxt</b> for frontend. <b>PHP</b> with <b>Laravel</b> to write APIs and job queues. <b>MySQL</b> for data
            storage and <b>ElasticSearch</b> for search results.
          </p>
        </template>
      </experience-card>

      <experience-card
        class="mt-3"
        position-name="Junior Technical Product Manager"
        company-name="Coordinate Sport"
        position-link="https://coordinate.cloud/"
        date="October 2019 – June 2020"
        employment-type="Part Time"
      >
        <picture class="p-4 my-auto mx-auto">
          <source srcset="~/assets/coordinate_logo.webp" type="image/webp">
          <source srcset="~/assets/coordinate_logo.svg" type="image/svg+xml">
          <b-img-lazy
            src="../../../assets/coordinate_logo.svg"
            class="logo"
            height="210px"
            width="210px"
            alt="coordinate sport logo"
          />
        </picture>
        <template v-slot:bulletpoints>
          <p>
            • Managing a team of two developers to deliver an outstanding product driven by data
          </p>
          <p>
            • Liaising between the developers, the management and the customers
          </p>
          <p>
            • <b>Designing the UI & UX</b> of the product, <b>writing requirements</b> for the developers, <b>managing the backlog</b> and the roadmap
          </p>
        </template>
      </experience-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExperienceCard from '~/components/molecules/ExperienceCard/ExperienceCard.vue'

@Component({
  components: {
    ExperienceCard
  }
})
export default class ExperienceSection extends Vue {
  infoClicked: boolean = false;

  openInfo (): void {
    this.infoClicked = !this.infoClicked
  }
}
</script>
<style scoped>
.fullscreen-experience {
  min-height: 100vh;
}

.experience-title-wrapper {
  font-size: 2.5rem;
  width: 100%;
}
@media only screen and (min-width: 1200px) {
  .experience-title-wrapper {
    width: 80%;
    font-size: 5rem;
  }
}
.experience-title::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30%;
    height: 10px;
    background: #007bff;
}
@media only screen and (max-width: 575px) {
  .experience-title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25%;
    height: 10px;
    background: #007bff;
}
}
</style>
