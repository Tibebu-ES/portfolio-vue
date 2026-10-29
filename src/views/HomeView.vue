<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SectionBlock from '@/components/SectionBlock.vue'

import { portfolio } from '@/data/portfolio.js'
</script>

<template>
  <main class="container">
    <HeroSection
      :name="portfolio.name"
      :role="portfolio.role"
      :headline="portfolio.headline"
      :summary="portfolio.summary"
      :highlights="portfolio.highlights"
      :links="portfolio.links"
    />

    <SectionBlock id="about" index="01" title="A bit about me">
      <AboutSection :about="portfolio.about" :facts="portfolio.facts" />
    </SectionBlock>

    <SectionBlock id="skills" index="02" title="Skills & toolkit">
      <SkillsSection :skill-groups="portfolio.skillGroups" />
    </SectionBlock>

    <SectionBlock
      id="projects"
      index="03"
      title="Selected work"
      subtitle="Production apps and side projects I've designed, built, or helped ship."
    >
      <ProjectsSection :projects="portfolio.projects" />
    </SectionBlock>

    <SectionBlock id="experience" index="04" title="Experience">
      <ExperienceSection :experience="portfolio.experience" />
    </SectionBlock>

    <SectionBlock id="contact" index="05" title="Get in touch">
      <ContactSection :contact="portfolio.contact" :links="portfolio.links" />
    </SectionBlock>
  </main>
</template>
