import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main id="main" className=" relative bg-black-100 overflow-clip ">
      <div className=" container">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
