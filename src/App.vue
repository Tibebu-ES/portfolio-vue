<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { MotionConfig } from 'motion-v'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

import { portfolio } from '@/data/portfolio.js'

const theme = ref('dark')

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
  <MotionConfig reduced-motion="user">
    <div class="app-shell">
      <!-- Decorative background -->
      <div class="backdrop" aria-hidden="true">
        <div class="glow glow-1" />
        <div class="glow glow-2" />
        <div class="grid-lines" />
      </div>

      <AppNavbar
        :name="portfolio.name"
        :sections="portfolio.sections"
        :theme="theme"
        @toggle-theme="toggleTheme"
      />

      <RouterView />
      <AppFooter :name="portfolio.name" :links="portfolio.links" />
    </div>
  </MotionConfig>
</template>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
  overflow-x: clip;
}

.backdrop {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.45;
}

.glow-1 {
  top: -220px;
  left: 50%;
  width: 760px;
  height: 520px;
  transform: translateX(-70%);
  background: radial-gradient(closest-side, var(--accent), transparent);
}

.glow-2 {
  top: -120px;
  left: 50%;
  width: 520px;
  height: 420px;
  transform: translateX(10%);
  background: radial-gradient(closest-side, var(--accent-2), transparent);
  opacity: 0.25;
}

.grid-lines {
  position: absolute;
  inset: 0 0 auto 0;
  height: 900px;
  background-image:
    linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%);
  opacity: 0.6;
}

:root[data-theme='light'] .glow {
  opacity: 0.18;
}
</style>
