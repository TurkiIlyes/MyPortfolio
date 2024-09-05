import { AppleCardsCarouselDemo } from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Grid from "@/components/Grid/Grid";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects ";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className=" relative bg-black-100 overflow-hidden ">
      <div className=" container">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <AppleCardsCarouselDemo />
        <Footer />
      </div>
    </main>
  );
}
