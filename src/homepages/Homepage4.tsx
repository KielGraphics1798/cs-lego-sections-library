"use client";

import type { JSX } from "react";

import { AboveTheFoldSection4 } from "../sections/above-the-fold";
import { AboutSection5 } from "../sections/about";
import { WhyChooseUsSection4 } from "../sections/why-choose-us";
import { ServicesSection5 } from "../sections/services";
import { ProcessSection4 } from "../sections/process";
import { PreConsultationSection4 } from "../sections/pre-consultation";
import { GuaranteeSection4 } from "../sections/guarantee";
import { TestimonialsSection4 } from "../sections/testimonials";
import { ProjectsSection4 } from "../sections/projects";
import { FAQSection4 } from "../sections/faq";
import { BlogSection4 } from "../sections/blog";
import { FinalCTASection1 } from "../sections/final-cta";
import { FooterSection1 } from "../sections/footer";

/**
 * Homepage 4 — "Conversion Driven" (lead-magnet style, CTAs prominent).
 * Curated section variants assembled from `src/sections/**` — no section is modified.
 */
export default function Homepage4(): JSX.Element {
  return (
    <main className="bg-white">
      <div id="hero">
        <AboveTheFoldSection4 />
      </div>
      <div id="about">
        <AboutSection5 />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection4 />
      </div>
      <div id="services">
        <ServicesSection5 />
      </div>
      <div id="process">
        <ProcessSection4 />
      </div>
      <div id="pre-consultation">
        <PreConsultationSection4 />
      </div>
      <div id="guarantee">
        <GuaranteeSection4 />
      </div>
      <div id="testimonials">
        <TestimonialsSection4 />
      </div>
      <div id="projects">
        <ProjectsSection4 />
      </div>
      <div id="faq">
        <FAQSection4 />
      </div>
      <div id="blog">
        <BlogSection4 />
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
