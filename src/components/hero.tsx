"use client"

import {links} from "@/src/lib/data";
import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import Link from "next/link";
import {Button} from "@/src/components/ui/button";
import {ArrowRight, Download, Github, Linkedin} from "lucide-react";
import {SiGithub} from "@icons-pack/react-simple-icons";

export const Hero = () => {
    const { ref } = useSectionInView('Home')
    return (
        <section
            ref={ref}
            id="home"
            className="my-10 flex scroll-mt-96 mb-48 flex-col items-center gap-5 text-center sm:mt-28"
        >
            <div>
                <Link
                    href="#contact"
                    className="flex items-center gap-3 rounded border px-3 py-1"
                >
                    <span className="relative flex size-2">
                        <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative flex size-2 rounded-full bg-green-400"></span>
                    </span>
                    <span className="font-mono text-sm">Available for work!</span>
                </Link>
            </div>
            <h1 className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl">
                Hi, I&#39;m a{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
                  Developer
                </span>{' '}
                creating modern web apps.
            </h1>
            <p className="text-muted-foreground max-w-xl">
                Bla bla bla
            </p>
            <div className="flex flex-row gap-2">
                <Button asChild size="lg" className="rounded-xl">
                    <Link href="#contact">
                        Get in touch <ArrowRight className="ml-2 size-4" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" className="hidden sm:flex rounded-xl" asChild>
                    <a href="#" download>
                        Download CV <Download className="ml-2 size-4" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link
                        href="https://www.linkedin.com/in/hippolyte-gautheron/"
                        aria-label="Linkedin"
                        target="_blank"
                    >
                        <Linkedin className="size-5" />
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <Link
                        href="https://github.com/ava-hip"
                        aria-label="Github"
                        target="_blank"
                    >
                        <SiGithub className="size-5" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export type SectionName = (typeof links)[number]['name'];

export const useSectionInView = (
    sectionName: SectionName,
    threshold = 0.75
) => {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        const handleScroll = () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection(sectionName);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
};

type TActiveSectionContext = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(
    null
);

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            'useActiveSection must be used within an ActiveSectionProvider'
        );
    }

    return context;
};