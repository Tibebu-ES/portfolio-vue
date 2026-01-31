<script setup>
defineProps({
  about: { type: String, required: true },
  facts: { type: Array, required: true },
})
</script>

<template>
  <div class="grid two">
    <div class="card pad">
      <p class="text">{{ about }}</p>
      <div class="note">
        Tip: Edit this text in <span class="kbd">src/data/portfolio.js</span>
      </div>
    </div>

    <div class="card pad">
      <h3 class="h3">Quick facts</h3>
      <div class="facts">
        <div v-for="(f, idx) in facts" :key="idx" class="fact">
          <div class="label">{{ f.label }}</div>
          <div class="value">{{ f.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.note {
  margin-top: 14px;
  color: var(--muted);
  font-size: 13px;
}

.h3 {
  margin: 0 0 12px;
  font-size: 16px;
}

.facts {
  display: grid;
  gap: 10px;
}

.fact {
  border: 1px solid var(--border);
  background: var(--panel-strong);
  border-radius: var(--radius-sm);
  padding: 12px;
}

.label {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 6px;
}

.value {
  font-size: 14px;
  color: var(--text);
}
</style>