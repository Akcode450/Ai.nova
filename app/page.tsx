import Solutions from "@/components/sections/Solutions";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Trusted />
      <Services />
      <Portfolio />
      <Solutions />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}