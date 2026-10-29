<script setup>
import { Mail, Github, Linkedin, Check, Clock } from 'lucide-vue-next'

defineProps({
  contact: { type: Object, required: true },
  links: { type: Object, required: true },
})

const checklist = [
  'Project/role + timeline',
  'Stack (Laravel version, Vue setup, hosting)',
  'Key requirements (auth, payments, admin, analytics)',
  'Definition of done (KPIs, performance, UX)',
]
</script>

<template>
  <div class="cta-panel">
    <div class="glow" aria-hidden="true" />

    <div class="main">
      <h3 class="h3">{{ contact.title }}</h3>
      <p class="text">{{ contact.blurb }}</p>

      <div class="cta">
        <a class="btn primary" :href="links.email" aria-label="Send an email to Tibebu E."><Mail /> Email me</a>
        <a class="btn" :href="links.github" target="_blank" rel="noopener" aria-label="Visit Tibebu E.'s GitHub profile"><Github /> GitHub</a>
        <a class="btn" :href="links.linkedin" target="_blank" rel="noopener" aria-label="Visit Tibebu E.'s LinkedIn profile"><Linkedin /> LinkedIn</a>
      </div>
    </div>

    <div class="side">
      <h4 class="h4">What to include</h4>
      <ul class="list">
        <li v-for="item in checklist" :key="item">
          <Check class="check" /> <span>{{ item }}</span>
        </li>
      </ul>
      <span class="badge"><Clock class="clock" /> Typically replies within 24–48h</span>
    </div>
  </div>
</template>

<style scoped>
.cta-panel {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  padding: 48px;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid transparent;
  background:
    linear-gradient(var(--surface-solid), var(--surface-solid)) padding-box,
    linear-gradient(140deg, color-mix(in oklab, var(--accent) 60%, transparent), var(--border) 40%, color-mix(in oklab, var(--accent-2) 50%, transparent)) border-box;
  box-shadow: var(--shadow);
}

.glow {
  position: absolute;
  top: -40%;
  left: -10%;
  width: 70%;
  height: 120%;
  background: radial-gradient(closest-side, var(--accent-soft), transparent);
  pointer-events: none;
}

.main,
.side {
  position: relative;
}

.h3 {
  margin: 0 0 14px;
  font-size: clamp(26px, 3.4vw, 36px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.text {
  margin: 0 0 28px;
  max-width: 480px;
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 32px;
  border-left: 1px solid var(--border);
}

.h4 {
  margin: 0;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--subtle);
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
  font-size: 14.5px;
  color: var(--muted);
}

.list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  line-height: 1.5;
}

.check {
  width: 16px;
  height: 16px;
  margin-top: 3px;
  flex-shrink: 0;
  color: var(--accent-2);
}

.badge {
  align-self: flex-start;
  margin-top: 4px;
}

.clock {
  width: 14px;
  height: 14px;
}

@media (max-width: 820px) {
  .cta-panel {
    grid-template-columns: 1fr;
    padding: 28px 22px;
    gap: 28px;
  }

  .side {
    padding-left: 0;
    padding-top: 24px;
    border-left: none;
    border-top: 1px solid var(--border);
  }
}
</style>
