"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  const { title, description, categories } = data;
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, index) => {
        const exitDirection = index % 2 === 0 ? "-100vw" : "100vw"; // alternate exits

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            scrub: true,
          },
        });

        // Fade & scale in from center
        tl.fromTo(
          card,
          { opacity: 0, scale: 0.8, y: 60 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        // Smooth exit to left/right
        tl.to(card, {
          opacity: 0,
          x: exitDirection,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative overflow-hidden"
    >
      <header className="text-center max-w-3xl mx-auto mb-16 font-bebas">
        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl">{description}</p>
      </header>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-6 md:px-12 lg:px-20">
        {Array.isArray(categories) &&
          categories.map((category) => (
            <div key={category.id} className="space-y-8">
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold cormorant mb-14">
                {category.name}
              </h3>

              <div className="grid grid-cols-1 gap-10">
                {Array.isArray(category.projects) &&
                  category.projects.map((project) => (
                    <Card
                      key={project.id}
                      className="project-card border-none shadow-md p-6 bg-(--project-section-bg) text-white opacity-0 transform scale-90"
                    >
                      <CardHeader className="pb-4">
                        <h4 className="text-xl md:text-2xl cormorant">
                          {project.title}
                        </h4>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        <p className="text-sm md:text-base">
                          {project.description}
                        </p>

                        {Array.isArray(project?.contribution) && (
                          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                            {project.contribution.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        )}

                        {Array.isArray(project?.technologies) && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs md:text-sm bg-white/10 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
