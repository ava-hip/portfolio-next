"use client"

import {useSectionInView} from "@/src/components/hero";
import Link from "next/link";
import {Mail} from "lucide-react";

export const Contact = () => {
    const { ref } = useSectionInView('Contact')
    return(
        <section
            ref={ref}
            id="contact"
            className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <div className="space-y-3">
                        <h2 className="font-heading text-3xl font-semibold">Get in touch</h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            You can contact me via {" "}
                            <Link
                                href="mailto:hippolyte.gauth@gmail.com"
                                className="text-blue-500 hover:underline"
                            >
                                mail
                            </Link>{" "}
                            or{" "}
                            <Link
                                href="mailto:hippolyte.gauth@gmail.com"
                                className="text-blue-500 hover:underline"
                            >
                                LinkedIn
                            </Link>.
                        </p>
                    </div>
            </div>
        </section>
    )
}