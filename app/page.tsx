import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Stats } from "@/components/sections/Stats";
import { Recognition } from "@/components/sections/Recognition";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Expertise />
      <Experience />
      <Stats />
      <Recognition />
      <Faq />
      <Contact />
    </>
  );
}
