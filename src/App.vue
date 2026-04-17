<script setup>
import { computed, onMounted, ref } from 'vue'

import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

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

    <RouterView />
    <AppFooter :name="portfolio.name" :links="portfolio.links" />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}
</style>
