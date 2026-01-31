<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  headline: { type: String, required: true },
  summary: { type: String, required: true },
  highlights: { type: Array, required: true },
  links: { type: Object, required: true },
})
</script>

<template>
  <section id="top" class="hero">
    <div class="grid two">
      <div class="card pad hero-card">
        <p class="badge">
          <span aria-hidden="true">●</span>
          Available for Laravel + Vue work
        </p>

        <h1 class="h1">
          {{ name }}
          <span class="sub">{{ role }}</span>
        </h1>

        <p class="headline">{{ headline }}</p>
        <p class="summary">{{ summary }}</p>

        <div class="cta">
          <a class="btn primary" :href="links.email">Contact</a>
          <a class="btn" :href="links.github" target="_blank" rel="noopener">GitHub</a>
          <a class="btn" :href="links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>

      <div class="card pad hero-card">
        <h3 class="h3">What I do best</h3>
        <ul class="list">
          <li v-for="(h, idx) in highlights" :key="idx">{{ h }}</li>
        </ul>

        <div class="mini">
          <div class="mini-card">
            <div class="mini-title">Backend</div>
            <div class="mini-body">Laravel, APIs, queues, auth, caching</div>
          </div>
          <div class="mini-card">
            <div class="mini-title">Frontend</div>
            <div class="mini-body">Vue 3, dashboards, forms, UX polish</div>
          </div>
          <div class="mini-card">
            <div class="mini-title">Data</div>
            <div class="mini-body">MySQL/Postgres, indexing, performance</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 10px;
}

.hero-card {
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: radial-gradient(600px 220px at 10% 0%, rgba(124, 92, 255, 0.22), transparent 60%);
  pointer-events: none;
}

.h1 {
  margin: 14px 0 8px;
  font-size: 34px;
  line-height: 1.1;
}

.sub {
  display: block;
  font-size: 14px;
  margin-top: 8px;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.2px;
}

.h3 {
  margin: 0 0 12px;
  font-size: 16px;
}

.headline {
  margin: 0 0 10px;
  font-size: 16px;
  color: var(--text);
}

.summary {
  margin: 0 0 16px;
  color: var(--muted);
  line-height: 1.65;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.7;
}

.mini {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}

.mini-card {
  border: 1px solid var(--border);
  background: var(--panel-strong);
  border-radius: var(--radius-sm);
  padding: 12px;
}

.mini-title {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 6px;
}

.mini-body {
  font-size: 14px;
  color: var(--text);
}
</style>