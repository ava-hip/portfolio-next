"use client"

import {useSectionInView} from "@/src/components/hero";
import {Skills} from "@/src/components/skills";

export const About = () => {
    const { ref } = useSectionInView('About')

    return(
        <section
            ref={ref}
            id="about"
            className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20">
            <div className="mb-10 text-center">
                <h2 className="font-heading text-3xl font-semibold">About</h2>
            </div>
            <div className="-mt-5 max-w-2xl text-center leading-7">
                <p className="mb-4">


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in blandit neque.
                    Vestibulum aliquam velit nec risus convallis, in semper purus dapibus.
                    Aliquam a nibh eget ante fermentum cursus. Nullam tincidunt ipsum et nisi auctor sodales.
                    Donec imperdiet tincidunt est ut aliquam. Nulla eu convallis turpis, vel lacinia tortor.
                    Pellentesque ligula nibh, accumsan quis viverra mollis, tristique ut sapien. Aliquam id sodales ex.
                    Praesent mollis feugiat quam, id pretium nunc tempor id. Curabitur tempor facilisis mauris,
                    vitae gravida dui scelerisque a.
                </p>
                <p>
                    Sed a ligula quis nunc porttitor eleifend. Phasellus eu odio aliquam, volutpat sem quis, dapibus arcu.
                    Proin sed ultrices sapien, placerat pharetra purus. Sed venenatis vel velit vel accumsan.
                    Nunc lobortis risus vel orci interdum bibendum.
                </p>
            </div>
            <Skills/>
        </section>
    )
}