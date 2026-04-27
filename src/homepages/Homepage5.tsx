"use client";

import type { JSX } from "react";

import { AboveTheFoldSection5 } from "../sections/above-the-fold";
import { AboutSection2 } from "../sections/about";
import { WhyChooseUsSection5 } from "../sections/why-choose-us";
import { ServicesSection2 } from "../sections/services";
import { ProcessSection5 } from "../sections/process";
import { PreConsultationSection5 } from "../sections/pre-consultation";
import { GuaranteeSection5 } from "../sections/guarantee";
import { TestimonialsSection5 } from "../sections/testimonials";
import { ProjectsSection5 } from "../sections/projects";
import { FAQSection5 } from "../sections/faq";
import { BlogSection5 } from "../sections/blog";
import { FinalCTASection1 } from "../sections/final-cta";
import { FooterSection1 } from "../sections/footer";

/**
 * Homepage 5 — "Bespoke Estate" (premium / generous spacing).
 * Curated section variants assembled from `src/sections/**` — no section is modified.
 */
export default function Homepage5(): JSX.Element {
  return (
    <main className="bg-white">
      <div id="hero">
        <AboveTheFoldSection5 />
      </div>
      <div id="about">
        <AboutSection2 />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection5 />
      </div>
      <div id="services">
        <ServicesSection2 />
      </div>
      <div id="process">
        <ProcessSection5 />
      </div>
      <div id="pre-consultation">
        <PreConsultationSection5 />
      </div>
      <div id="guarantee">
        <GuaranteeSection5 />
      </div>
      <div id="testimonials">
        <TestimonialsSection5 />
      </div>
      <div id="projects">
        <ProjectsSection5 />
      </div>
      <div id="faq">
        <FAQSection5 />
      </div>
      <div id="blog">
        <BlogSection5 />
      </div>
      <div id="final-cta">
        <FinalCTASection1 />
      </div>
      <div id="footer">
        <FooterSection1 />
      </div>
    </main>
  );
}
