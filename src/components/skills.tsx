"use client"

import {skillsData} from "@/src/lib/data";
import { motion } from "motion/react";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export const Skills = () => {
    return (
        <div className="mt-10 flex w-full flex-wrap gap-10 px-5 sm:justify-center sm:px-0 md:mt-14">
            {skillsData.map(({ icon }, index) => (
                <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                >
                    {icon}
                </motion.div>
            ))}
        </div>
    )
}