import { Container } from "@/components";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Workflow } from "@/components/workflow";

export default function WorkflowPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-24">
          <Container>
            <Workflow />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

