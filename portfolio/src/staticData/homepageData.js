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
                    email: "abhijithvjn1999@gmailcom",
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
                            title: "Building a Modern Portfolio with Next.js",
                            content: `
          In this blog, I will walk you through building a modern portfolio using Next.js. 
          We will cover App Router, dynamic routes, data-driven components, Tailwind CSS for styling, 
          and optimizations for performance and SEO. By the end of this guide, you'll have a fully functional, 
          responsive, and optimized portfolio ready to showcase your work.
        `,
                        },
                        {
                            title: "React Query vs SWR: A Practical Guide",
                            content: `
          React Query and SWR are two popular libraries for data fetching in React applications. 
          In this blog, we will compare their core concepts, caching strategies, ease of use, 
          and performance considerations. You'll learn when to use each, and how to integrate 
          them into your modern React or Next.js projects.
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
