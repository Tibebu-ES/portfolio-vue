<script setup>
import {Mail, Github, Linkedin} from "lucide-vue-next";
defineProps({
  contact: { type: Object, required: true },
  links: { type: Object, required: true },
})
</script>

<template>
  <div class="grid two">
    <div class="card pad">
      <h3 class="h3">{{ contact.title }}</h3>
      <p class="text">{{ contact.blurb }}</p>

      <div class="cta">
        <a class="btn primary" :href="links.email"><Mail/>{{ contact.primaryCtaLabel }}</a>
        <a class="btn" :href="links.github" target="_blank" rel="noopener"><Github/>{{ contact.secondaryCtaLabel }}</a>
        <a class="btn" :href="links.linkedin" target="_blank" rel="noopener"><Linkedin color="#3b82f6"/>LinkedIn</a>
      </div>

    </div>

    <div class="card pad">
      <h3 class="h3">What to include</h3>
      <ul class="list">
        <li>Project/role + timeline</li>
        <li>Stack (Laravel version, Vue setup, hosting)</li>
        <li>Key requirements (auth, payments, admin, analytics)</li>
        <li>Definition of done (KPIs, performance, UX)</li>
      </ul>

      <div class="mini">
        <span class="badge">Response time: typically within 24–48h</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h3 {
  margin: 0 0 10px;
  font-size: 16px;
}

.text {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.7;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hint {
  margin: 14px 0 0;
  font-size: 13px;
  color: var(--muted);
}

.list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.75;
}

.mini {
  margin-top: 14px;
}
</style>