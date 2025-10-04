// homeData.js
const homeData = {
    data: {
        widgets: [
            // Home Banner
            {
                widget_type: "HomeBanner",
                data: {
                    image: "/ProfileImage/abhi_profile.jpeg",
                    title: "Hi, I'm Abhijith Vijayan",
                    description: "A passionate React/Next.js developer crafting performant and beautiful web experiences.",
                },
            },

            // About Section
            {
                widget_type: "About",
                data: {
                    title: "About Me",
                    subtitle: "Web Developer with expertise in React, Next.js, and modern web technologies.",
                    qualifications: [
                        {
                            degree: "Master of Computer Application",
                            college: "Sree Narayana Gurukulam College Of Engineering",
                            university: "Kerala Technological University",
                        },
                        {
                            degree: "B.Com Computer Application",
                            college: "Indira Gandhi College of Arts & Science",
                            university: "Mahatma Gandhi University",
                        },
                    ],
                    experience: [
                        {
                            role: "React JS Developer",
                            company: "Webandcrafts",
                            duration: "Dec 2024 - Present",
                        },
                        {
                            role: "Internship",
                            company: "Kompetenzen Technologies, Kochi",
                            duration: "Jun 2024 – Nov 2024",
                        },
                        {
                            role: "Internship",
                            company: "Dishasoft Pvt Limited, Muvattupuzha",
                            duration: "Jan 2024 – May 2024",
                        },
                    ],
                },
            },

            // Projects Section
            {
                widget_type: "Projects",
                data: {
                    title: "Projects",
                    description: "A collection of my latest web development projects.",
                    categories: [
                        {
                            id: "webandcrafts",
                            name: "WEBANDCRAFTS",
                            projects: [
                                {
                                    id: "proj-1",
                                    title: "JNU (University Website)",
                                    description:
                                        "A full-stack university web platform providing students, faculty, and administrators with a seamless digital experience. Front-end: Next.js, Back-end: Strapi + PostgreSQL, Styling: Tailwind CSS.",
                                    contribution: [
                                        "Developed and optimized front-end components using Next.js.",
                                        "Implemented fetch for SSR and SWR for pagination/infinite loading.",
                                        "Built responsive UI with Tailwind CSS.",
                                        "Used next/image for optimized images.",
                                        "Integrated Informed form library for validation and submission.",
                                    ],
                                },
                                {
                                    id: "proj-2",
                                    title: "SPICETREE (Resort Website)",
                                    description:
                                        "A full-stack resort website designed for seamless booking and browsing. Front-end: React.js, Back-end: Strapi, Focused on responsive design.",
                                    contribution: [
                                        "Developed and maintained front-end components using React.js.",
                                        "Integrated Strapi APIs for dynamic content.",
                                        "Designed responsive and mobile-friendly UI layouts.",
                                        "Implemented booking forms and interactive content features.",
                                    ],
                                },
                                {
                                    id: "proj-3",
                                    title: "MEXECUTION (Website Revamp)",
                                    description:
                                        "Revamped web application to improve UX, performance, and maintainability. Front-end: React.js/Next.js, migrated to App Router.",
                                    contribution: [
                                        "Integrated backend APIs for dynamic content.",
                                        "Migrated routing from Pages Router to App Router.",
                                        "Optimized front-end performance and responsiveness.",
                                        "Maintained responsive UI components.",
                                    ],
                                },
                            ],
                        },
                        {
                            id: "self-learned",
                            name: "SELF LEARNED",
                            projects: [
                                {
                                    id: "proj-4",
                                    title: "TASKLY",
                                    technologies: ["React.js", "React Query", "Jotai", "TanStack Table"],
                                    description:
                                        "Task management app for practicing React patterns, state management, and dynamic tables.",
                                },
                            ],
                        },
                    ],
                },
            },
            // Contact Section
            {
                widget_type: "Contact",
                data: {
                    title: "Contact Me",
                    phone: "+91-8086085370",
                    message: "Feel free to reach out for collaborations or opportunities.",
                    email: "abhijithvjn1999@gmail.com",
                    button: {
                        title: "Contact Me",
                        url: "/contact",
                        text: "You are one click away",
                    },
                },
            },

            // Blogs Section
            {
                widget_type: "Blogs",
                data: {
                    title: "Blogs",
                    posts: [
                        {
                            title: "State Management in React and Next.js: From Context to Jotai",
                            content: `
          Managing state efficiently is at the heart of every React and Next.js application.
          In this post, we’ll explore modern state management tools—Jotai, Zustand, and Recoil—
          and how they compare to the traditional Context API. We’ll also discuss how Server Components
          and React Suspense change the way we think about client-side state in Next.js 15.
        `,
                        },
                        {
                            title: "SWR vs Redux Toolkit Query: The New Era of Data Fetching",
                            content: `
          Data fetching has evolved beyond useEffect and fetch. In this guide, we’ll compare SWR and Redux Toolkit Query—
          two powerful tools designed for caching, revalidation, and server synchronization in React and Next.js apps.
          You’ll learn when to use each, how they handle stale data, and how to integrate them with Server Actions
          for hybrid data fetching strategies.
        `,
                        },
                        {
                            title: "Building Reactive UI with Zustand and Next.js",
                            content: `
          Zustand offers a minimalist and fast approach to state management, ideal for modern React and Next.js projects.
          In this blog, we’ll walk through setting up a global store, optimizing performance using selectors,
          and combining Zustand with React Server Components for clean, scalable architectures.
        `,
                        },
                        {
                            title: "Stop Overusing useEffect: Smarter Patterns for React and Next.js",
                            content: `
          Many developers rely on useEffect for logic that doesn't belong there — from data fetching to DOM manipulation.
          In this post, we’ll explore when useEffect is truly necessary, and when you can replace it with
          Server Components, derived state, or event-driven updates. You’ll learn practical refactors that 
          simplify your components, improve performance, and align with React’s new rendering model.
        `,
                        },
                    ],
                    readMoreButton: {
                        text: "Read More",
                        url: "/blogs",
                    },
                },
            },
        ],
    },
};

export default homeData;
