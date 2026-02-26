"use client";

import { useId, useState } from "react";

import { Container } from "@/components";
import { Reveal } from "@/components/shared";

type ProjectType = "Website" | "SaaS Product" | "Mobile App" | "AI Integration";

export function Contact() {
  const formId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<ProjectType>("Website");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const inputClassName =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const openCalendly = () => {
    const calendly = (window as unknown as { Calendly?: { initPopupWidget: (args: { url: string }) => void } })
      .Calendly;

    if (!calendly?.initPopupWidget) return;

    calendly.initPopupWidget({ url: "https://calendly.com/mishramanjeet26/30min" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = {
        name,
        email,
        projectType,
        message,
      };

      // Send email using our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Reset form
      setName("");
      setEmail("");
      setProjectType("Website");
      setMessage("");
      setSubmitStatus("success");
      
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="ambient-section ambient-contact py-24">
      <div className="ambient-layer ambient-layer--contact" aria-hidden="true">
        <span className="ambient-contact-mesh" />
        <span className="ambient-contact-sweep" />
        <span className="ambient-contact-lines" />
      </div>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal staggerChildren>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let’s Talk About Your Product
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Tell us about your idea and we’ll get back to you within 24 hours.
              </p>
            </Reveal>

            <Reveal className="mt-8" delayMs={140}>
              <form
                className="space-y-5"
                aria-describedby={formId}
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor={`${formId}-name`}
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={inputClassName}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClassName}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-projectType`}
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Project Type
                  </label>
                  <select
                    id={`${formId}-projectType`}
                    name="projectType"
                    className={inputClassName}
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as ProjectType)}
                  >
                    <option value="Website">Website</option>
                    <option value="SaaS Product">SaaS Product</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="AI Integration">AI Integration</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-message`}
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    className={inputClassName}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you want to build..."
                    rows={6}
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="motion-button inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "success" && (
                    <p className="mt-3 text-sm text-green-600 dark:text-green-400">
                      Thank you for contacting us! We'll get back to you within 24 hours.
                    </p>
                  )}
                  
                  {submitStatus === "error" && (
                    <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                      Something went wrong. Please try again or email us directly at lilbyteorg@gmail.com
                    </p>
                  )}

                  <p id={formId} className="mt-3 text-xs text-muted">
                    By submitting this form, you agree to be contacted by email.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>

          <div>
            <Reveal delayMs={120} staggerChildren>
              <h3 className="text-lg font-semibold text-foreground">
                Or Book a Call Instantly
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Prefer scheduling right away? Book a call in seconds using our
                calendar.
              </p>
            </Reveal>

            <Reveal className="mt-6" delayMs={220} staggerChildren>
              <button
                type="button"
                onClick={openCalendly}
                className="motion-button inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                Book a Free Consultation
              </button>

              <p className="mt-3 text-xs text-muted">
                If the popup doesn’t open, please refresh once and try again.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
