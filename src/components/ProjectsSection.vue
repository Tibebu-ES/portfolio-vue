<script setup>
defineProps({
  projects: { type: Array, required: true },
})
</script>

<template>
  <div class="grid three">
    <article v-for="(p, idx) in projects" :key="idx" class="card pad project">
      <div class="top">
        <h3 class="h3">{{ p.title }}</h3>
        <div class="chips">
          <span v-for="(t, j) in p.stack" :key="j" class="chip">{{ t }}</span>
        </div>
      </div>

      <p class="desc">{{ p.description }}</p>

      <ul v-if="p.achievements && p.achievements.length" class="bullets">
        <li v-for="(a, k) in p.achievements" :key="k">{{ a }}</li>
      </ul>

      <div class="links">
        <a v-if="p.links && p.links.demo" class="btn" :href="p.links.demo" target="_blank" rel="noopener">
          Live
        </a>
        <a v-if="p.links && p.links.repo" class="btn" :href="p.links.repo" target="_blank" rel="noopener">
          Code
        </a>
      </div>
    </article>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.top {
  display: grid;
  gap: 10px;
}

.h3 {
  margin: 0;
  font-size: 16px;
}

.desc {
  margin: 0;
  color: var(--muted);
  line-height: 1.65;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel-strong);
  color: var(--muted);
}

.bullets {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.65;
}

.links {
  margin-top: auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>