<script setup>
defineProps({
  experience: { type: Array, required: true },
})
</script>

<template>
  <ol class="timeline">
    <li v-for="(e, idx) in experience" :key="idx" class="item">
      <span class="marker" aria-hidden="true" />
      <div class="period">{{ e.period }}</div>
      <article class="card pad hoverable">
        <h3 class="h3">{{ e.title }}</h3>
        <div class="company">{{ e.company }}</div>
        <ul class="list">
          <li v-for="(b, j) in e.bullets" :key="j">{{ b }}</li>
        </ul>
      </article>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), var(--border) 60%, transparent);
}

.item {
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 24px;
  padding-left: 36px;
}

.marker {
  position: absolute;
  left: 0;
  top: 26px;
  width: 15px;
  height: 15px;
  border-radius: 999px;
  background: var(--bg);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.period {
  padding-top: 24px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
}

.h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.company {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
}

.list {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 14.5px;
}

.list li {
  position: relative;
  padding-left: 18px;
}

.list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.7em;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: var(--border-strong);
}

@media (max-width: 720px) {
  .item {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-left: 30px;
  }

  .period {
    padding-top: 0;
  }

  .marker {
    top: 3px;
  }
}
</style>
