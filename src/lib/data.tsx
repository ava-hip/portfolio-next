import {
    SiAngular,
    SiCss, SiDocker, SiGit, SiGithub,
    SiHtml5,
    SiNextdotjs,
    SiReact, SiShopify, SiSpring,
    SiTailwindcss,
    SiTypescript
} from "@icons-pack/react-simple-icons";

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
    { icon:  <SiHtml5 size={"48px"}/>},
    { icon:  <SiCss size={"48px"}/>},
    { icon:  <SiTailwindcss size={"48px"}/>},
    { icon:  <SiTypescript size={"48px"}/>},
    { icon:  <SiAngular size={"48px"}/>},
    { icon:  <SiReact size={"48px"}/>},
    { icon:  <SiNextdotjs size={"48px"}/>},
    { icon:  <SiSpring size={"48px"}/>},
    { icon:  <SiGit size={"48px"}/>},
    { icon:  <SiDocker size={"48px"}/>},
    { icon:  <SiShopify size={"48px"}/>},
] as const;

export const experienceData = [
    {
        title: "Fullstack developer",
        company: "Dawan",
        companyLogo: "https://pbs.twimg.com/profile_images/943883334190555139/4cJWC4T7_400x400.jpg",
        description: [
            "Création et optimisation d’API REST avec Java (Spring Boot) pour un intranet utilisé par 300 utilisateurs, en assurant l'intégration avec des bases de données MySQL via JPA/Hibernate.",
            "Conception et implémentation d'interfaces utilisateur responsives avec Angular et Tailwindcss.",
        ],
        period: "2024",
        technologies: ["Spring", "JPA", "Hibernate", "Angular", "Gitlab"]
    },
    {
        title: "Webmaster & Front-end developer",
        company: "Freelancing",
        companyLogo: "https://api.dicebear.com/9.x/glass/svg?seed=Emery",
        description: [
            "Développement et personnalisation de sites e-commerce : Création et configuration de 3 boutiques en ligne avec WordPress (WooCommerce) et Shopify, en assurant une expérience utilisateur fluide.",
            "Personnalisation avancée des thèmes : Modification et développement de thèmes Shopify en liquid pour répondre aux besoins spécifiques des clients.",
            "Optimisation SEO : Mise en place des bonnes pratiques SEO pour améliorer le référencement"

        ],
        period: "2023 - Today",
        technologies: ["Wordpress", "Shopify", "SEO", "PHP", "Liquid"]
    },
    {
        title: "Digital marketing",
        company: "Air&Smart",
        companyLogo: "https://airnsmart.com/wp-content/uploads/2025/01/PASTILLE-AnS.png",
        description: [
            "Création et optimisation d’API REST avec Java (Spring Boot) pour un intranet utilisé par 300 utilisateurs, en assurant l'intégration avec des bases de données MySQL via JPA/Hibernate.",
            "Conception et implémentation d'interfaces utilisateur responsives avec Angular et Tailwindcss.",
        ],
        period: "2022",
        technologies: ["Prestashop", "PHP", "SEO", "PHP", "Excel"]
    }
] as const;

export const projectsData = [
    {
        title: "Test",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Adrian",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin neque in ante facilisis, ac efficitur massa sodales. Quisque ac hendrerit lacus",
        technologies: ["Angular", "Tailwind", "GSAP"],
        links: [
            {
                title: "Github",
                url: "https://www.dicebear.com/",
                icon: <SiGithub/>,
            }

        ],
        dates: "Jan 2024"
    },
    {
        title: "UT Tracker",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Adrian",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin neque in ante facilisis, ac efficitur massa sodales. Quisque ac hendrerit lacus",
        technologies: ["Angular", "Tailwind", "GSAP"],
        links: [
            {
                title: "Github",
                url: "https://www.dicebear.com/",
                icon: <SiGithub/>,
            }

        ],
        dates: "Jan 2024"
    },
    {
        title: "Portfolio",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Adrian",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin neque in ante facilisis, ac efficitur massa sodales. Quisque ac hendrerit lacus",
        technologies: ["Angular", "Tailwind", "GSAP"],
        links: [
            {
                title: "Github",
                url: "https://www.dicebear.com/",
                icon: <SiGithub/>,
            }

        ],
        dates: "Jan 2024"
    },
]