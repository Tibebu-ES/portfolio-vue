<script setup>
defineProps({
  experience: { type: Array, required: true },
})
</script>

<template>
  <div class="grid two">
    <article v-for="(e, idx) in experience" :key="idx" class="card pad">
      <div class="row">
        <h3 class="h3">{{ e.title }}</h3>
        <span class="period">{{ e.period }}</span>
      </div>
      <div class="company">{{ e.company }}</div>

      <ul class="list">
        <li v-for="(b, j) in e.bullets" :key="j">{{ b }}</li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: baseline;
}

.h3 {
  margin: 0;
  font-size: 16px;
}

.period {
  color: var(--muted);
  font-size: 13px;
}

.company {
  margin-top: 6px;
  color: var(--muted);
  font-size: 13px;
}

.list {
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.75;
}
</style>