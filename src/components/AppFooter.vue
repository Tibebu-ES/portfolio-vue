<script setup>
import {Mail, Github, Linkedin} from "lucide-vue-next";
defineProps({
  name: { type: String, required: true },
  links: { type: Object, required: true },
})

function year() {
  return new Date().getFullYear()
}
</script>

<template>
  <footer class="footer">
    <div class="container inner card pad">
      <div class="left">
        <div class="title">{{ name }}</div>
        <div class="muted">© {{ year() }} • Built with Vue 3 + Vite</div>
      </div>

      <div class="right">
        <a class="link" :href="links.github" target="_blank" rel="noopener"><Github/></a>
        <a class="link" :href="links.linkedin" target="_blank" rel="noopener"><Linkedin color="#3b82f6"/></a>
        <a class="link" :href="links.email"><Mail /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 0 0 26px;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.title {
  font-weight: 700;
  letter-spacing: 0.2px;
}

.muted {
  color: var(--muted);
  font-size: 13px;
  margin-top: 6px;
}

.right {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.link {
  color: var(--muted);
  padding: 8px 10px;
}

.link:hover {
  color: var(--text);
  background: var(--panel-strong);
}
</style>