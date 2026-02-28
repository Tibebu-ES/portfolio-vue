<script setup>
import { motion } from "motion-v";
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="section">
    <div class="head">
      <h2 class="title font-bold">{{ title }}</h2>
      <motion.div
        class="line"
        aria-hidden="true"
        :initial="{ scaleX: 0 }"
        :whileInView="{ scaleX: 1 }"
        :transition="{ duration: 1.2, ease: 'easeOut' }"
        :viewport="{ once: true }"
      />
    </div>

    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 26px 0;
}

.head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.title {
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.2px;
}

.line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.content {
  margin-top: 12px;
}
</style>