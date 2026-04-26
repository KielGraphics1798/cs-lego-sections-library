"use client";

import type { JSX } from "react";

import { AboveTheFoldSection1 } from "../sections/above-the-fold";
import { AboutSection1 } from "../sections/about";
import { WhyChooseUsSection1 } from "../sections/why-choose-us";
import { ServicesSection1 } from "../sections/services";
import { ProcessSection1 } from "../sections/process";
import { PreConsultationSection1 } from "../sections/pre-consultation";
import { GuaranteeSection1 } from "../sections/guarantee";
import { TestimonialsSection1 } from "../sections/testimonials";
import { ProjectsSection1 } from "../sections/projects";
import { FAQSection1 } from "../sections/faq";
import { BlogSection1 } from "../sections/blog";
import { FinalCTASection1 } from "../sections/final-cta";
import { FooterSection1 } from "../sections/footer";

/**
 * Homepage 1 — "Trusted Architect" (editorial / classic).
 * Curated section variants assembled from `src/sections/**` — no section is modified.
 * Each section is wrapped in `<div id="...">` so in-page anchor links (e.g. `#about`) resolve.
 */
export default function Homepage1(): JSX.Element {
  return (
    <main className="bg-white">
      <div id="hero">
        <AboveTheFoldSection1 />
      </div>
      <div id="about">
        <AboutSection1 />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection1 />
      </div>
      <div id="services">
        <ServicesSection1 />
      </div>
      <div id="process">
        <ProcessSection1 />
      </div>
      <div id="pre-consultation">
        <PreConsultationSection1 />
      </div>
      <div id="guarantee">
        <GuaranteeSection1 />
      </div>
      <div id="testimonials">
        <TestimonialsSection1 />
      </div>
      <div id="projects">
        <ProjectsSection1 />
      </div>
      <div id="faq">
        <FAQSection1 />
      </div>
      <div id="blog">
        <BlogSection1 />
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
