"use client";

import type { JSX } from "react";

import { AboveTheFoldSection3 } from "../sections/above-the-fold";
import { AboutSection4 } from "../sections/about";
import { WhyChooseUsSection3 } from "../sections/why-choose-us";
import { ServicesSection4 } from "../sections/services";
import { ProcessSection3 } from "../sections/process";
import { PreConsultationSection3 } from "../sections/pre-consultation";
import { GuaranteeSection3 } from "../sections/guarantee";
import { TestimonialsSection2 } from "../sections/testimonials";
import { ProjectsSection3 } from "../sections/projects";
import { FAQSection3 } from "../sections/faq";
import { BlogSection3 } from "../sections/blog";
import { FinalCTASection1 } from "../sections/final-cta";
import { FooterSection1 } from "../sections/footer";

/**
 * Homepage 3 — "Visual Showcase" (image-led, gallery-heavy).
 * Curated section variants assembled from `src/sections/**` — no section is modified.
 */
export default function Homepage3(): JSX.Element {
  return (
    <main className="bg-white">
      <div id="hero">
        <AboveTheFoldSection3 />
      </div>
      <div id="about">
        <AboutSection4 />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection3 />
      </div>
      <div id="services">
        <ServicesSection4 />
      </div>
      <div id="process">
        <ProcessSection3 />
      </div>
      <div id="pre-consultation">
        <PreConsultationSection3 />
      </div>
      <div id="guarantee">
        <GuaranteeSection3 />
      </div>
      <div id="testimonials">
        <TestimonialsSection2 />
      </div>
      <div id="projects">
        <ProjectsSection3 />
      </div>
      <div id="faq">
        <FAQSection3 />
      </div>
      <div id="blog">
        <BlogSection3 />
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
