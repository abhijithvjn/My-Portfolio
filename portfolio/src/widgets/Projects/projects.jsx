import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Projects = ({ data }) => {
    const { title, description, categories } = data;

    return (
        <section id="projects" className="py-20">
            <header className="text-center max-w-3xl mx-auto mb-16 font-bebas">
                <h2 className="text-5xl font-bold mb-4">{title}</h2>
                <p className="text-lg md:text-xl">{description}</p>
            </header>

            <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6 md:px-12 lg:px-20">
                {Array.isArray(categories) &&
                    categories?.map((category) => (
                        <div key={category.id} className="space-y-8">
                            <h3 className="text-xl md:text-2xl lg:text-2xl font-bold cormorant mb-14">{category.name}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                {Array.isArray(category.projects) &&
                                    category?.projects?.map((project) => (
                                        <Card
                                            key={project.id}
                                            className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 p-6 bg-(--project-section-bg) text-white"
                                        >
                                            <CardHeader className="pb-4">
                                                <h4 className="text-xl md:text-2xl cormorant">{project.title}</h4>
                                            </CardHeader>

                                            <CardContent className="space-y-3">
                                                <p className="text-sm md:text-base">{project.description}</p>

                                                {Array.isArray(project?.contribution) && (
                                                    <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                                                        {project?.contribution?.map((point, idx) => (
                                                            <li key={idx}>{point}</li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {Array.isArray(project?.technologies) && (
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {project?.technologies?.map((tech, idx) => (
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
