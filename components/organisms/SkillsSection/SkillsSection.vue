<template>
  <div class="fullscreen-skills">
    <div class="m-auto">
      <div class="d-flex position-relative skills-title-wrapper mx-auto mb-4">
        <p class="skills-title mr-auto">
          What can I do?
        </p>
      </div>
      <div>
        <div class="container d-flex flex-column flex-md-row justify-content-between">
          <div class="card-columns">
            <b-img-lazy
              src="../../../assets/html5.svg"
              class="skill-icon card"
              alt="html5"
            />
            <b-img-lazy
              src="../../../assets/css3.svg"
              class="skill-icon card"
              alt="css3"
            />
            <b-img-lazy
              src="../../../assets/javascript.svg"
              class="skill-icon card"
              alt="javascript"
            />
            <b-img-lazy
              src="../../../assets/vue.svg"
              class="skill-icon card"
              alt="vue"
            />
            <b-img-lazy
              src="../../../assets/nuxt.svg"
              class="skill-icon card"
              alt="nuxt"
            />
            <b-img-lazy
              src="../../../assets/php.svg"
              class="skill-icon card"
              alt="php"
            />
            <b-img-lazy
              src="../../../assets/jest.svg"
              class="skill-icon card"
              alt="jest"
            />
            <b-img-lazy
              src="../../../assets/git.svg"
              class="skill-icon card"
              alt="git"
            />
            <b-img-lazy
              src="../../../assets/mysql.svg"
              class="skill-icon card"
              alt="mysql"
            />
            <b-img-lazy
              src="../../../assets/cypress.svg"
              class="skill-icon card"
              alt="cypress"
            />
            <b-img-lazy
              src="../../../assets/laravel.svg"
              class="skill-icon card"
              alt="laravel"
            />
            <b-img-lazy
              src="../../../assets/sass.svg"
              class="skill-icon card"
              alt="sass"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ExperienceSection extends Vue {
  infoClicked: boolean = false;

  openInfo (): void {
    this.infoClicked = !this.infoClicked
  }
}
</script>
<style scoped>
.bro {
  display: none;
}
.fullscreen-skills {
  min-height: 100vh;
}

.skills-title-wrapper {
  font-size: 2.5rem;
  width: 100%;
}
@media only screen and (min-width: 1200px) {
  .skills-title-wrapper {
    width: 80%;
    font-size: 5rem;
  }
}

.skills-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25%;
    height: 10px;
    background: #007bff;
}

.skill-icon {
  height: 150px;
  width: 150px;
  margin: 30px auto;
  transition: transform 0.3s;
  border: none;
}
@media only screen and (min-width: 576px) {
  .skill-icon {
    margin: 30px
  }
}

.skill-icon:hover {
  transform: scale(1.3);
}

@media only screen and (max-width: 575px) {
  .card-columns {
    column-count: 1 !important;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
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
