<script setup>
import { motion } from 'motion-v'

defineProps({
  id: { type: String, required: false, default: '' },
  index: { type: String, required: false, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, required: false, default: '' },
})
</script>

<template>
  <section :id="id" class="section">
    <motion.div
      class="head"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-60px' }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    >
      <div class="titles">
        <span v-if="index" class="eyebrow">{{ index }} — {{ id || 'section' }}</span>
        <h2 class="title">{{ title }}</h2>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="actions">
        <slot name="actions" />
      </div>
    </motion.div>

    <motion.div
      class="content"
      :initial="{ opacity: 0, y: 24 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-60px' }"
      :transition="{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
    >
      <slot />
    </motion.div>
  </section>
</template>

<style scoped>
.section {
  padding: 72px 0 8px;
  scroll-margin-top: 72px;
}

.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
}

.titles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  margin: 0;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.subtitle {
  margin: 0;
  color: var(--muted);
  max-width: 560px;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .section {
    padding-top: 56px;
  }
}
</style>
