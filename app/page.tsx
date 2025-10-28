import {ThemeToggle} from "@/src/components/theme-toggle";
import {Header} from "@/src/components/header";
import {Hero} from "@/src/components/hero";
import {About} from "@/src/components/about";
import {Experience} from "@/src/components/experience";
import {Projects} from "@/src/components/projects";

export default function Home() {
  return (
      <>
          <div className="container flex flex-col items-center">
              <Header />
              <Hero/>
              <About/>
              <Experience/>
              <Projects/>
              <p>Contact</p>
              <p>Footer</p>
          </div>
          <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
      </>
  );
}
