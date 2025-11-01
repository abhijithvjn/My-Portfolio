"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./projectsDesktop.module.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsDesktop = ({ data }) => {
    const sectionRef = useRef(null);
    const categoryRefs = useRef([]);

    const getElements = (category) => {
        const title = category.querySelector(`.${styles.categoryTitle}`);
        const card = category.querySelector(`.${styles.card}`);
        const innerCard = card.querySelector(".innerCard");
        return {
            title,
            card,
            innerCard,
            projectTitle: innerCard.querySelector(".projectTitle"),
            projectDesc: innerCard.querySelector(".projectDesc"),
            projectList: innerCard.querySelector(".projectList"),
        };
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            categoryRefs.current.forEach((category, i) => {
                if (!category) return;

                const { title, card, innerCard, projectTitle, projectDesc, projectList } = getElements(category);
                const categoryData = data.categories[i].projects;
                const steps = categoryData.length;

                let currentIndex = 0;
                let allowScroll = true;
                const scrollTimeout = gsap.delayedCall(0.8, () => (allowScroll = true)).pause();

                // 🧩 Helper to update project content
                const updateProject = (index) => {
                    const project = categoryData[index];
                    gsap.to(innerCard, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            projectTitle.textContent = project.title;
                            projectDesc.textContent = project.description;
                            projectList.innerHTML = project.contribution?.map((p) => `<li>${p}</li>`).join("") || "";
                            gsap.to(innerCard, { opacity: 1, duration: 0.3 });
                        },
                    });
                };
                let observer = ScrollTrigger.observe({
                    type: "wheel,touch",
                    onUp: () => allowScroll && gotoProject(currentIndex - 1, false),
                    onDown: () => allowScroll && gotoProject(currentIndex + 1, true),
                    tolerance: 10,
                    preventDefault: true,
                });

                const enableObserver = () => {
                    if (!observer.isEnabled) observer.enable();
                };
                const disableObserver = () => {
                    if (observer.isEnabled) observer.disable();
                };

                // 🔹 Pin the category title & card
                const pinTrigger = ScrollTrigger.create({
                    trigger: category,
                    start: "top top",
                    end: "+=1000", // adjust as needed
                    pin: card,
                    pinSpacing: true,
                    onEnter: () => enableObserver(),
                    onLeave: () => disableObserver(),
                    onEnterBack: () => enableObserver(),
                    onLeaveBack: () => disableObserver(),
                });

                ScrollTrigger.create({
                    trigger: category,
                    start: "top top+=150",
                    end: "+=1000",
                    pin: title,
                    pinSpacing: false,
                });

                // 🧭 Scroll Intent Detection
                const gotoProject = (newIndex, isScrollingDown) => {
                    if (newIndex < 0 || newIndex >= steps) {
                        disableObserver();
                        return;
                    }
                    allowScroll = false;
                    scrollTimeout.restart(true);
                    currentIndex = newIndex;
                    updateProject(currentIndex);
                };

                

                // 🔧 Cleanup
                ScrollTrigger.addEventListener("refreshInit", () => disableObserver());
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [data]);

    return (
        <section ref={sectionRef} id="projects" className="mt-20 relative overflow-hidden">
            <header className="text-center max-w-3xl mx-auto mb-16 font-bebas">
                <h2 className="text-5xl font-bold mb-4">{data.title}</h2>
                <p className="text-lg md:text-xl">{data.description}</p>
            </header>

            {data.categories.map((category, i) => (
                <div key={category.id} ref={(el) => (categoryRefs.current[i] = el)} className={styles.categoryBlock}>
                    <h3 className={`${styles.categoryTitle} text-2xl md:text-3xl font-bold cormorant text-center`}>
                        {category.name}
                    </h3>

                    <div className={`${styles.card} card p-6`}>
                        <Card className="innerCard border-none shadow-lg p-6 bg-(--about-section-bg) text-white backdrop-blur-md rounded-2xl max-w-3xl mx-auto">
                            <CardHeader className="pb-4">
                                <h4 className="projectTitle text-xl md:text-2xl cormorant">{category.projects[0].title}</h4>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="projectDesc text-sm md:text-base">{category.projects[0].description}</p>
                                {Array.isArray(category.projects[0].contribution) && (
                                    <ul className="projectList list-disc pl-5 space-y-1 text-sm md:text-base">
                                        {category.projects[0].contribution.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectsDesktop;
