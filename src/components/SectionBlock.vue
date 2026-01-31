<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="section">
    <div class="head">
      <h2 class="title">{{ title }}</h2>
      <div class="line" aria-hidden="true" />
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