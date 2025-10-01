import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const About = ({ data }) => {
    const { title, subtitle, qualifications, experience } = data;

    return (
        <section id="about" className="py-20">
            <header className="text-center max-w-3xl mx-auto mb-16 font-bebas">
                <h2 className="text-5xl font-bold mb-4">{title}</h2>
                <p className="text-lg md:text-xl">{subtitle}</p>
            </header>

            <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6 md:px-12 lg:px-20 p-10">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold cormorant">EXPERIENCE</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-12 mb-4 font-bold cormorant">
                    QUALIFICATIONS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
