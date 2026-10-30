<script setup>
import { MapPin, Briefcase, Clock, Target, Sparkles } from 'lucide-vue-next'

defineProps({
  about: { type: String, required: true },
  facts: { type: Array, required: true },
})

// One icon per fact, in the same order as facts in portfolio.js
const icons = [MapPin, Briefcase, Clock, Target]
</script>

<template>
  <div class="about">
    <div class="card pad story">
      <Sparkles class="spark" aria-hidden="true" />
      <p class="text">{{ about }}</p>
    </div>

    <div class="facts">
      <div v-for="(f, idx) in facts" :key="idx" class="card fact hoverable">
        <span class="icon-tile"><component :is="icons[idx] || Sparkles" /></span>
        <div>
          <div class="label">{{ f.label }}</div>
          <div class="value">{{ f.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 16px;
}

.story {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 36px;
}

.spark {
  width: 22px;
  height: 22px;
  color: var(--accent);
}

.text {
  margin: 0;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: var(--text);
}

.facts {
  display: grid;
  gap: 12px;
}

.fact {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
}

.label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--subtle);
  margin-bottom: 4px;
}

.value {
  font-size: 15px;
  font-weight: 600;
}

@media (max-width: 820px) {
  .about {
    grid-template-columns: 1fr;
  }

  .story {
    padding: 24px;
  }
}
</style>
