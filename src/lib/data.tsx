import {
    SiAngular,
    SiCss, SiDocker, SiGit, SiGithub,
    SiHtml5,
    SiNextdotjs,
    SiReact, SiShopify, SiSpring,
    SiTailwindcss,
    SiTypescript
} from "@icons-pack/react-simple-icons";
import { Link } from "lucide-react";

export const about = "Passionate about computers and technologies since I was a kid, I started my journey with mods for video games. After completing a technology degree, I decided to make it my profession, I devote my free time to more creative projects that allow me to experiment with new ways of coding and try out new technologies, but also to my passion for sports"

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const skillsData = [
    { icon:  <SiHtml5 size={"36px"}/>},
    { icon:  <SiCss size={"36px"}/>},
    { icon:  <SiTailwindcss size={"36px"}/>},
    { icon:  <SiTypescript size={"36px"}/>},
    { icon:  <SiAngular size={"36px"}/>},
    { icon:  <SiReact size={"36px"}/>},
    { icon:  <SiNextdotjs size={"36px"}/>},
    { icon:  <SiSpring size={"36px"}/>},
    { icon:  <SiGit size={"36px"}/>},
    { icon:  <SiDocker size={"36px"}/>},
    { icon:  <SiShopify size={"36px"}/>},
] as const;

export const experienceData = [
    {
        title: "Fullstack developer",
        company: "GalileIA",
        companyLogo: "https://galile-ia.fr/wp-content/uploads/2024/06/cropped-galile_ia_favicon-192x192.png",
        description: [
            "Designed and optimized REST APIs with Java (Spring Boot) for an intranet used by 300 users, ensuring seamless integration with MySQL databases through JPA/Hibernate.",
            "Developed responsive user interfaces using Angular and Tailwind CSS",
        ],
        period: "2026 - Now",
        technologies: ["Python", "Svelte", "AWS"]
    },
    {
        title: "Fullstack developer",
        company: "Dawan",
        companyLogo: "https://pbs.twimg.com/profile_images/943883334190555139/4cJWC4T7_400x400.jpg",
        description: [
            "Designed and optimized REST APIs with Java (Spring Boot) for an intranet used by 300 users, ensuring seamless integration with MySQL databases through JPA/Hibernate.",
            "Developed responsive user interfaces using Angular and Tailwind CSS",
        ],
        period: "2024",
        technologies: ["Spring", "JPA", "Hibernate", "Angular", "Gitlab"]
    },
    {
        title: "Webmaster & Front-end developer",
        company: "Freelancing",
        companyLogo: "https://api.dicebear.com/9.x/glass/svg?seed=Emery",
        description: [
            "Developed and customized e-commerce websites: created and configured three online stores using WordPress (WooCommerce) and Shopify, ensuring a smooth and engaging user experience",
            "Performed advanced theme customization: modified and developed Shopify themes in Liquid to meet clients’ specific needs.",
            "Implemented SEO best practices to improve search engine visibility and overall ranking."

        ],
        period: "2023 - 2025",
        technologies: ["Wordpress", "Shopify", "SEO", "PHP", "Liquid"]
    },
    {
        title: "Digital marketing",
        company: "Air&Smart",
        companyLogo: "https://airnsmart.com/wp-content/uploads/2025/01/PASTILLE-AnS.png",
        description: [
            "E-commerce management: Administered the product catalog on PrestaShop, handling additions, updates, stock management, and product pages.",
            "Development: Implemented PHP and HTML/CSS modifications as needed for site updates.",
            "SEO optimization: Improved organic search rankings through best practices."
        ],
        period: "2022",
        technologies: ["Prestashop", "PHP", "SEO", "PHP", "Excel"]
    }
] as const;

export const projectsData = [
    {
        title: "Make-up Artist Portfolio",
        video: "/mua.mp4",
        description: "Developed a make-up artist’s portfolio with animated image galleries, performance optimization, and responsive design",
        technologies: ["Angular", "Typescript", "Tailwind", "GSAP"],
        links: [
            {
                title: "Website",
                url: "https://laurynpiolet.fr",
                icon: <Link />,
            },
            {
                title: "Source",
                url: "https://github.com/ava-hip/lauryn-piolet-mua",
                icon: <SiGithub/>,
            }

        ],
        dates: "March 2025"
    },
    {
        title: "UT Tracker",
        video: "/uttracker.mp4",
        description: "Developed an app to track weekly performances in FC’s Champions mode, allowing users to log their weekend results and explore in-depth stats to analyze their game and improve performance.",
        technologies: ["NextJS", "React", "TypeScript", "Prisma", "Tailwind"],
        links: [
            {
                title: "Website",
                url: "https://uttracker.fr",
                icon: <Link />,
            }

        ],
        dates: "Jan 2025 - Today"
    },
    {
        title: "Biscuiterie St-Guilhem",
        video: "/biscuiterie.mp4",
        description: "Built an e-commerce site for a biscuit shop, combining SEO expertise and creative design to showcase their artisanal products.",
        technologies: ["Wordpress", "WooCommerce", "SEO", "PHP"],
        links: [
            {
                title: "Website",
                url: "https://biscuiteriesaintguilhem.fr/",
                icon: <Link />,
            },
        ],
        dates: "June 2023"
    },
]