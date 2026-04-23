import type { JSX } from "react";

type ServiceOverlayCard = {
  title: string;
  description: string;
  image: string;
  exploreText?: string;
};

export interface ServicesSection2Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  allServicesText?: string;
  cards?: ServiceOverlayCard[];
}

const IMAGE_1 = "https://www.figma.com/api/mcp/asset/22a07efe-ab98-4826-9f4c-a9831e18a1dd";
const IMAGE_2 = "https://www.figma.com/api/mcp/asset/d2c2e19a-a59f-4493-a568-396326557259";
const IMAGE_3 = "https://www.figma.com/api/mcp/asset/ebe1e8c0-b740-4127-a1a8-4d57e02172fd";

const defaultEyebrow = "Our Expertise";
const defaultTitle = "Architectural Precision In Every Detail.";
const defaultDescription =
  "From custom homes to remodels and additions, we deliver inspector-backed construction that ensures quality, safety, and lasting value for your family.";
const defaultAllServicesText = "All Services";
const defaultCards: ServiceOverlayCard[] = [
  {
    title: "Custom Homes",
    description: "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_1,
    exploreText: "Explore",
  },
  {
    title: "Home Remodels",
    description: "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_2,
    exploreText: "Explore",
  },
  {
    title: "Home Additions",
    description: "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_3,
    exploreText: "Explore",
  },
];

function ArrowIcon(): JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 4.5L12 8L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesSection2({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  allServicesText = defaultAllServicesText,
  cards = defaultCards,
}: ServicesSection2Props): JSX.Element {
  return (
    <section className="services-section-2">
      <style>{`
        .services-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .services-section-2 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .services-section-2 .container {
          max-width: 1297px;
          margin: 0 auto;
          padding: 83px 24px 56px;
        }

        .services-section-2 .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .services-section-2 .eyebrow {
          color: #131212;
          font-size: 16px;
          font-weight: 700;
          line-height: 38px;
          margin-bottom: 8px;
        }

        .services-section-2 .title {
          max-width: 532px;
          color: #131212;
          font-size: 48px;
          font-weight: 700;
          line-height: 45px;
          letter-spacing: -2px;
          text-transform: capitalize;
          margin-bottom: 24px;
        }

        .services-section-2 .description {
          max-width: 576px;
          color: #363636;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
        }

        .services-section-2 .all-services-btn {
          margin-top: 23px;
          width: 158px;
          height: 46px;
          border: 0.75px solid #000000;
          border-radius: 3.75px;
          box-shadow: 0px 2.25px 0.75px 0.75px rgba(0, 0, 0, 0.16);
          background: transparent;
          color: #000000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-transform: uppercase;
          font-size: 11.7px;
          font-weight: 700;
          line-height: 15.6px;
          letter-spacing: -0.24px;
          cursor: pointer;
          white-space: nowrap;
        }

        .services-section-2 .cards {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .services-section-2 .card {
          position: relative;
          height: 352px;
          overflow: hidden;
          background: #e7e5e4;
        }

        .services-section-2 .card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .services-section-2 .gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0));
          opacity: 0.9;
        }

        .services-section-2 .card-content {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 24px;
          color: #ffffff;
        }

        .services-section-2 .card-title {
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          line-height: 45px;
          letter-spacing: -2px;
          text-transform: capitalize;
          margin-bottom: 2px;
        }

        .services-section-2 .card-description {
          color: #ffffff;
          font-size: 12px;
          line-height: 16px;
          text-transform: capitalize;
          margin-bottom: 14px;
          max-width: 298px;
        }

        .services-section-2 .explore {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .services-section-2 .title {
            font-size: 40px;
            line-height: 40px;
          }

          .services-section-2 .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .services-section-2 .container {
            padding: 56px 16px 40px;
          }

          .services-section-2 .header {
            flex-direction: column;
            gap: 16px;
          }

          .services-section-2 .all-services-btn {
            margin-top: 0;
          }

          .services-section-2 .title {
            font-size: 34px;
            line-height: 36px;
            letter-spacing: -1.2px;
            margin-bottom: 16px;
          }

          .services-section-2 .description {
            font-size: 15px;
            line-height: 20px;
          }

          .services-section-2 .cards {
            margin-top: 28px;
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
          </div>
          <button className="all-services-btn" type="button">
            <span>{allServicesText}</span>
            <ArrowIcon />
          </button>
        </div>

        <div className="cards">
          {cards.map((card) => (
            <article className="card" key={card.title}>
              <img className="card-image" src={card.image} alt={card.title} />
              <div className="gradient" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <div className="explore">
                  <span>{card.exploreText ?? "Explore"}</span>
                  <ArrowIcon />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
