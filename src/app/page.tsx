import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Modules } from "@/components/modules";
import { Workflow } from "@/components/workflow";
import { DemoProducts } from "@/components/demo-products";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Modules />
      <Workflow />
      <DemoProducts />
      <TechStack />
    </>
  );
}
