<template>
  <div>
    <my-header />
    <div id="scroll" class="mx-4">
      <profile />
      <div class="d-flex flex-column">
        <div id="experience">
          <experience-section />
        </div>
        <div id="skills">
          <skills-section />
        </div>
        <div id="contact-me">
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
import ContactMeSection from '~/components/organisms/ContactMeSection/ContactMeSection.vue'

@Component({
  components: {
    MyHeader,
    Profile,
    ExperienceSection,
    SkillsSection,
    ContactMeSection
  }
})
export default class Index extends Vue {
}
</script>
