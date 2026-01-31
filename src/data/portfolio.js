export const portfolio = {
    name: 'Your Name',
    role: 'Full‑Stack Web Developer',
    headline: 'Laravel + Vue.js • Clean APIs • Fast, maintainable products',
    summary:
        'I build modern web apps with Laravel on the backend and Vue.js on the frontend. I care about clean architecture, performance, DX, and shipping features that users actually love.',
    highlights: [
        'Laravel REST APIs + auth + queues + notifications',
        'Vue 3 SPA dashboards (Vite, Composition API)',
        'MySQL/PostgreSQL, Redis, background jobs, CI basics',
    ],
    sections: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ],
    links: {
        github: 'https://github.com/<your-handle>',
        linkedin: 'https://www.linkedin.com/in/<your-handle>/',
        email: 'mailto:you@example.com',
        resume: '/resume.pdf',
    },
    about:
        "I'm a full-stack developer focused on Laravel and Vue.js. I enjoy turning fuzzy requirements into clear, scalable solutions—whether that’s building an API, designing a dashboard, or improving performance in production.",
    facts: [
        { label: 'Location', value: 'Remote / Your City' },
        { label: 'Availability', value: 'Open to opportunities' },
        { label: 'Focus', value: 'Laravel + Vue.js' },
    ],
    skillGroups: [
        {
            title: 'Backend (Laravel / PHP)',
            skills: [
                'Laravel (REST APIs, Eloquent, Policies, Jobs/Queues)',
                'Authentication (sessions/JWT), RBAC',
                'Testing basics (feature/unit), validation, migrations',
            ],
        },
        {
            title: 'Frontend (Vue.js)',
            skills: ['Vue 3 (Composition API)', 'Vite', 'State patterns, forms, component design'],
        },
        {
            title: 'Data & Infrastructure',
            skills: ['MySQL / PostgreSQL', 'Redis', 'Docker basics', 'Nginx/Apache basics', 'CI basics'],
        },
        {
            title: 'Product & Quality',
            skills: ['Debugging, profiling mindset', 'UX-friendly UI building', 'Documentation & handoff'],
        },
    ],
    projects: [
        {
            title: 'SaaS Admin Dashboard',
            description:
                'Multi-tenant admin dashboard with role-based access, audit logs, and analytics widgets.',
            stack: ['Laravel', 'Vue 3', 'MySQL', 'Redis'],
            achievements: ['Reduced page load time by ~40% via query optimization and caching'],
            links: {
                demo: 'https://example.com',
                repo: 'https://github.com/<your-handle>/<repo>',
            },
        },
        {
            title: 'E‑commerce API + Storefront',
            description:
                'Headless commerce setup: product catalog, cart/checkout flow, and order management.',
            stack: ['Laravel', 'Vue 3', 'PostgreSQL'],
            achievements: ['Implemented robust validation + error handling for smooth checkout UX'],
            links: {
                demo: 'https://example.com',
                repo: 'https://github.com/<your-handle>/<repo>',
            },
        },
        {
            title: 'Internal Tooling & Automation',
            description:
                'Admin tooling for operations: bulk actions, CSV imports, background jobs, notifications.',
            stack: ['Laravel', 'Queues', 'Redis'],
            achievements: ['Cut manual ops time significantly using queued imports and status tracking'],
            links: {
                demo: 'https://example.com',
                repo: 'https://github.com/<your-handle>/<repo>',
            },
        },
    ],
    experience: [
        {
            title: 'Full‑Stack Developer',
            company: 'Company Name',
            period: '2023 — Present',
            bullets: [
                'Built and maintained Laravel APIs consumed by Vue SPA dashboards.',
                'Designed reusable Vue components and forms for faster feature delivery.',
                'Improved performance by adding caching and removing N+1 queries.',
            ],
        },
        {
            title: 'Web Developer',
            company: 'Previous Company',
            period: '2021 — 2023',
            bullets: [
                'Delivered features end-to-end: database schema → API → frontend UI.',
                'Collaborated with product to break down requirements and estimate work.',
            ],
        },
    ],
    contact: {
        title: "Let's build something solid",
        blurb:
            "Have a role or a project in mind? Send a message with a bit of context and what success looks like. I'll reply with next steps.",
        primaryCtaLabel: 'Email me',
        secondaryCtaLabel: 'View GitHub',
    },
}