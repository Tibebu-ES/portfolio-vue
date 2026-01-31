<script setup>
defineProps({
  skillGroups: { type: Array, required: true },
})
</script>

<template>
  <div class="grid two">
    <article v-for="(g, idx) in skillGroups" :key="idx" class="card pad">
      <h3 class="h3">{{ g.title }}</h3>
      <ul class="list">
        <li v-for="(s, j) in g.skills" :key="j">{{ s }}</li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.h3 {
  margin: 0 0 10px;
  font-size: 16px;
}
.list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.75;
}
</style>