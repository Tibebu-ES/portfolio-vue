<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { motion } from 'motion-v'
import { Github, ExternalLink, ArrowLeft, Check, Layers } from 'lucide-vue-next'
import { portfolio } from '@/data/portfolio.js'

const props = defineProps({
  id: { type: String, required: true },
})

const router = useRouter()

const project = computed(() => portfolio.projects[props.id])

const getImageUrl = (name) => new URL(`../assets/projects/${name}`, import.meta.url).href

const goBack = () => {
  router.push({ name: 'home', hash: '#projects' })
}

const ease = [0.22, 1, 0.36, 1]
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
})
</script>

<template>
  <main class="container">
    <article v-if="project" class="detail">
      <motion.div v-bind="rise(0)">
        <button type="button" class="back-link" @click="goBack">
          <ArrowLeft /> All projects
        </button>
      </motion.div>

      <header class="header">
        <motion.span class="eyebrow" v-bind="rise(0.05)">Case study</motion.span>
        <motion.h1 class="title" v-bind="rise(0.1)">{{ project.title }}</motion.h1>
        <motion.div class="chips" v-bind="rise(0.15)">
          <span v-for="(t, j) in project.stack" :key="j" class="chip">{{ t }}</span>
        </motion.div>
        <motion.div v-if="project.links" class="links" v-bind="rise(0.2)">
          <a v-if="project.links.demo" :href="project.links.demo" target="_blank" rel="noopener" class="btn primary">
            <ExternalLink /> Live site
          </a>
          <a v-if="project.links.repo" :href="project.links.repo" target="_blank" rel="noopener" class="btn">
            <Github /> Source code
          </a>
        </motion.div>
      </header>

      <motion.div v-if="project.cover_photo" class="cover" v-bind="rise(0.25)">
        <img :src="getImageUrl(project.cover_photo)" :alt="project.title" />
      </motion.div>

      <motion.div class="body" v-bind="rise(0.3)">
        <section class="overview">
          <h2 class="h2">Overview</h2>
          <p>{{ project.description }}</p>
        </section>

        <aside class="side">
          <div v-if="project.achievements?.length" class="card pad">
            <h3 class="h3">Key features & achievements</h3>
            <ul class="bullets">
              <li v-for="(achievement, idx) in project.achievements" :key="idx">
                <Check class="check" /> <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
          <div class="card pad">
            <h3 class="h3"><Layers class="layers" /> Tech stack</h3>
            <div class="chips">
              <span v-for="(t, j) in project.stack" :key="j" class="chip">{{ t }}</span>
            </div>
          </div>
        </aside>
      </motion.div>
    </article>

    <div v-else class="not-found">
      <h1 class="title">Project not found</h1>
      <p>That project doesn't exist or may have moved.</p>
      <button type="button" class="btn" @click="goBack"><ArrowLeft /> Back to projects</button>
    </div>
  </main>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-top: 32px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  background: none;
  border: none;
  color: var(--muted);
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

.back-link svg {
  width: 16px;
  height: 16px;
  transition: transform 160ms ease;
}

.back-link:hover {
  color: var(--text);
}

.back-link:hover svg {
  transform: translateX(-3px);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.title {
  margin: 0;
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.05;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
}

.cover {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  padding: 8px;
  background: var(--surface);
  box-shadow: 0 40px 100px -40px var(--accent);
}

.cover img {
  width: 100%;
  height: auto;
  border-radius: calc(var(--radius) - 8px);
}

.body {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 32px;
  align-items: start;
}

.h2 {
  margin: 0 0 14px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.overview p {
  margin: 0;
  font-size: 17px;
  line-height: 1.8;
  color: var(--muted);
}

.side {
  display: grid;
  gap: 16px;
}

.h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 700;
}

.layers {
  width: 16px;
  height: 16px;
  color: var(--accent);
}

.bullets {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.55;
}

.bullets li {
  display: flex;
  gap: 10px;
}

.check {
  width: 16px;
  height: 16px;
  margin-top: 3px;
  flex-shrink: 0;
  color: var(--accent-2);
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  padding: 120px 0;
  color: var(--muted);
}

.not-found .title {
  color: var(--text);
  font-size: 36px;
}

@media (max-width: 820px) {
  .body {
    grid-template-columns: 1fr;
  }
}
</style>
