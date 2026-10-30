<script setup>
import { Server, Bot, LayoutDashboard, Database, Plug, ShieldCheck, Sparkles } from 'lucide-vue-next'

defineProps({
  skillGroups: { type: Array, required: true },
})

// One icon per skill group, in the same order as skillGroups in portfolio.js
const icons = [Server, Bot, LayoutDashboard, Database, Plug, ShieldCheck]
</script>

<template>
  <div class="grid two">
    <article v-for="(g, idx) in skillGroups" :key="idx" class="card pad hoverable group">
      <div class="head">
        <span class="icon-tile"><component :is="icons[idx] || Sparkles" /></span>
        <h3 class="h3">{{ g.title }}</h3>
      </div>
      <ul class="skills">
        <li v-for="(s, j) in g.skills" :key="j" class="skill">{{ s }}</li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill {
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  color: var(--muted);
  background: var(--surface-2);
  border: 1px solid var(--border);
  transition: color 160ms ease, border-color 160ms ease;
}

.group:hover .skill {
  color: var(--text);
}
</style>
