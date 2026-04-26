"use client";

import type { JSX } from "react";

import { AboveTheFoldSection2 } from "../sections/above-the-fold";
import { AboutSection3 } from "../sections/about";
import { WhyChooseUsSection2 } from "../sections/why-choose-us";
import { ServicesSection3 } from "../sections/services";
import { ProcessSection2 } from "../sections/process";
import { PreConsultationSection2 } from "../sections/pre-consultation";
import { GuaranteeSection2 } from "../sections/guarantee";
import { TestimonialsSection3 } from "../sections/testimonials";
import { ProjectsSection2 } from "../sections/projects";
import { FAQSection2 } from "../sections/faq";
import { BlogSection2 } from "../sections/blog";
import { FinalCTASection1 } from "../sections/final-cta";
import { FooterSection1 } from "../sections/footer";

/**
 * Homepage 2 — "Studio Modern" (bold typography, content-heavy).
 * Curated section variants assembled from `src/sections/**` — no section is modified.
 */
export default function Homepage2(): JSX.Element {
  return (
    <main className="bg-white">
      <div id="hero">
        <AboveTheFoldSection2 />
      </div>
      <div id="about">
        <AboutSection3 />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection2 />
      </div>
      <div id="services">
        <ServicesSection3 />
      </div>
      <div id="process">
        <ProcessSection2 />
      </div>
      <div id="pre-consultation">
        <PreConsultationSection2 />
      </div>
      <div id="guarantee">
        <GuaranteeSection2 />
      </div>
      <div id="testimonials">
        <TestimonialsSection3 />
      </div>
      <div id="projects">
        <ProjectsSection2 />
      </div>
      <div id="faq">
        <FAQSection2 />
      </div>
      <div id="blog">
        <BlogSection2 />
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
