"use client"

import {useSectionInView} from "@/src/components/hero";
import {experienceData} from "@/src/lib/data";
import {cn} from "@/src/lib/utils";
import {Building} from "lucide-react";
import {Badge} from "@/src/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";
import React from "react";

export const Experience = () => {
    const { ref } = useSectionInView('Experience')
    return (
        <section
            ref={ref}
            id="experience"
            className="gap-4 flex w-full max-w-[800px] scroll-mt-28 flex-col items-center md:mb-20">
            <div className="flex flex-col gap-2 self-start">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="prose text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    Professional experience showcasing web development, e-commerce, and full-stack projects.
                </div>
            </div>
            <div className="relative max-w-screen-md">
                {experienceData.map(
                    ({ title, description, company, companyLogo , period, technologies }) => (
                        <div
                            key={company}
                            className="not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10"
                        >
                            <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
                                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
                            </div>
                            <div
                                className={cn('flex gap-2 items-center justify-between')}
                            >
                                <div className="flex gap-3 items-center">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={companyLogo} />
                                        <AvatarFallback>
                                            <Building/>
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold">{company}</span>
                                        <h3 className="inline-flex items-center justify-center leading-none text-xs sm:text-sm">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                                <time className=" font-light font-sans text-xs">{period}</time>
                            </div>
                            <div className="flex flex-col my-3">
                                <ul className="list-disc">
                                    {description.map((paragraph, index) => (
                                        <li className="text-muted-foreground" key={index}>{paragraph}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {technologies.map((tech, index) => (
                                    <Badge key={index}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}