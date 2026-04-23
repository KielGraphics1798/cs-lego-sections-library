import type { JSX } from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export interface ProcessSection1Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: ProcessStep[];
  activeStep?: number;
}

const ICON_1 = "https://www.figma.com/api/mcp/asset/508c189d-5708-4e52-947f-57fe7598c098";
const ICON_2 = "https://www.figma.com/api/mcp/asset/6f046ca0-9451-4e30-99ac-e9512bd2efdf";
const ICON_3 = "https://www.figma.com/api/mcp/asset/aea9123b-0ed6-4d29-a29b-9609d2812a5c";
const ICON_4 = "https://www.figma.com/api/mcp/asset/6a1206b6-3ddd-4550-9555-92314106f343";
const ICON_5 = "https://www.figma.com/api/mcp/asset/51f91a91-3145-4489-a97b-8d6243a53433";
const ICON_6 = "https://www.figma.com/api/mcp/asset/9ff4f9c2-e6f8-4a91-bcbc-63d4e4044acc";
const ICON_7 = "https://www.figma.com/api/mcp/asset/f8a469d5-3805-4f85-a6c9-376c362f5de1";
const ICON_8 = "https://www.figma.com/api/mcp/asset/55449b3d-6aeb-405d-bfe1-60b8c8189f15";

const defaultEyebrow = "THE ALTEVITA METHOD";
const defaultTitle = "Integrated Design-Build";
const defaultDescription =
  "A seamless journey from concept to completion. We've refined our process into eight distinct phases to ensure transparency, precision, and excellence.";

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Estimate",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly based on your inputs, ensuring alignment before we begin.",
    icon: ICON_1,
  },
  {
    number: "02",
    title: "Site Visit",
    description: "Our experts conduct a thorough on-site evaluation to understand the unique constraints and opportunities of your space.",
    icon: ICON_2,
  },
  {
    number: "03",
    title: "Preliminary Budget",
    description: "Refining the initial estimate into a detailed preliminary budget that accounts for site-specific requirements and material choices.",
    icon: ICON_3,
  },
  {
    number: "04",
    title: "Design Development",
    description: "Our design team translates your vision into architectural plans, selecting finishes and fixtures that define your aesthetic.",
    icon: ICON_4,
  },
  {
    number: "05",
    title: "Comprehensive Quotation",
    description: "A fixed-price contract that covers every detail of your project, providing total financial certainty before construction starts.",
    icon: ICON_5,
  },
  {
    number: "06",
    title: "Contract & Permissions",
    description: "We handle all the paperwork, from building permits to HOA approvals, so you don't have to worry about the red tape.",
    icon: ICON_6,
  },
  {
    number: "07",
    title: "Construction Phase",
    description: "Our skilled craftsmen bring the design to life, managed by a dedicated project lead who keeps you updated every step of the way.",
    icon: ICON_7,
  },
  {
    number: "08",
    title: "Final Walkthrough",
    description: "A meticulous final inspection and walkthrough to ensure every detail meets our exacting standards and your complete satisfaction.",
    icon: ICON_8,
  },
];

export default function ProcessSection1({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  steps = defaultSteps,
  activeStep = 1,
}: ProcessSection1Props): JSX.Element {
  const visibleSteps = steps.slice(0, 8);

  return (
    <section className="process-section-1">
      <style>{`
        .process-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .process-section-1 {
          width: 100%;
          background:
            linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 100%),
            linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 100%);
          font-family: "Inter", sans-serif;
          color: #ffffff;
        }

        .process-section-1 .container {
          max-width: 1336px;
          margin: 0 auto;
          padding: 72px 24px 94px;
        }

        .process-section-1 .header {
          max-width: 825px;
          margin: 0 auto;
          text-align: center;
        }

        .process-section-1 .eyebrow {
          color: #fe9a00;
          font-size: 14.302px;
          font-weight: 400;
          line-height: 20.431px;
          letter-spacing: 4.29px;
          text-transform: uppercase;
        }

        .process-section-1 .title {
          margin-top: 26px;
          color: #ffffff;
          font-size: 64px;
          line-height: 76px;
          letter-spacing: -4.9035px;
          font-weight: 700;
        }

        .process-section-1 .description {
          margin-top: 26px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 18.388px;
          line-height: 27px;
        }

        .process-section-1 .grid {
          margin: 147px auto 0;
          max-width: 1209.535px;
          background: rgba(255, 255, 255, 0.1);
          border: 1.022px solid rgba(255, 255, 255, 0.1);
          border-radius: 16.345px;
          box-shadow: 0px 25.539px 51.078px -12.259px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .process-section-1 .card {
          background: #0f0f0f;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          min-height: 349px;
          padding: 36px 34px 26px 32px;
          position: relative;
        }

        .process-section-1 .card:nth-child(4n) {
          border-right: none;
        }

        .process-section-1 .card:nth-child(n + 5) {
          border-bottom: none;
        }

        .process-section-1 .card.is-active {
          background: #151515;
          box-shadow: inset 0 -4.086px 0 #fe9a00;
        }

        .process-section-1 .step-number {
          color: rgba(255, 255, 255, 0.1);
          font-size: 36.776px;
          line-height: 40.863px;
          font-style: italic;
        }

        .process-section-1 .card.is-active .step-number {
          color: rgba(254, 154, 0, 0.2);
        }

        .process-section-1 .step-icon {
          width: 24.518px;
          height: 24.518px;
          object-fit: contain;
          position: absolute;
          top: 40px;
          right: 34px;
        }

        .process-section-1 .step-title {
          margin-top: 73px;
          color: #ffffff;
          font-size: 34px;
          line-height: 1;
          letter-spacing: -1.2px;
          font-weight: 500;
        }

        .process-section-1 .card.is-active .step-title {
          color: #fe9a00;
        }

        .process-section-1 .step-description {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14.302px;
          line-height: 23.241px;
        }

        .process-section-1 .card.is-active .step-description {
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1200px) {
          .process-section-1 .title {
            font-size: 52px;
            line-height: 58px;
            letter-spacing: -2px;
          }

          .process-section-1 .grid {
            margin-top: 72px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .process-section-1 .card:nth-child(4n) {
            border-right: 1px solid rgba(255, 255, 255, 0.06);
          }

          .process-section-1 .card:nth-child(2n) {
            border-right: none;
          }

          .process-section-1 .card:nth-child(n + 5) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .process-section-1 .card:nth-child(n + 7) {
            border-bottom: none;
          }
        }

        @media (max-width: 760px) {
          .process-section-1 .container {
            padding: 56px 16px 64px;
          }

          .process-section-1 .eyebrow {
            font-size: 12px;
            letter-spacing: 2.8px;
          }

          .process-section-1 .title {
            margin-top: 14px;
            font-size: 38px;
            line-height: 42px;
          }

          .process-section-1 .description {
            margin-top: 16px;
            font-size: 15px;
            line-height: 23px;
          }

          .process-section-1 .grid {
            margin-top: 44px;
            grid-template-columns: 1fr;
            border-radius: 12px;
          }

          .process-section-1 .card {
            min-height: 280px;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding: 24px 22px 22px;
          }

          .process-section-1 .card:last-child {
            border-bottom: none;
          }

          .process-section-1 .step-icon {
            top: 28px;
            right: 22px;
          }

          .process-section-1 .step-title {
            margin-top: 46px;
            font-size: 30px;
          }

          .process-section-1 .step-description {
            margin-top: 12px;
            font-size: 14px;
            line-height: 21px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>

        <div className="grid">
          {visibleSteps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <article className={`card${isActive ? " is-active" : ""}`} key={`${step.number}-${step.title}`}>
                <p className="step-number">{step.number}</p>
                <img className="step-icon" src={step.icon} alt="" aria-hidden="true" />
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
