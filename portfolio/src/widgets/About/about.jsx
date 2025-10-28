"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const { title, subtitle, qualifications, experience } = data;

  // Refs for animations
  const expTitleRef = useRef(null);
  const expCardsRef = useRef(null);
  const qualTitleRef = useRef(null);
  const qualCardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Experience section animation timeline
      const expTl = gsap.timeline({
        scrollTrigger: {
          trigger: expTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      expTl
        .from(expTitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          expCardsRef.current.children,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4" // overlap with title
        );

      // Qualification section animation timeline
      const qualTl = gsap.timeline({
        scrollTrigger: {
          trigger: qualTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      qualTl
        .from(qualTitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          qualCardsRef.current.children,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20">
      {/* Header Section */}
      <header className="text-center max-w-3xl mx-auto mb-16 font-bebas">
        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6 md:px-12 lg:px-20 pt-6 md:pt-10 pb-10">
        {/* EXPERIENCE */}
        <h3
          ref={expTitleRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold cormorant"
        >
          EXPERIENCE
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          ref={expCardsRef}
        >
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 p-6 bg-(--about-section-bg) text-white"
            >
              <CardHeader className="pb-4">
                <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl cormorant">
                  {exp.role}
                </p>
              </CardHeader>
              <CardContent className="space-y-1">
                <p>{exp.company}</p>
                <p className="text-sm">{exp.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* QUALIFICATIONS */}
        <h3
          ref={qualTitleRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-12 mb-4 font-bold cormorant"
        >
          QUALIFICATIONS
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          ref={qualCardsRef}
        >
          {qualifications.map((q, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 p-6 bg-(--about-section-bg) text-white"
            >
              <CardHeader className="pb-4">
                <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl cormorant">
                  {q.degree}
                </p>
              </CardHeader>
              <CardContent className="space-y-1">
                <p>{q.college}</p>
                <p className="text-sm">{q.university}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
