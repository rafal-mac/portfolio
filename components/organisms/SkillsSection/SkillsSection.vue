<template>
  <div class="background py-5">
    <div>
      <div class="d-flex position-relative skills-title-wrapper mx-auto mb-4">
        <p class="skills-title mr-auto">
          &nbsp;&nbsp;What can I use?
        </p>
      </div>
      <div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="card-columns mx-auto">
            <skill-badge
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :src="skill.src"
              :alt="skill.name + ' icon'"
              width="20px"
              class="mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SkillBadge from '~/components/atoms/SkillBadge/SkillBadge.vue'
import { skills, ISkill } from '~/lib/skills'
@Component({
  components: {
    SkillBadge
  }
})
export default class ExperienceSection extends Vue {
  infoClicked: boolean = false;
  skills: Array<ISkill> = skills;

  openInfo (): void {
    this.infoClicked = !this.infoClicked
  }
}
</script>
<style scoped>
.background {
  background-color: rgba(0,0,0,0.05);
  border-radius: 40px;
}

.skills-title-wrapper {
  font-size: 2rem;
}
@media only screen and (min-width: 1200px) {
  .skills-title-wrapper {
    font-size: 3rem;
  }
}

.skills-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 15%;
    height: 10px;
    background: #007bff;
}

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
