<template>
  <div class="d-flex">
    <div class="m-auto">
      <div class="d-flex position-relative experience-title-wrapper mx-auto mb-4">
        <p class="experience-title mr-auto">
          &nbsp;&nbsp;Where did I work?
        </p>
      </div>
      <experience-card
        position-name="Fullstack Web Developer"
        company-name="Clear Links"
        position-link="https://www.clear-links.co.uk/"
        date="November 2021 - Present"
      >
        <b-img-lazy
          src="../../../assets/clear_links_logo.svg"
          class="logo p-4 my-auto mx-auto"
          width="210px"
          alt="clear links logo"
        />
        <template v-slot:bulletpoints>
          <p>
            • Using .NET and React/Redux to create administration panels and timetabling/management tools.
          </p>
          <p>
            • Researched technologies and successfuly recreated a web application in React Native for iOS and Android
          </p>
        </template>
      </experience-card>

      <experience-card
        class="mt-3"
        position-name="Fullstack Web Developer"
        company-name="Tutorful"
        position-link="https://tutorful.co.uk/"
        date="June 2020 - July 2021"
        employment-type="Industry Placement"
      >
        <b-img-lazy
          src="../../../assets/tutorful_logo.png"
          class="logo p-4 my-auto mx-auto"
          width="210px"
          alt="tutorful logo"
        />
        <template v-slot:bulletpoints>
          <p>
            • Worked in small, autonomous teams who favoured continuous integration and delivery, and test-driven development
          </p>
          <p>
            • My team and I rebuilt the search results page by increasing end-to-end conversion by 30%.
          </p>
          <p>
            • I made all the necessary changes for the company to expand internationally (website translation, time zones, payments, API)
          </p>
          <p>
            • <b>Vue, TypeScript</b> and <b>Nuxt</b> for frontend. <b>PHP</b> with <b>Laravel</b> to write APIs and job queues. <b>MySQL</b> for data
            storage and <b>ElasticSearch</b> for search results.
          </p>
        </template>
      </experience-card>

      <experience-card
        class="mt-3"
        position-name="Junior Product Manager"
        company-name="Coordinate Sport"
        position-link="https://coordinate.cloud/"
        date="October 2019 – June 2020"
      >
        <b-img-lazy
          src="../../../assets/coordinate_logo.svg"
          class="logo p-4 my-auto mx-auto"
          width="210px"
          alt="coordinate sport logo"
        />
        <template v-slot:bulletpoints>
          <p>
            • Managed a team of two developers to deliver an outstanding product driven by data
          </p>
          <p>
            • Liaised between the developers, the management and the customers
          </p>
          <p>
            • Was responsible for <b>designing the UI & UX</b> of the product, <b>writing requirements</b> for the developers, <b>managing the backlog</b> and the roadmap
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
.experience-title-wrapper {
  font-size: 2rem;
}

.experience-title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15%;
  height: 10px;
  background: #007bff;
}
</style>
