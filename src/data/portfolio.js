export const portfolio = {
    name: 'Tibebu E.',
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
        github: 'https://github.com/Tibebu-ES',
        linkedin: 'https://www.linkedin.com/in/tibebu-eneyew/',
        email: 'mailto:tibebuenyew@gmail.com',
        resume: '/resume.pdf',
    },
    about:
        "I'm a full-stack developer focused on Laravel and Vue.js. I enjoy turning fuzzy requirements into clear, scalable solutions—whether that’s building an API, designing a dashboard, or improving performance in production.",
    facts: [
        { label: 'Location', value: 'Remote / Ethiopia' },
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
            title: 'Resource Scheduling and Booking Platform (Team2Book)',
            description:
                'A resource scheduling and booking platform for for clinics and hospitals. It is in production used by Canadian clinics to manage their team schedules. It basically assigns consumers to resources based on their priority and resource preferences. Notify users if there is a scheduling issue. Enable visualizing free resources and who is working where on a floor plan. ',
            stack: ['CodeIgniter 4', 'WordPress', 'MySQL', 'Chart.js'],
            achievements: ['Implemented robust resource scheduling app'],
            links: {
                demo: 'https://team2book.com'
            },
        },
        {
            title: 'SaaS Admin Dashboard (PPCAssist)',
            description:
                'Multi-tenant admin dashboard with role-based access, audit logs, and analytics widgets.',
            stack: ['Laravel', 'Livewire', 'Alpine.js', 'PostgreSQL'],
            achievements: ['Implemented new features and fix bugs'],
            links: {
                demo: 'https://ppcassist.com',
            },
        },
        {
            title: 'Task Manager APP',
            description:
                'A simple Task Management app with user authentication, task organization, and status tracking. The App allow users to create, update, delete, and categorize tasks with deadlines and priorities. Dashboard with summary ( the number of task by status and priority ) and a line chart to display the number of tasks completed in each month. ',
            stack: ['Laravel', 'Livewire', 'Alpine.js'],
            links: {
                repo: 'https://github.com/Tibebu-ES/task-manager',
            },
        }
    ],
    experience: [
        {
            title: 'Full‑Stack Developer',
            company: '3ALogic Inc.',
            period: '2021 — Present',
            bullets: [
                'Delivered features end-to-end: database schema → API → frontend UI.',
                'Integrated Teamup Calendar.',
            ],
        },
        {
            title: 'Laravel/Livewire Developer',
            company: 'PPCAssist',
            period: '2025 — Present',
            bullets: [
                'Implement new features and fix bugs in Livewire components.',
                'Amazon SP-API integration for syncing sellers data',
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