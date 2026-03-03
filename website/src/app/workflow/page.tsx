import { Container } from "@/components";
import { Workflow } from "@/components/workflow";

export default function WorkflowPage() {
  return (
    <>
      <main>
        <section className="py-24">
          <Container>
            <Workflow />
          </Container>
        </section>
      </main>
    </>
  );
}

