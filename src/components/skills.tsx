"use client"

import {skillsData} from "@/src/lib/data";

export const Skills = () => {
    return (
        <div className="flex w-full flex-wrap gap-10 px-5 sm:px-0">
            {skillsData.map(({ icon }, index) => (
                <div
                    key={index}
                >
                    {icon}
                </div>
            ))}
        </div>
    )
}