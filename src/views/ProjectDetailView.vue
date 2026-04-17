<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { portfolio } from '@/data/portfolio.js'
import { Github, ExternalLink, ArrowLeft } from "lucide-vue-next"
import SectionBlock from '@/components/SectionBlock.vue'

const props = defineProps({
  id: { type: String, required: true }
})

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return portfolio.projects[props.id]
})

const getImageUrl = (name) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href;
}

const goBack = () => {
  router.push({ name: 'home', hash: '#projects' })
}
</script>

<template>
  <main class="container">
    <SectionBlock v-if="project" :title="project.title">
      <template #actions>
        <button @click="goBack" class="back-link">
          <ArrowLeft size="18" /> Back
        </button>
      </template>

      <div class="project-detail">
        <div class="project-header">
           <div v-if="project.cover_photo" class="cover-image">
             <img :src="getImageUrl(project.cover_photo)" :alt="project.title" />
           </div>
           
           <div class="project-info">
             <div class="links">
               <a v-if="project.links && project.links.demo" :href="project.links.demo" target="_blank" rel="noopener" class="btn primary">
                 <ExternalLink size="18" /> Live Demo
               </a>
               <a v-if="project.links && project.links.repo" :href="project.links.repo" target="_blank" rel="noopener" class="btn">
                 <Github size="18" /> GitHub
               </a>
             </div>

             <div class="tech-stack">
               <h4 class="h4">Tech Stack</h4>
               <div class="chips">
                 <span v-for="(t, j) in project.stack" :key="j" class="chip">{{ t }}</span>
               </div>
             </div>
           </div>
        </div>

        <div class="project-content">
          <section class="description">
            <h4 class="h4">Overview</h4>
            <p>{{ project.description }}</p>
          </section>

          <section v-if="project.achievements && project.achievements.length" class="achievements">
             <h4 class="h4">Key Features & Achievements</h4>
             <ul class="bullets">
               <li v-for="(achievement, idx) in project.achievements" :key="idx">
                 {{ achievement }}
               </li>
             </ul>
          </section>
        </div>
      </div>
    </SectionBlock>
    <div v-else class="not-found">
      <p>Project not found.</p>
      <button @click="goBack" class="btn">Go Back</button>
    </div>
  </main>
</template>

<style scoped>
.project-detail {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

@media (max-width: 768px) {
  .project-header {
    grid-template-columns: 1fr;
  }
}

.cover-image {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.cover-image img {
  width: 100%;
  height: auto;
  display: block;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.links {
  display: flex;
  gap: 12px;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  background: var(--panel-strong);
  color: var(--muted);
  border-radius: 6px;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.description p {
  line-height: 1.8;
  color: var(--muted);
}

.bullets {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.8;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--accent);
}

.not-found {
  text-align: center;
  padding: 64px 0;
}
</style>
