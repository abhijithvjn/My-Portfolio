"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./projectsMobile.module.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsMobile = ({ data }) => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  const getElements = (category) => {
    const title = category.querySelector(`.${styles.categoryTitle}`);
    const wrapper = category.querySelector(`.${styles.cardWrapper}`);
    const card = wrapper.querySelector(`.${styles.card}`);
    const innerCard = card.querySelector(".innerCard");

    return {
      title,
      wrapper,
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

        const { title, wrapper, innerCard, projectTitle, projectDesc, projectList } =
          getElements(category);
        const categoryData = data.categories[i].projects;
        const steps = categoryData.length;
        let currentIndex = 0;

        const updateProject = (index) => {
          const project = categoryData[index];
          gsap.to(innerCard, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              projectTitle.textContent = project.title;
              projectDesc.textContent = project.description;
              projectList.innerHTML =
                project.contribution?.map((p) => `<li>${p}</li>`).join("") || "";
              gsap.to(innerCard, { opacity: 1, duration: 0.3 });
            },
          });
        };

        // --- Title Pin ---
        ScrollTrigger.create({
          trigger: category,
          start: "top top+=150", // start pin when block hits 150px from top
          end: `+=${steps * 500}`,
          pin: title,
          pinSpacing: false,
          anticipatePin: 1,
          onEnter: () => gsap.set(title, { top: "170px", position: "fixed" }), // fixed position 50px
          onLeave: () => gsap.set(title, { position: "", top: "" }),
          onLeaveBack: () => gsap.set(title, { position: "", top: "" }),
          invalidateOnRefresh: true,
        });

        // --- Card Wrapper Pin ---
        ScrollTrigger.create({
          trigger: category,
          start: "top top+=150", // same activation point
          end: `+=${steps * 500}`,
          pin: wrapper,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          onEnter: () => gsap.set(wrapper, { top: "240px", position: "fixed" }), // fixed position 150px
          onLeave: () => gsap.set(wrapper, { position: "", top: "" }),
          onLeaveBack: () => gsap.set(wrapper, { position: "", top: "" }),
          onUpdate: (self) => {
            const index = Math.floor(self.progress * steps);
            if (index !== currentIndex && index >= 0 && index < steps) {
              currentIndex = index;
              updateProject(currentIndex);
            }
          },
          invalidateOnRefresh: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section ref={sectionRef} id="projects" className="mt-20 relative overflow-hidden">
      <header className="text-center max-w-3xl mx-auto font-bebas">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
        <p className="text-base md:text-lg">{data.description}</p>
      </header>

      {data.categories.map((category, i) => (
        <div
          key={category.id}
          ref={(el) => (categoryRefs.current[i] = el)}
          className={styles.categoryBlock}
        >
          <h3
            className={`${styles.categoryTitle} text-xl md:text-2xl font-bold cormorant text-center mt-4`}
          >
            {category.name}
          </h3>

          <div className={styles.cardWrapper}>
            <div className={`${styles.card} card p-4`}>
              <Card className="innerCard border-none shadow-lg p-6 bg-(--about-section-bg) text-white backdrop-blur-md rounded-2xl max-w-3xl mx-auto">
                <CardHeader className="pb-4">
                  <h4 className="projectTitle text-lg md:text-xl cormorant">
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
        </div>
      ))}
    </section>
  );
};

export default ProjectsMobile;
