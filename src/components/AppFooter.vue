<script setup>
import { Mail, Github, Linkedin } from 'lucide-vue-next'

defineProps({
  name: { type: String, required: true },
  links: { type: Object, required: true },
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <div class="muted">© {{ year }} {{ name }} · Built with Vue 3 + Vite</div>

      <div class="right">
        <a class="link" :href="links.github" target="_blank" rel="noopener" aria-label="GitHub"><Github /></a>
        <a class="link" :href="links.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin /></a>
        <a class="link" :href="links.email" aria-label="Email"><Mail /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 24px 0;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}

.right {
  display: flex;
  gap: 4px;
}

.link {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  color: var(--muted);
  transition: color 160ms ease, background 160ms ease;
}

.link:hover {
  color: var(--text);
  background: var(--surface-2);
}

.link svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 540px) {
  .inner {
    flex-direction: column-reverse;
  }
}
</style>
