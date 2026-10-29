<script setup>
import { Github, ExternalLink, ArrowUpRight } from 'lucide-vue-next'

defineProps({
  projects: { type: Array, required: true },
})

const getInitials = (title) =>
  title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

const getImageUrl = (name) => new URL(`../assets/projects/${name}`, import.meta.url).href
</script>

<template>
  <div class="grid three">
    <router-link
      v-for="(p, idx) in projects"
      :key="idx"
      :to="{ name: 'project-detail', params: { id: idx } }"
      class="card project"
    >
      <div class="cover">
        <img v-if="p.cover_photo" :src="getImageUrl(p.cover_photo)" :alt="p.title" loading="lazy" />
        <div v-else class="initials"><span>{{ getInitials(p.title) }}</span></div>

        <div class="links">
          <a v-if="p.links?.demo" :href="p.links.demo" target="_blank" rel="noopener" aria-label="Live demo" @click.stop>
            <ExternalLink />
          </a>
          <a v-if="p.links?.repo" :href="p.links.repo" target="_blank" rel="noopener" aria-label="Source code" @click.stop>
            <Github />
          </a>
        </div>
      </div>

      <div class="content">
        <div class="title-row">
          <h3 class="h3">{{ p.title }}</h3>
          <ArrowUpRight class="arrow" />
        </div>
        <p class="desc">{{ p.description }}</p>
        <div class="chips">
          <span v-for="(t, j) in p.stack" :key="j" class="chip">{{ t }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 8px;
}

.project:hover {
  border-color: var(--border-strong);
  transform: translateY(-4px);
}

.cover {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: calc(var(--radius) - 8px);
  overflow: hidden;
  background: var(--surface-2);
  border: 1px solid var(--border);
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.project:hover .cover img {
  transform: scale(1.05);
}

.initials {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 60%),
    var(--surface-2);
}

.initials span {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.links {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 6px;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 200ms ease, transform 200ms ease;
}

.project:hover .links,
.project:focus-within .links {
  opacity: 1;
  transform: none;
}

@media (hover: none) {
  .links {
    opacity: 1;
    transform: none;
  }
}

.links a {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--surface-solid) 80%, transparent);
  border: 1px solid var(--border-strong);
  color: var(--text);
  backdrop-filter: blur(8px);
  transition: transform 140ms ease;
}

.links a:hover {
  transform: scale(1.08);
}

.links svg {
  width: 16px;
  height: 16px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  padding: 18px 14px 14px;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.arrow {
  width: 20px;
  height: 20px;
  color: var(--subtle);
  transition: transform 200ms ease, color 200ms ease;
}

.project:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}

.desc {
  margin: 0;
  flex: 1;
  font-size: 14px;
  line-height: 1.65;
  color: var(--muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
