import { Container } from "@/components";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-24">
          <Container>
            <Contact />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

