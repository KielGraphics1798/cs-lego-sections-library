import type { JSX } from "react";

type ProcessCard = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

export interface ProcessSection5Props {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  cards?: ProcessCard[];
}

const IMAGE_1 = "https://www.figma.com/api/mcp/asset/3526c4bf-fb69-4902-b9c7-4f57cebc9de9";
const IMAGE_2 = "https://www.figma.com/api/mcp/asset/8e321dc1-96c7-44c5-82a4-7a35fec54951";
const IMAGE_3 = "https://www.figma.com/api/mcp/asset/b969f5c7-88e4-4bf9-bd8b-c82c2d946c8a";
const IMAGE_4 = "https://www.figma.com/api/mcp/asset/b733dc86-8bd6-4e5b-9a4d-0489f15b5c27";
const IMAGE_5 = "https://www.figma.com/api/mcp/asset/0ce4e3e5-6681-40d7-84b0-c822aef90e87";
const IMAGE_6 = "https://www.figma.com/api/mcp/asset/5d14c105-45f1-4699-be1c-1e4d304135b9";
const IMAGE_7 = "https://www.figma.com/api/mcp/asset/53cf9f49-82ab-4e4d-b33c-e31bc0d55743";
const IMAGE_8 = "https://www.figma.com/api/mcp/asset/e68f8a79-f41b-4ce2-b1d0-4efe00f9df87";

const ICON_1 = "https://www.figma.com/api/mcp/asset/0dabebf0-a070-4e84-948c-b68c7e3733ec";
const ICON_2 = "https://www.figma.com/api/mcp/asset/8bc2dcf0-9683-4ebf-96ee-75c6dc979518";
const ICON_3 = "https://www.figma.com/api/mcp/asset/7722712b-b6e9-4c6e-b3c3-38666f95199e";
const ICON_4 = "https://www.figma.com/api/mcp/asset/2dec62be-b803-4882-9761-fb656dc83c52";
const ICON_5 = "https://www.figma.com/api/mcp/asset/50704a72-5dad-4bd0-811d-e38d52f27aeb";
const ICON_6 = "https://www.figma.com/api/mcp/asset/c4e28d92-528e-4518-9e0e-c93a9186211f";
const ICON_7 = "https://www.figma.com/api/mcp/asset/8b41aac2-03a5-4976-b928-4fc8e898f21b";
const ICON_8 = "https://www.figma.com/api/mcp/asset/e8237af0-1d44-4557-9dcd-a026f1ef16a6";

const defaultEyebrow = "THE ALTEVITA METHOD";
const defaultTitleLine1 = "Integrated";
const defaultTitleLine2 = "Design-Build";
const defaultSubtitle =
  "A seamless journey from concept to completion. We've refined our process into eight distinct phases to ensure transparency, precision, and excellence.";
const defaultCardDescription =
  "We start with transparency. Our online tool provides a realistic budget range instantly based on your inputs, ensuring alignment before we begin.";

const defaultCards: ProcessCard[] = [
  { title: "Initial Estimate", description: defaultCardDescription, image: IMAGE_1, icon: ICON_1 },
  { title: "Site Visit", description: defaultCardDescription, image: IMAGE_2, icon: ICON_2 },
  { title: "Preliminary Budget", description: defaultCardDescription, image: IMAGE_3, icon: ICON_3 },
  { title: "Design Development", description: defaultCardDescription, image: IMAGE_4, icon: ICON_4 },
  { title: "Comprehensive Quotation", description: defaultCardDescription, image: IMAGE_5, icon: ICON_5 },
  { title: "Contract Agreement And Permissions", description: defaultCardDescription, image: IMAGE_6, icon: ICON_6 },
  { title: "Construction Phase", description: defaultCardDescription, image: IMAGE_7, icon: ICON_7 },
  { title: "Final Walkthrough", description: defaultCardDescription, image: IMAGE_8, icon: ICON_8 },
];

export default function ProcessSection5({
  eyebrow = defaultEyebrow,
  titleLine1 = defaultTitleLine1,
  titleLine2 = defaultTitleLine2,
  subtitle = defaultSubtitle,
  cards = defaultCards,
}: ProcessSection5Props): JSX.Element {
  const visibleCards = cards.slice(0, 8);

  return (
    <section className="process-section-5">
      <style>{`
        .process-section-5 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .process-section-5 {
          width: 100%;
          background: #080808;
          color: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .process-section-5 .container {
          max-width: 1278px;
          margin: 0 auto;
          padding: 78px 24px 72px;
        }

        .process-section-5 .header {
          max-width: 626px;
          margin: 0 auto;
          text-align: center;
        }

        .process-section-5 .eyebrow {
          color: #fe9a00;
          font-size: 14.302px;
          font-weight: 600;
          line-height: 20.431px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .process-section-5 .title-line-1 {
          margin-top: 19px;
          color: #ffffff;
          font-size: 64px;
          line-height: 1;
          letter-spacing: -4.9035px;
          font-weight: 500;
        }

        .process-section-5 .title-line-2 {
          margin-top: 4px;
          color: rgba(234, 234, 234, 0.4);
          font-size: 64px;
          line-height: 1;
          letter-spacing: -4.9035px;
          font-weight: 600;
        }

        .process-section-5 .subtitle {
          margin-top: 20px;
          color: #ffffff;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.32px;
        }

        .process-section-5 .grid {
          margin-top: 72px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .process-section-5 .card {
          height: 388px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          background: #1a1a1a;
          box-shadow: 4px 4px 29.8px rgba(91, 91, 91, 0.25);
        }

        .process-section-5 .card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .process-section-5 .card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(-2.711deg, #000000 37.75%, rgba(0, 0, 0, 0.2) 81.247%, rgba(0, 0, 0, 0) 108.48%);
          opacity: 0.9;
        }

        .process-section-5 .icon {
          position: absolute;
          top: 75px;
          left: 50%;
          transform: translateX(-50%);
          width: 77.985px;
          height: 77.985px;
          object-fit: contain;
          z-index: 1;
        }

        .process-section-5 .card-content {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 54px;
          z-index: 1;
          color: #ffffff;
          text-align: center;
        }

        .process-section-5 .card-title {
          color: #ffffff;
          font-size: 24px;
          line-height: 1.05;
          letter-spacing: -1.2px;
          font-weight: 700;
          text-transform: capitalize;
          min-height: 52px;
        }

        .process-section-5 .card-description {
          margin-top: 18px;
          color: #ffffff;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
        }

        @media (max-width: 1200px) {
          .process-section-5 .title-line-1,
          .process-section-5 .title-line-2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .process-section-5 .grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 920px) {
          .process-section-5 .container {
            padding: 56px 16px 48px;
          }

          .process-section-5 .title-line-1,
          .process-section-5 .title-line-2 {
            font-size: 40px;
            letter-spacing: -1.6px;
          }

          .process-section-5 .subtitle {
            font-size: 15px;
            line-height: 21px;
          }

          .process-section-5 .grid {
            margin-top: 44px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .process-section-5 .grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .process-section-5 .card {
            height: 344px;
          }

          .process-section-5 .icon {
            top: 58px;
            width: 68px;
            height: 68px;
          }

          .process-section-5 .card-content {
            left: 18px;
            right: 18px;
            bottom: 34px;
          }

          .process-section-5 .card-title {
            font-size: 24px;
            min-height: 44px;
          }

          .process-section-5 .card-description {
            margin-top: 12px;
            font-size: 15px;
            line-height: 18px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="title-line-1">{titleLine1}</h2>
          <h2 className="title-line-2">{titleLine2}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>

        <div className="grid">
          {visibleCards.map((card) => (
            <article key={card.title} className="card">
              <img className="card-image" src={card.image} alt={card.title} />
              <img className="icon" src={card.icon} alt="" aria-hidden="true" />
              <div className="card-content">
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
