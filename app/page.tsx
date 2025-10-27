import {ThemeToggle} from "@/src/components/theme-toggle";

export default function Home() {
  return (
      <>
          <div className="container flex flex-col items-center">
              <p>Header</p>
              <p>Intro</p>
              <p>SectionDivider</p>
              <p>About</p>
              <p>Experiences</p>
              <p>Projects</p>
              <p>Contact</p>
              <p>Footer</p>
          </div>
          <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
      </>
  );
}
