"use client"

import {useSectionInView} from "@/src/components/hero";
import {experienceData} from "@/src/lib/data";
import {cn} from "@/src/lib/utils";
import {Building, Calendar} from "lucide-react";
import {Badge} from "@/src/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";

export const Experience = () => {
    const { ref } = useSectionInView('Experience')
    return (
        <section
            ref={ref}
            id="experience"
            className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20">
            <div className="mb-10 text-center">
                <h2 className="font-heading text-3xl font-semibold">Experience</h2>
                <p className="text-muted-foreground mt-3 text-sm">Bla bla bla</p>
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
                                className={cn('flex gap-2 items-center')}
                            >
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                                    <Avatar>
                                        <Avatar>
                                            <AvatarImage src={companyLogo} />
                                            <AvatarFallback>
                                                <Building/>
                                            </AvatarFallback>
                                        </Avatar>
                                    </Avatar>
                                </div>
                                <span className="text-lg font-semibold">{company}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">{title}</h3>
                                <div className="mt-1 flex items-center gap-2 text-sm">
                                    <Calendar className="size-4" />
                                    <span>{period}</span>
                                </div>
                            </div>
                            {description.map((paragraph, index) => (
                                <p className="text-muted-foreground mb-1" key={index}>- {paragraph}</p>
                            ))}
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