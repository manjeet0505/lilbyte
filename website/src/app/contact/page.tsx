import { Container } from "@/components";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <Contact />
        </Container>
      </section>
    </main>
  );
}
