<template>
  <div class="d-flex">
    <div class="m-auto">
      <div class="d-flex position-relative education-title-wrapper mx-auto">
        <p class="education-title mr-auto">
          &nbsp;&nbsp;My Education
        </p>
      </div>

      <experience-card
        class="mt-3"
        position-name="BSc Artificial Intelligence & Computer Science"
        company-name="University of Sheffield"
        position-link="https://www.sheffield.ac.uk/"
        employment-type="with a Year in Industry"
        date="September 2018 - June 2022"
      >
        <b-img-lazy
          src="/uni_of_sheffield.svg"
          class="logo p-4 my-auto mx-auto"
          width="210px"
          alt="university of sheffield logo"
        />
        <template v-slot:bulletpoints>
          <p>
            Second year: <b>First Class</b>
          </p>
          <p>
            First year: <b>First Class</b>
          </p>
          <p>
            • <b>Academic Achievement Scholarship</b>, Department of Computer Science, The University of Sheffield 2018
          </p>
          <p>
            • <b>Scholarship based on First Class Performance</b>, The University of Sheffield 2019
          </p>
        </template>
      </experience-card>

      <experience-card
        class="mt-3"
        position-name="Polish Matura Exam"
        company-name="I High School, Wloclawek, Poland"
        position-link="http://test.lzk.pl/"
        date="September 2015 – May 2018"
      >
        <b-img-lazy
          src="/lzk.svg"
          class="logo p-4 my-auto mx-auto"
          width="210px"
          alt="high school logo"
        />
        <template v-slot:bulletpoints>
          <p>
            Equivalent to A-Levels: <b>A*A*A*</b> in Maths, Physics and English
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
export default class EducationSection extends Vue {}
</script>

<style scoped>
@media only screen and (max-width: 767px) {
  .card-columns {
    column-count: 2 !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .card-columns {
    column-count: 3 !important;
  }
}
@media only screen and (min-width: 992px) {
  .card-columns {
    column-count: 4 !important;
  }
}
</style>
<style scoped>
.education-title-wrapper {
  font-size: 2rem;
}

.education-title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15%;
  height: 10px;
  background: #007bff;
}
</style>
