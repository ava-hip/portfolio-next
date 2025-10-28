"use client"

import {useSectionInView} from "@/src/components/hero";
import {Skills} from "@/src/components/skills";
import {about} from "@/src/lib/data";

export const About = () => {
    const { ref } = useSectionInView('About')

    return(
        <section
            ref={ref}
            id="about"
            className="my-10 flex gap-8 max-w-[800px] scroll-mt-28 flex-col items-center md:mb-20">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">About</h2>
                <div className="prose text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {about}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <Skills/>
            </div>
        </section>
    )
}