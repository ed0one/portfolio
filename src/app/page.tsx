import { ScrollProgress } from "@/components/scroll-progress";
import { AmbientBackground } from "@/components/ambient-background";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { MarqueeTicker } from "@/components/marquee-ticker";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import Contact from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <SiteHeader />
      <main className="flex-1 flex flex-col relative z-10">
        <Hero />
        <MarqueeTicker />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}