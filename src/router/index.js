import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import { portfolio } from '@/data/portfolio.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Tibebu E. | Full-Stack Web Developer',
        description: 'Full-Stack Web Developer specializing in Laravel and Vue.js. Building clean APIs and fast, maintainable web applications.'
      }
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true,
      meta: {
        title: (route) => {
          const id = route.params.id;
          const project = portfolio.projects[id];
          return project ? `${project.title} | Tibebu E.` : 'Project Detail | Tibebu E.';
        },
        description: (route) => {
          const id = route.params.id;
          const project = portfolio.projects[id];
          return project ? project.description : 'Project detail and case study.';
        }
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title;
  const description = typeof to.meta.description === 'function' ? to.meta.description(to) : to.meta.description;

  if (title) {
    document.title = title;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
  }
  
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
  }
});

export default router
