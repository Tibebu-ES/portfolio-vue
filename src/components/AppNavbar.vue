<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  sections: { type: Array, required: true },
  themeLabel: { type: String, required: true },
})

defineEmits(['toggle-theme'])

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <header class="nav-wrap">
    <div class="nav container">
      <a class="brand" href="#" @click.prevent="scrollToId('top')">
        <div class="dot" aria-hidden="true" />
        <div class="brand-text">
          <strong class="name">{{ name }}</strong>
          <span class="role">{{ role }}</span>
        </div>
      </a>

      <nav class="links" aria-label="Primary">
        <button
            v-for="s in sections"
            :key="s.id"
            type="button"
            class="navlink"
            @click="scrollToId(s.id)"
        >
          {{ s.label }}
        </button>
      </nav>

      <div class="actions">
        <button class="btn" type="button" @click="$emit('toggle-theme')">
          Theme: <span class="kbd">{{ themeLabel }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: color-mix(in oklab, var(--bg) 68%, transparent);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 220px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.18);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.name {
  font-size: 14px;
}

.role {
  font-size: 12px;
  color: var(--muted);
}

.links {
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.navlink {
  border: 1px solid transparent;
  background: transparent;
  color: var(--muted);
  padding: 10px 10px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 140ms ease, border-color 140ms ease, color 140ms ease;
}

.navlink:hover {
  color: var(--text);
  background: var(--panel);
  border-color: var(--border);
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  min-width: 220px;
}

@media (max-width: 900px) {
  .links {
    display: none;
  }
  .brand,
  .actions {
    min-width: unset;
  }
}
</style>