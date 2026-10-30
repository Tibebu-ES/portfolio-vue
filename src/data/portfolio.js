export const portfolio = {
    name: 'Tibebu E.',
    role: 'Full‑Stack PHP Developer',
    headline: 'PHP & Laravel • AI integration • Healthcare software',
    summary:
        'I build production web apps with Laravel, CodeIgniter and WordPress, from the database and APIs to the dashboards people use every day. My recent work includes clinic scheduling platforms, patient portals, and AI support agents that answer from documentation and live app data.',
    // Shown in the three hero cards, in order: Backend, AI Integration, Healthcare
    highlights: [
        'Laravel, CodeIgniter & WordPress: REST APIs, background jobs, role-based access',
        'AI support agents with the Laravel AI SDK and OpenAI: RAG, vector stores, tool calling',
        'Clinic scheduling, patient portals',
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
        "I'm a full-stack PHP developer with 6+ years of experience building production web apps with Laravel, CodeIgniter and WordPress. Much of my work is healthcare software for Canadian clinics: scheduling and team-management systems, patient portals, and bilingual (English/French) platforms built around Quebec's regulatory requirements. Lately I've been adding AI to these products, building support agents with the Laravel AI SDK and OpenAI that answer from documentation (RAG) and from live app data (tool calling). I enjoy turning fuzzy requirements into clear, maintainable solutions and shipping them end to end.",
    facts: [
        { label: 'Location', value: 'Remote / Ethiopia (UTC+3)' },
        { label: 'Experience', value: '6+ years in PHP & Laravel' },
        { label: 'Availability', value: 'Open to opportunities' },
        { label: 'Focus', value: 'PHP / Laravel • AI integration' },
    ],
    skillGroups: [
        {
            title: 'Backend (PHP)',
            skills: [
                'Laravel (REST APIs, Eloquent, Policies, Jobs/Queues)',
                'CodeIgniter 4 REST APIs',
                'WordPress plugins & Gravity Forms (custom hooks)',
                'Livewire',
                'Authentication & role-based access control',
                'Testing basics (feature/unit), validation, migrations',
            ],
        },
        {
            title: 'AI Integration',
            skills: [
                'Laravel AI SDK with OpenAI models',
                'RAG with vector stores',
                'Tool calling over application data',
                'Domain-restricted web search',
                'Knowledge-base management & retrieval cost control',
            ],
        },
        {
            title: 'Frontend',
            skills: [
                'Vue 3 (Composition API) + Vite',
                'Livewire + Alpine.js',
                'Dashboards',
                'Forms & component design',
            ],
        },
        {
            title: 'Data & Infrastructure',
            skills: ['MySQL / PostgreSQL', 'Redis', 'Background jobs & queues', 'Docker basics', 'Nginx/Apache basics', 'CI basics'],
        },
        {
            title: 'Integrations',
            skills: [
                'REST API design & consumption',
                'Amazon SP-API (seller data sync)',
                'Teamup Calendar',
                'Third-party service integrations',
            ],
        },
        {
            title: 'Healthcare & Product',
            skills: [
                'Clinic scheduling & team-management systems',
                'Patients consultation systems',
                'Bilingual (English/French) applications',
            ],
        },
    ],
    projects: [
        {
            title: 'Team2Book',
            description:
                'A clinic scheduling and team-management platform in production with Canadian clinics. It handles resource scheduling, staff availability and clinic workflows: assigning people to resources based on priority and preferences, flagging scheduling issues, and showing free resources and who is working where on a floor plan.',
            stack: ['CodeIgniter 4', 'REST API', 'MySQL', 'WordPress', 'Chart.js'],
            achievements: [
                'Built a robust resource scheduling system used in production by Canadian clinics',
                'Developed the CodeIgniter REST API backed by MySQL',
                'Implemented third-party integrations and background jobs',
                'Built dashboards for schedules and staff availability',
            ],
            links: {
                demo: 'https://team2book.com'
            },
            cover_photo: 'team2book.png',
        },
        {
            title: 'Team2Book AI Assistant',
            description:
                'An AI support agent for the Team2Book platform. It answers questions from the product documentation and from each clinic\'s own data, such as "Who is working today?" or "How many nurses are available this weekend?"',
            stack: ['Laravel AI SDK', 'OpenAI', 'RAG', 'Vector Store', 'Tool Calling'],
            achievements: [
                'Built the agent with the Laravel AI SDK and OpenAI models',
                'Implemented RAG over an OpenAI vector store of the product documentation',
                'Added tool calling so the agent can answer staffing questions from client-specific app data',
                'Restricted web search to specific trusted domains',
                'Wrote a script to add and manage knowledge-base documents, replacing old versions to keep retrieval costs low',
            ],
            cover_photo: 'team2bookAI.png',
        },
        {
            title: 'PPCAssist',
            description:
                'Multi-tenant admin dashboard with role-based access, audit logs, and analytics widgets.',
            stack: ['Laravel', 'Livewire', 'Alpine.js', 'PostgreSQL'],
            achievements: ['Implemented new features and fix bugs'],
            links: {
                demo: 'https://ppcassist.com',
            },
            cover_photo: 'ppcassist.png',
        },
        {
            title: 'Migraine Patients Consultation',
            description:
                'A live platform connecting migraine patients in Quebec with healthcare professionals for personalized care and treatment management. It includes a patient portal, multi-clinic support, questionnaires and healthcare dashboards, in English and French.',
            stack: ['WordPress', 'PHP', 'JavaScript', 'Gravity Forms'],
            achievements: [
                'Designed and implemented the whole application as a custom WordPress plugin',
                'Built patient records and a patient portal with multi-clinic support',
                'Implemented role-based access for patients, pharmacists, neurologists and administrators',
                'Extended Gravity Forms with custom hooks and reusable PHP functionality for questionnaires',
                'Delivered full English/French support and met Quebec healthcare requirements, including RAMQ',
            ],
            links: {
                demo: 'https://migraineneuro.ca/',
            },
            cover_photo: 'migrainePatientsConsultation.png',
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