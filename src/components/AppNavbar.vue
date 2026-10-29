<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

const props = defineProps({
  name: { type: String, required: true },
  sections: { type: Array, required: true },
  theme: { type: String, required: true },
})

defineEmits(['toggle-theme'])

const route = useRoute()
const router = useRouter()

const menuOpen = ref(false)
const scrolled = ref(false)
const activeId = ref('')

const initials = props.name
  .split(/\s+/)
  .map((w) => w[0])
  .join('')
  .replace('.', '')
  .slice(0, 2)
  .toUpperCase()

function scrollToId(id) {
  menuOpen.value = false
  if (route.name !== 'home') {
    router.push({ name: 'home', hash: `#${id}` })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToTop() {
  menuOpen.value = false
  if (route.name !== 'home') {
    router.push({ name: 'home' })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Highlight the section currently in view
let observer = null

function observeSections() {
  observer?.disconnect()
  if (route.name !== 'home') {
    activeId.value = ''
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeId.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  for (const s of props.sections) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  observeSections()
})

watch(
  () => route.name,
  () => setTimeout(observeSections, 50),
)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header class="nav-wrap">
    <div class="nav container" :class="{ scrolled, open: menuOpen }">
      <a class="brand" href="/" @click.prevent="scrollToTop" :aria-label="`${name} — home`">
        <span class="logo">{{ initials }}</span>
        <span class="brand-name">{{ name }}</span>
      </a>

      <nav class="links" aria-label="Primary">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="navlink"
          :class="{ active: activeId === s.id }"
          @click.prevent="scrollToId(s.id)"
        >
          {{ s.label }}
        </a>
      </nav>

      <div class="actions">
        <button
          class="icon-btn"
          type="button"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="$emit('toggle-theme')"
        >
          <Sun v-if="theme === 'dark'" />
          <Moon v-else />
        </button>
        <button
          class="icon-btn menu-btn"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" />
          <Menu v-else />
        </button>
      </div>

      <Transition name="drop">
        <nav v-if="menuOpen" class="mobile-menu" aria-label="Mobile">
          <a
            v-for="s in sections"
            :key="s.id"
            :href="`#${s.id}`"
            class="mobile-link"
            @click.prevent="scrollToId(s.id)"
          >
            {{ s.label }}
          </a>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 14px 0;
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 8px 8px 8px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: background 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
}

.nav.scrolled,
.nav.open {
  background: color-mix(in oklab, var(--surface-solid) 72%, transparent);
  border-color: var(--border);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  box-shadow: var(--shadow);
}

.nav.open {
  border-radius: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.logo {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: var(--gradient);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.links {
  display: flex;
  gap: 2px;
  align-items: center;
}

.navlink {
  position: relative;
  color: var(--muted);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  transition: color 160ms ease, background 160ms ease;
}

.navlink:hover {
  color: var(--text);
}

.navlink.active {
  color: var(--text);
  background: var(--surface-2);
}

.actions {
  display: flex;
  gap: 6px;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.icon-btn:hover {
  border-color: var(--border-strong);
  background: var(--surface-2);
}

.icon-btn:active {
  transform: scale(0.94);
}

.icon-btn svg {
  width: 18px;
  height: 18px;
}

.menu-btn {
  display: none;
}

.mobile-menu {
  display: none;
}

@media (max-width: 820px) {
  .links {
    display: none;
  }

  .menu-btn {
    display: grid;
  }

  .nav.open {
    flex-wrap: wrap;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 6px 4px 6px;
    border-top: 1px solid var(--border);
  }

  .mobile-link {
    padding: 12px 10px;
    border-radius: 12px;
    color: var(--muted);
    font-weight: 500;
  }

  .mobile-link:hover {
    color: var(--text);
    background: var(--surface-2);
  }
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
