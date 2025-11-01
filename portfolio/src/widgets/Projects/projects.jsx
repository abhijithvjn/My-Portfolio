"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  // 🔹 Helper to grab important DOM elements for each category
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

        const { title, card, innerCard, projectTitle, projectDesc, projectList } =
          getElements(category);

        const categoryData = data.categories[i].projects;
        const steps = categoryData.length;
        let lastIndex = -1;
        let initialized = false;

        // 🔹 Pin title and card
        ScrollTrigger.create({
          trigger: category,
          start: "top top",
          end: `+=${steps * 800}`,
          pin: card,
          pinSpacing: true,
        });

        ScrollTrigger.create({
          trigger: category,
          start: "top top+=150",
          end: `+=${steps * 800}`,
          pin: title,
          pinSpacing: false,
        });

        // 🔹 Helper function to update content
        const updateProjectContent = (project) => {
          projectTitle.textContent = project.title;
          projectDesc.textContent = project.description;
          projectList.innerHTML =
            project.contribution?.map((p) => `<li>${p}</li>`).join("") || "";
        };

        // 🔹 Scroll-based project transitions
        gsap.timeline({
          scrollTrigger: {
            trigger: innerCard,
            start: "top top",
            end: `+=${steps * 800}`,
            scrub: true,
            onUpdate: (self) => {
              const index = Math.round(self.progress * (steps - 1));

              if (!initialized) {
                initialized = true;
                lastIndex = index;
                return;
              }

              if (index !== lastIndex) {
                lastIndex = index;
                const project = categoryData[index];

                gsap.to(innerCard, {
                  opacity: 0,
                  duration: 0.3,
                  onComplete: () => {
                    updateProjectContent(project);
                    gsap.to(innerCard, { opacity: 1, duration: 0.3 });
                  },
                });
              }
            },
          },
        });
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
        <div
          key={category.id}
          ref={(el) => (categoryRefs.current[i] = el)}
          className={styles.categoryBlock}
        >
          <h3
            className={`${styles.categoryTitle} text-2xl md:text-3xl font-bold cormorant text-center`}
          >
            {category.name}
          </h3>

          <div className={`${styles.card} card p-6`}>
            <Card className="innerCard border-none shadow-lg p-6 bg-(--about-section-bg) text-white backdrop-blur-md rounded-2xl max-w-3xl mx-auto">
              <CardHeader className="pb-4">
                <h4 className="projectTitle text-xl md:text-2xl cormorant">
                  {category.projects[0].title}
                </h4>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="projectDesc text-sm md:text-base">
                  {category.projects[0].description}
                </p>
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

export default Projects;
