"use client"

import {useSectionInView} from "@/src/components/hero";
import {projectsData} from "@/src/lib/data";
import {ProjectCard} from "@/src/components/project-card";

type TProject = (typeof projectsData)[number];

export const Projects = () => {
    const { ref } = useSectionInView("Projects")
    return(
        <section
            className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
            ref={ref}
            id="projects">
            <div className="mb-10 text-center">
                <h2 className="font-heading text-3xl font-semibold">Projects</h2>
                <p className="text-muted-foreground mt-3 text-sm">Personal and professional projects I worked on.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] lg:min-w-[500px] min-w-[300px] mx-auto">
                {projectsData.map((project: TProject) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        technologies={project.technologies}
                        links={project.links}
                        video={project.video}
                    />
                ))}
            </div>
        </section>
    )
}