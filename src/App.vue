<script setup>
import { computed, onMounted, ref } from 'vue'

import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

import SectionBlock from '@/components/SectionBlock.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'

import { portfolio } from '@/data/portfolio.js'

const theme = ref('dark')

const themeLabel = computed(() => (theme.value === 'dark' ? 'Dark' : 'Light'))

function applyTheme(nextTheme) {
  theme.value = nextTheme
  document.documentElement.setAttribute('data-theme', nextTheme)
  try {
    localStorage.setItem('theme', nextTheme)
  } catch (e) {
    // ignore (private mode / blocked storage)
  }
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  let saved = null
  try {
    saved = localStorage.getItem('theme')
  } catch (e) {
    saved = null
  }
  applyTheme(saved === 'light' ? 'light' : 'dark')
})
</script>

<template>
  <div class="app-shell">
    <AppNavbar
      :name="portfolio.name"
      :role="portfolio.role"
      :sections="portfolio.sections"
      :theme-label="themeLabel"
      @toggle-theme="toggleTheme"
    />

    <main class="container">
      <HeroSection
        :name="portfolio.name"
        :role="portfolio.role"
        :headline="portfolio.headline"
        :summary="portfolio.summary"
        :highlights="portfolio.highlights"
        :links="portfolio.links"
      />

      <SectionBlock id="about" title="About">
        <AboutSection :about="portfolio.about" :facts="portfolio.facts" />
      </SectionBlock>

      <SectionBlock id="skills" title="Skills">
        <SkillsSection :skill-groups="portfolio.skillGroups" />
      </SectionBlock>

      <SectionBlock id="projects" title="Projects">
        <ProjectsSection :projects="portfolio.projects" />
      </SectionBlock>

      <SectionBlock id="experience" title="Experience">
        <ExperienceSection :experience="portfolio.experience" />
      </SectionBlock>

      <SectionBlock id="contact" title="Contact">
        <ContactSection :contact="portfolio.contact" :links="portfolio.links" />
      </SectionBlock>
    </main>

    <AppFooter :name="portfolio.name" :links="portfolio.links" />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}
</style>
