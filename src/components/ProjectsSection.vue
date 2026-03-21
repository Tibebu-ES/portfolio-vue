<script setup>
import {Github, ExternalLink} from "lucide-vue-next";
defineProps({
  projects: { type: Array, required: true },
})

const getInitials = (title) => {
  return title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const getImageUrl = (name) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href;
}
</script>

<template>
  <div class="grid three">
    <article v-for="(p, idx) in projects" :key="idx" class="card project">
      <div v-if="p.cover_photo" class="cover">
        <img :src="getImageUrl(p.cover_photo)" :alt="p.title" />
      </div>
      <div v-else class="cover initials">
        <span>{{ getInitials(p.title) }}</span>
      </div>

      <div class="links">
        <a v-if="p.links && p.links.demo" class="cursor-pointer" :href="p.links.demo" target="_blank" rel="noopener">
          <ExternalLink/>
        </a>
        <a v-if="p.links && p.links.repo" class="cursor-pointer" :href="p.links.repo" target="_blank" rel="noopener">
         <Github />
        </a>
      </div>
      
      <div class="content">
        <div class="top">
          <h3 class="h3">{{ p.title }}</h3>
          <div class="chips">
            <span v-for="(t, j) in p.stack" :key="j" class="chip">{{ t }}</span>
          </div>
        </div>

        <p class="desc">{{ p.description }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cover {
  width: 100%;
  height: 250px;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.initials {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--panel-strong);
  font-size: 32px;
  font-weight: 700;
  color: var(--accent);
}

.cover img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 10px;
  padding: 4px 8px;
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
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  z-index: 10;
}

.links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  transition: transform 140ms ease, background 140ms ease;
  backdrop-filter: blur(8px);
}

.links a:hover {
  transform: scale(1.1);
  border-color: var(--accent);
}

.links a :deep(svg) {
  width: 18px;
  height: 18px;
}
</style>