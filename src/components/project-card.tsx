import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Badge} from "@/src/components/ui/badge";
import React from "react";

interface Props {
    title: string;
    description: string;
    dates: string;
    technologies: readonly string[];
    image?: string;
    video?: string;
    links?: readonly {
        icon: React.ReactNode;
        title: string;
        url: string;
    }[];
    className?: string;
}

export function ProjectCard({
    title,
    description,
    dates,
    technologies,
    image,
    video,
    links,
    className
}: Props){
    return (
        <Card
            className={"flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full min-w-[300px] py-0 gap-2"}
        >
            <Link href='#' className="block cursor-pointer">
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                    />
                )}
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                        unoptimized
                    />
                )}
            </Link>
            <CardHeader className="px-2">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>
                    <time className="font-sans text-xs">{dates}</time>
                    <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {description}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
                {technologies && technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {technologies.map((techno) => (
                            <Badge
                                key={techno}
                                variant="secondary">
                                {techno}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {links?.map((link) => (
                            <Link href={link?.url} key={link.url} target="_blank">
                                <Badge className="flex gap-2 px-2 py-1">
                                    {link.icon}
                                    {link.title}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}