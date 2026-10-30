<script setup>
import { motion } from 'motion-v'
import { Mail, Github, Linkedin, ArrowRight, Server, Bot, HeartPulse } from 'lucide-vue-next'
import myPhoto from '@/assets/profile.png'

defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  headline: { type: String, required: true },
  summary: { type: String, required: true },
  highlights: { type: Array, required: true },
  links: { type: Object, required: true },
})

const pillars = [
  { title: 'Backend', body: 'Laravel, CodeIgniter, WordPress, REST APIs', icon: Server },
  { title: 'AI Integration', body: 'RAG, vector stores, tool calling', icon: Bot },
  { title: 'Healthcare', body: 'Clinic scheduling, patient portals', icon: HeartPulse },
]

const ease = [0.22, 1, 0.36, 1]
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-grid">
      <div class="intro">
        <motion.div v-bind="rise(0)">
          <span class="badge"><span class="status-dot" /> Available for PHP, Laravel & AI work</span>
        </motion.div>

        <motion.h1 class="h1" v-bind="rise(0.08)">
          Hi, I'm {{ name }}<br />
          <span class="gradient-text">{{ role }}</span>
        </motion.h1>

        <motion.p class="headline" v-bind="rise(0.16)">{{ headline }}</motion.p>
        <motion.p class="summary" v-bind="rise(0.22)">{{ summary }}</motion.p>

        <motion.div class="cta" v-bind="rise(0.3)">
          <a class="btn primary" :href="links.email"><Mail /> Get in touch</a>
          <a class="btn" href="#projects">View work <ArrowRight /></a>
          <div class="socials">
            <a class="social" :href="links.github" target="_blank" rel="noopener" aria-label="GitHub"><Github /></a>
            <a class="social" :href="links.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        class="portrait-wrap"
        :initial="{ opacity: 0, scale: 0.94 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.9, delay: 0.15, ease }"
      >
        <div class="portrait">
          <div class="ring" aria-hidden="true" />
          <img :src="myPhoto" alt="Tibebu E. - Full-Stack PHP Developer" />
        </div>
        <motion.div
          class="float-chip chip-a"
          :animate="{ y: [0, -8, 0] }"
          :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut' }"
        >
          <span class="dot-l" /> Laravel
        </motion.div>
        <motion.div
          class="float-chip chip-b"
          :animate="{ y: [0, 8, 0] }"
          :transition="{ duration: 6, repeat: Infinity, ease: 'easeInOut' }"
        >
          <span class="dot-v" /> Vue.js
        </motion.div>
      </motion.div>
    </div>

    <div class="pillars">
      <motion.article
        v-for="(p, idx) in pillars"
        :key="p.title"
        class="card pad pillar hoverable"
        v-bind="rise(0.4 + idx * 0.08)"
      >
        <span class="icon-tile"><component :is="p.icon" /></span>
        <div>
          <h3 class="pillar-title">{{ p.title }}</h3>
          <p class="pillar-body">{{ highlights[idx] || p.body }}</p>
        </div>
      </motion.article>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 56px 0 24px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 48px;
  align-items: center;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
}

.h1 {
  margin: 0;
  font-size: clamp(38px, 6vw, 64px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.045em;
}

.headline {
  margin: 0;
  font-family: var(--mono);
  font-size: 14px;
  color: var(--text);
  opacity: 0.85;
}

.summary {
  margin: 0;
  max-width: 560px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--muted);
}

.cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
}

.socials {
  display: flex;
  gap: 6px;
  margin-left: 4px;
}

.social {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  color: var(--muted);
  border: 1px solid transparent;
  transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
}

.social:hover {
  color: var(--text);
  border-color: var(--border);
  background: var(--surface);
}

.social svg {
  width: 19px;
  height: 19px;
}

/* Portrait */
.portrait-wrap {
  position: relative;
  justify-self: center;
  width: min(360px, 100%);
}

.portrait {
  position: relative;
  aspect-ratio: 1;
  border-radius: 36px;
  padding: 6px;
  background: linear-gradient(var(--surface-solid), var(--surface-solid)) padding-box, var(--gradient) border-box;
  border: 1px solid transparent;
  box-shadow: 0 30px 80px -30px var(--accent);
}

.ring {
  position: absolute;
  inset: -18px;
  border-radius: 48px;
  border: 1px dashed var(--border-strong);
  pointer-events: none;
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.float-chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  background: color-mix(in oklab, var(--surface-solid) 85%, transparent);
  border: 1px solid var(--border-strong);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

.chip-a {
  top: 14%;
  left: -38px;
}

.chip-b {
  bottom: 12%;
  right: -30px;
}

.dot-l,
.dot-v {
  width: 8px;
  height: 8px;
  border-radius: 999px;
}

.dot-l {
  background: #ff2d20;
}

.dot-v {
  background: #42b883;
}

/* Pillars */
.pillars {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 72px;
}

.pillar {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.pillar-title {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 700;
}

.pillar-body {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .portrait-wrap {
    order: -1;
    width: min(260px, 70%);
  }

  .pillars {
    grid-template-columns: 1fr;
    margin-top: 56px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 28px;
  }

  .chip-a {
    left: -24px;
  }

  .chip-b {
    right: -20px;
  }
}
</style>
