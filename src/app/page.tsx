import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Modules } from "@/components/modules";
import { Workflow } from "@/components/workflow";
import { DemoProducts } from "@/components/demo-products";
import { TechStack } from "@/components/tech-stack";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Modules />
      <Workflow />
      <DemoProducts />
      <TechStack />
      <Pricing />
      <FinalCta />
      <Contact />
      <Footer />
    </>
  );
}
