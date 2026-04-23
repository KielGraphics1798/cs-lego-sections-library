import type { JSX } from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export interface ProcessSection2Props {
  eyebrow?: string;
  title?: string;
  steps?: ProcessStep[];
}

const defaultEyebrow = "The Altevita Method";
const defaultTitle = "Integrated Design-Build";
const defaultDescription =
  "We start with transparency. Our online tool provides a realistic budget range instantly based on your inputs, ensuring alignment before we begin.";

const defaultSteps: ProcessStep[] = [
  { number: "01", title: "Initial Estimate", description: defaultDescription },
  { number: "02", title: "Site Visit", description: defaultDescription },
  { number: "03", title: "Preliminary Budget", description: defaultDescription },
  { number: "04", title: "Design Development", description: defaultDescription },
  { number: "05", title: "Comprehensive Quotation", description: defaultDescription },
  { number: "06", title: "Contract Agreement And Permissions", description: defaultDescription },
  { number: "07", title: "Construction Phase", description: defaultDescription },
  { number: "08", title: "Final Walkthrough", description: defaultDescription },
];

export default function ProcessSection2({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  steps = defaultSteps,
}: ProcessSection2Props): JSX.Element {
  const visibleSteps = steps.slice(0, 8);

  return (
    <section className="process-section-2">
      <style>{`
        .process-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .process-section-2 {
          width: 100%;
          background: #1c1c1c;
          font-family: "Inter", sans-serif;
          color: #fafafa;
        }

        .process-section-2 .container {
          max-width: 1226px;
          margin: 0 auto;
          padding: 68px 24px 64px;
        }

        .process-section-2 .eyebrow {
          color: #fafafa;
          font-size: 16px;
          line-height: 38px;
          font-weight: 700;
        }

        .process-section-2 .title {
          margin-top: 5px;
          color: #fafafa;
          font-size: 66px;
          line-height: 1;
          letter-spacing: -2px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .process-section-2 .grid {
          margin-top: 58px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 60px;
          row-gap: 62px;
        }

        .process-section-2 .card {
          border-top: 1px solid #6f6f6f;
          min-height: 240px;
          padding-top: 19px;
        }

        .process-section-2 .step-number {
          color: #ffb717;
          font-size: 66px;
          line-height: 45px;
          font-weight: 700;
          letter-spacing: -2px;
          text-transform: capitalize;
        }

        .process-section-2 .step-title {
          margin-top: 19px;
          color: #fafafa;
          font-size: 24px;
          line-height: 1.1;
          letter-spacing: -1px;
          font-weight: 700;
          text-transform: capitalize;
          min-height: 52px;
        }

        .process-section-2 .step-description {
          margin-top: 13px;
          color: #fafafa;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
        }

        @media (max-width: 1200px) {
          .process-section-2 .title {
            font-size: 54px;
          }

          .process-section-2 .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 28px;
            row-gap: 38px;
          }
        }

        @media (max-width: 760px) {
          .process-section-2 .container {
            padding: 52px 16px 48px;
          }

          .process-section-2 .eyebrow {
            font-size: 14px;
            line-height: 26px;
          }

          .process-section-2 .title {
            margin-top: 8px;
            font-size: 40px;
            line-height: 42px;
          }

          .process-section-2 .grid {
            margin-top: 34px;
            grid-template-columns: 1fr;
            row-gap: 26px;
          }

          .process-section-2 .card {
            min-height: 200px;
          }

          .process-section-2 .step-number {
            font-size: 52px;
            line-height: 40px;
          }

          .process-section-2 .step-title {
            margin-top: 14px;
            font-size: 30px;
            min-height: 0;
          }

          .process-section-2 .step-description {
            margin-top: 10px;
            font-size: 15px;
            line-height: 20px;
          }
        }
      `}</style>

      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="title">{title}</h2>

        <div className="grid">
          {visibleSteps.map((step) => (
            <article className="card" key={`${step.number}-${step.title}`}>
              <p className="step-number">{step.number}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
