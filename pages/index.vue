<template>
  <div>
    <my-header />
    <div class="mx-4 container mx-auto">
      <profile />
      <div class="d-flex flex-column">
        <div id="experience" class="mb-5">
          <experience-section />
        </div>
        <div id="skills" class="mb-5">
          <skills-section />
        </div>
        <div id="education" class="mb-5">
          <education-section />
        </div>
        <div id="contact-me" class="mb-5">
          <contact-me-section />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyHeader from '~/components/molecules/MyHeader/MyHeader.vue'
import Profile from '~/components/molecules/Profile/Profile.vue'
import ExperienceSection from '~/components/organisms/ExperienceSection/ExperienceSection.vue'
import SkillsSection from '~/components/organisms/SkillsSection/SkillsSection.vue'
import EducationSection from '~/components/organisms/EducationSection/EducationSection.vue'
import ContactMeSection from '~/components/organisms/ContactMeSection/ContactMeSection.vue'

@Component({
  components: {
    MyHeader,
    Profile,
    ExperienceSection,
    SkillsSection,
    EducationSection,
    ContactMeSection
  }
})
export default class Index extends Vue {
}
</script>
<style scoped>
</style>
