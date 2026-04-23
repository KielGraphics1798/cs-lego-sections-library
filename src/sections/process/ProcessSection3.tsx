import type { JSX } from "react";

type ProcessCard = {
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

export interface ProcessSection3Props {
  eyebrow?: string;
  title?: string;
  cards?: ProcessCard[];
}

const IMAGE_LEFT = "https://www.figma.com/api/mcp/asset/3c520acc-dafc-4d89-b75d-268b2fe1306b";
const IMAGE_RIGHT = "https://www.figma.com/api/mcp/asset/bb9d9c73-4951-4b49-b64f-0b9eb338534c";

const ICON_1 = "https://www.figma.com/api/mcp/asset/caabc8d8-d664-47a3-a397-122bbacd5dac";
const ICON_2 = "https://www.figma.com/api/mcp/asset/ccea9702-4256-41d6-bc5d-f1dd5815bc87";
const ICON_3 = "https://www.figma.com/api/mcp/asset/d96a4c76-7183-4ef1-a191-6126270913df";
const ICON_4 = "https://www.figma.com/api/mcp/asset/7803b5d4-185d-40de-8b25-b57c5fd885a5";
const ICON_5 = "https://www.figma.com/api/mcp/asset/a1ee3fb0-00cd-4c1f-b3a7-ee60b967ed7f";
const ICON_6 = "https://www.figma.com/api/mcp/asset/dd3a3dfc-3d61-402f-9c1b-b93ae7210022";
const ICON_7 = "https://www.figma.com/api/mcp/asset/3f7f0cdc-e651-457e-bb8e-2ac34d927484";
const ICON_8 = "https://www.figma.com/api/mcp/asset/e52489f7-7c35-4ef4-a2a1-2c354d1fc60d";

const defaultEyebrow = "The Altevita Method";
const defaultTitle = "Integrated Design-Build";
const defaultDescription =
  "We start with transparency. Our online tool provides a realistic budget range instantly based on your inputs, ensuring alignment before we begin.";

const defaultCards: ProcessCard[] = [
  { number: "01", title: "Initial Estimate", description: defaultDescription, icon: ICON_1, image: IMAGE_LEFT },
  { number: "02", title: "Site Visit", description: defaultDescription, icon: ICON_2, image: IMAGE_RIGHT },
  { number: "03", title: "Preliminary Budget", description: defaultDescription, icon: ICON_3, image: IMAGE_LEFT },
  { number: "04", title: "Design Development", description: defaultDescription, icon: ICON_4, image: IMAGE_RIGHT },
  { number: "05", title: "Comprehensive Quotation", description: defaultDescription, icon: ICON_5, image: IMAGE_LEFT },
  { number: "06", title: "Contract Agreement And Permissions", description: defaultDescription, icon: ICON_6, image: IMAGE_RIGHT },
  { number: "07", title: "Construction Phase", description: defaultDescription, icon: ICON_7, image: IMAGE_LEFT },
  { number: "08", title: "Final Walkthrough", description: defaultDescription, icon: ICON_8, image: IMAGE_RIGHT },
];

export default function ProcessSection3({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  cards = defaultCards,
}: ProcessSection3Props): JSX.Element {
  const visibleCards = cards.slice(0, 8);

  return (
    <section className="process-section-3">
      <style>{`
        .process-section-3 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .process-section-3 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .process-section-3 .container {
          max-width: 1264px;
          margin: 0 auto;
          padding: 90px 24px 72px;
        }

        .process-section-3 .header {
          text-align: center;
        }

        .process-section-3 .eyebrow {
          color: #2b2b2b;
          font-size: 16px;
          line-height: 38px;
          font-weight: 700;
        }

        .process-section-3 .title {
          margin-top: 2px;
          color: #2b2b2b;
          font-size: 66px;
          line-height: 1;
          letter-spacing: -2px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .process-section-3 .grid {
          margin-top: 66px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px 26px;
        }

        .process-section-3 .card {
          border: 0.35px solid #626262;
          border-radius: 10px;
          min-height: 274px;
          background: #ffffff;
          overflow: hidden;
          display: grid;
          grid-template-columns: 202px 1fr;
        }

        .process-section-3 .media {
          position: relative;
          min-height: 274px;
          overflow: hidden;
        }

        .process-section-3 .media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.58);
        }

        .process-section-3 .media-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .process-section-3 .icon-badge {
          position: absolute;
          left: 23px;
          top: 39px;
          width: 128px;
          height: 128px;
          border: 1px solid #f3f4f6;
          border-radius: 9999px;
          background: #010101;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-section-3 .icon-badge::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          box-shadow:
            0px 1px 3px 0px rgba(0, 0, 0, 0.1),
            0px 1px 2px -1px rgba(0, 0, 0, 0.1);
        }

        .process-section-3 .icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
          position: relative;
          z-index: 1;
        }

        .process-section-3 .number {
          position: absolute;
          left: 60px;
          bottom: 52px;
          color: #fd9a00;
          font-size: 62.72px;
          line-height: 58.8px;
          letter-spacing: -2.6133px;
          font-weight: 700;
          z-index: 2;
        }

        .process-section-3 .content {
          padding: 48px 28px 24px 18px;
          color: #2b2b2b;
        }

        .process-section-3 .card-title {
          color: #2b2b2b;
          font-size: 24px;
          line-height: 1.06;
          letter-spacing: -1px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .process-section-3 .card-description {
          margin-top: 14px;
          color: #2b2b2b;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
        }

        @media (max-width: 1200px) {
          .process-section-3 .title {
            font-size: 54px;
          }

          .process-section-3 .grid {
            gap: 18px;
          }

          .process-section-3 .card {
            grid-template-columns: 182px 1fr;
          }

          .process-section-3 .media {
            min-height: 248px;
          }

          .process-section-3 .icon-badge {
            left: 16px;
            top: 32px;
            width: 112px;
            height: 112px;
          }

          .process-section-3 .number {
            left: 46px;
            bottom: 42px;
            font-size: 52px;
            line-height: 48px;
          }

          .process-section-3 .content {
            padding: 40px 20px 22px 16px;
          }
        }

        @media (max-width: 900px) {
          .process-section-3 .container {
            padding: 56px 16px 48px;
          }

          .process-section-3 .eyebrow {
            font-size: 14px;
            line-height: 24px;
          }

          .process-section-3 .title {
            margin-top: 8px;
            font-size: 40px;
            line-height: 42px;
          }

          .process-section-3 .grid {
            margin-top: 36px;
            grid-template-columns: 1fr;
          }

          .process-section-3 .card {
            min-height: 240px;
          }
        }

        @media (max-width: 560px) {
          .process-section-3 .card {
            grid-template-columns: 132px 1fr;
            min-height: 202px;
          }

          .process-section-3 .media {
            min-height: 202px;
          }

          .process-section-3 .icon-badge {
            left: 8px;
            top: 40px;
            width: 86px;
            height: 86px;
          }

          .process-section-3 .icon {
            width: 30px;
            height: 30px;
          }

          .process-section-3 .number {
            left: 34px;
            bottom: 28px;
            font-size: 46px;
            line-height: 40px;
          }

          .process-section-3 .content {
            padding: 34px 14px 14px 14px;
          }

          .process-section-3 .card-title {
            font-size: 30px;
          }

          .process-section-3 .card-description {
            margin-top: 8px;
            font-size: 14px;
            line-height: 16px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="title">{title}</h2>
        </div>

        <div className="grid">
          {visibleCards.map((card) => (
            <article key={`${card.number}-${card.title}`} className="card">
              <div className="media">
                <img className="media-image" src={card.image} alt={card.title} />
                <div className="icon-badge" aria-hidden="true">
                  <img className="icon" src={card.icon} alt="" />
                </div>
                <span className="number">{card.number}</span>
              </div>

              <div className="content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
