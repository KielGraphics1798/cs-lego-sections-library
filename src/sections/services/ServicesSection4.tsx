import type { JSX } from "react";

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  icon: string;
  ctaText?: string;
  imagePosition?: string;
};

export interface ServicesSection4Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  allServicesText?: string;
  cards?: ServiceCard[];
}

const IMAGE_1 = "https://www.figma.com/api/mcp/asset/65a7f0e8-be68-48e5-9a15-2e05a733c234";
const IMAGE_2 = "https://www.figma.com/api/mcp/asset/2af4e793-179f-459c-848f-8dea9a650cd1";
const IMAGE_3 = "https://www.figma.com/api/mcp/asset/5557ea46-9853-4093-adc6-a58ab7651224";
const ICON_1 = "https://www.figma.com/api/mcp/asset/58d224a3-2e9a-4298-810e-9420c3bcefda";
const ICON_2 = "https://www.figma.com/api/mcp/asset/114a77df-fae7-408b-88a4-cecb3b086320";
const ICON_3 = "https://www.figma.com/api/mcp/asset/096af5fc-4d38-4bf4-8782-5eabff15f56a";
const ICON_ARROW = "https://www.figma.com/api/mcp/asset/0b88e066-6885-4890-8406-3ad2f311bd8e";
const ICON_BUTTON_ARROW = "https://www.figma.com/api/mcp/asset/6e92959f-25a7-4b8c-8286-02faf96754e3";

const defaultEyebrow = "Our Expertise";
const defaultTitle = "Architectural Precision In Every Detail.";
const defaultDescription =
  "From custom homes to remodels and additions, we deliver inspector-backed construction that ensures quality, safety, and lasting value for your family.";
const defaultAllServicesText = "All Services";

const defaultCards: ServiceCard[] = [
  {
    title: "Custom Homes",
    description:
      "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_1,
    icon: ICON_1,
    ctaText: "Explore",
    imagePosition: "center center",
  },
  {
    title: "Custom Homes",
    description:
      "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_2,
    icon: ICON_2,
    ctaText: "Explore",
    imagePosition: "center center",
  },
  {
    title: "Custom Homes",
    description:
      "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_3,
    icon: ICON_3,
    ctaText: "Explore",
    imagePosition: "64% center",
  },
];

function ArrowIcon(): JSX.Element {
  return <img src={ICON_ARROW} alt="" aria-hidden="true" width="16" height="16" />;
}

function ButtonArrowIcon(): JSX.Element {
  return <img src={ICON_BUTTON_ARROW} alt="" aria-hidden="true" width="16" height="16" />;
}

export default function ServicesSection4({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  allServicesText = defaultAllServicesText,
  cards = defaultCards,
}: ServicesSection4Props): JSX.Element {
  const visibleCards = cards.slice(0, 3);

  return (
    <section className="services-section-4">
      <style>{`
        .services-section-4 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .services-section-4 {
          width: 100%;
          background: #252525;
          font-family: "Inter", sans-serif;
        }

        .services-section-4 .container {
          max-width: 1298px;
          margin: 0 auto;
          padding: 90px 24px 88px;
        }

        .services-section-4 .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .services-section-4 .header-copy {
          max-width: 576px;
        }

        .services-section-4 .eyebrow {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          line-height: 38px;
          margin-bottom: 2px;
        }

        .services-section-4 .title {
          max-width: 532px;
          color: #ffffff;
          font-size: 48px;
          font-weight: 700;
          line-height: 45px;
          letter-spacing: -2px;
          text-transform: capitalize;
        }

        .services-section-4 .description {
          max-width: 576px;
          margin-top: 26px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: -0.36px;
        }

        .services-section-4 .all-services-btn {
          margin-top: 12px;
          width: 176px;
          height: 56px;
          border: 0.75px solid #000000;
          border-radius: 3.75px;
          background: #ffb717;
          color: #000000;
          box-shadow: 0px 2.25px 0.75px 0.75px rgba(0, 0, 0, 0.16);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 11.7px;
          font-weight: 700;
          line-height: 15.6px;
          letter-spacing: -0.24px;
          text-transform: uppercase;
          white-space: nowrap;
          cursor: pointer;
        }

        .services-section-4 .cards {
          margin-top: 64px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .services-section-4 .card {
          position: relative;
          border-radius: 10px;
          background: #e7e5e4;
          overflow: hidden;
          height: 433px;
        }

        .services-section-4 .media {
          position: absolute;
          inset: 0;
        }

        .services-section-4 .media img.card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .services-section-4 .media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(-2.18deg, #000000 37.75%, rgba(0, 0, 0, 0.2) 81.247%, rgba(0, 0, 0, 0) 108.48%);
          opacity: 0.9;
        }

        .services-section-4 .card-content {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 20px;
          color: #ffffff;
        }

        .services-section-4 .icon {
          position: static;
          margin-bottom: 14px;
          width: 38px;
          height: 35px;
        }

        .services-section-4 .card--first .icon {
          width: 34px;
          height: 35px;
        }

        .services-section-4 .card--third .icon {
          width: 28px;
          height: 31px;
        }

        .services-section-4 .icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .services-section-4 .card-title {
          color: #ffffff;
          font-size: 34px;
          font-weight: 700;
          line-height: 23px;
          letter-spacing: -2px;
          text-transform: capitalize;
          margin-bottom: 12px;
        }

        .services-section-4 .card-description {
          color: #ffffff;
          font-size: 12px;
          line-height: 17px;
          text-transform: capitalize;
          max-width: 298px;
          min-height: 68px;
        }

        .services-section-4 .cta {
          margin-top: 12px;
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

        .services-section-4 .cta img {
          width: 16px;
          height: 16px;
          display: block;
        }

        @media (max-width: 1200px) {
          .services-section-4 .container {
            padding: 72px 20px 66px;
          }

          .services-section-4 .header {
            flex-direction: column;
            gap: 16px;
          }

          .services-section-4 .all-services-btn {
            margin-top: 0;
          }

          .services-section-4 .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .services-section-4 .container {
            padding: 56px 16px 48px;
          }

          .services-section-4 .eyebrow {
            line-height: 26px;
            margin-bottom: 8px;
          }

          .services-section-4 .title {
            font-size: 36px;
            line-height: 38px;
            letter-spacing: -1.3px;
          }

          .services-section-4 .description {
            margin-top: 16px;
            font-size: 15px;
            line-height: 20px;
          }

          .services-section-4 .cards {
            margin-top: 32px;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .services-section-4 .card {
            height: 390px;
          }

          .services-section-4 .card-title {
            font-size: 30px;
            line-height: 30px;
          }

          .services-section-4 .card-description {
            min-height: 60px;
          }
        }

        @media (max-width: 460px) {
          .services-section-4 .card {
            height: 360px;
          }

          .services-section-4 .card-content {
            left: 18px;
            right: 18px;
            bottom: 16px;
          }

          .services-section-4 .card-title {
            font-size: 28px;
            letter-spacing: -1px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="header-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
          </div>

          <button className="all-services-btn" type="button">
            <span>{allServicesText}</span>
            <ButtonArrowIcon />
          </button>
        </div>

        <div className="cards">
          {visibleCards.map((card, index) => (
            <article className={`card ${index === 0 ? "card--first" : ""} ${index === 2 ? "card--third" : ""}`} key={`${card.title}-${index}`}>
              <div className="media">
                <img
                  className="card-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.imagePosition ?? "center center" }}
                />
              </div>

              <div className="card-content">
                <div className="icon" aria-hidden="true">
                  <img src={card.icon} alt="" />
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>

                <div className="cta">
                  <span>{card.ctaText ?? "Explore"}</span>
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
