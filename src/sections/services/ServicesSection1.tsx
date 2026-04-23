import type { JSX } from "react";

type ServiceCard = {
  title: string;
  description: string;
  ctaText: string;
  image: string;
};

export interface ServicesSection1Props {
  title?: string;
  description?: string;
  cards?: ServiceCard[];
}

const CARD_IMAGE = "https://www.figma.com/api/mcp/asset/5f7de40c-f574-4954-8d7b-cd25bdac2594";

const defaultTitle = "Building Solutions For Every Need";
const defaultDescription =
  "From custom homes to remodels and additions, we deliver inspector-backed construction that ensures quality, safety, and lasting value for your family.";
const defaultCards: ServiceCard[] = [
  {
    title: "Custom Homes",
    description:
      "Planning a bespoke architectural home? We manage the full build process with clear programmes and regular updates, turning plans into finished homes.",
    ctaText: "Read More",
    image: CARD_IMAGE,
  },
  {
    title: "Home Remodels",
    description:
      "Planning a bespoke architectural home? We manage the full build process with clear programmes and regular updates, turning plans into finished homes.",
    ctaText: "Read More",
    image: CARD_IMAGE,
  },
  {
    title: "Home Additions",
    description:
      "Planning a bespoke architectural home? We manage the full build process with clear programmes and regular updates, turning plans into finished homes.",
    ctaText: "Read More",
    image: CARD_IMAGE,
  },
];

export default function ServicesSection1({
  title = defaultTitle,
  description = defaultDescription,
  cards = defaultCards,
}: ServicesSection1Props): JSX.Element {
  return (
    <section className="services-section-1">
      <style>{`
        .services-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .services-section-1 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .services-section-1 .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 83px 24px 56px;
        }

        .services-section-1 .header {
          text-align: center;
          max-width: 830px;
          margin: 0 auto;
        }

        .services-section-1 .title {
          color: #000000;
          font-size: 48px;
          font-weight: 700;
          line-height: 52.8px;
          letter-spacing: -0.96px;
          text-transform: capitalize;
          margin-bottom: 20px;
        }

        .services-section-1 .description {
          max-width: 616px;
          margin: 0 auto;
          color: #424242;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.32px;
          text-align: center;
        }

        .services-section-1 .cards {
          margin-top: 46px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .services-section-1 .card {
          border: 0.886px solid rgba(124, 124, 124, 0.25);
          border-radius: 8.859px;
          background: #ffffff;
          min-height: 401px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .services-section-1 .card-image {
          height: 182.378px;
          width: 100%;
        }

        .services-section-1 .card-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .services-section-1 .card-body {
          padding: 22px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .services-section-1 .card-title {
          color: #000000;
          font-size: 21.262px;
          font-weight: 600;
          line-height: 25.515px;
          text-transform: capitalize;
          margin-bottom: 14px;
        }

        .services-section-1 .card-description {
          color: #827f7c;
          font-family: "Arimo", sans-serif;
          font-size: 13.5px;
          line-height: 18.75px;
          letter-spacing: -0.36px;
          margin-bottom: 20px;
          max-width: 309px;
        }

        .services-section-1 .cta {
          width: 144.75px;
          height: 38.25px;
          border: none;
          border-radius: 5px;
          background: #1e1e1e;
          color: #ffffff;
          font-family: "Arimo", sans-serif;
          font-size: 12.862px;
          font-weight: 700;
          line-height: 17.15px;
          letter-spacing: -0.2638px;
          box-shadow: 0px 2.473px 0.824px 0.824px rgba(0, 0, 0, 0.16);
          cursor: pointer;
          margin-top: auto;
        }

        @media (max-width: 1100px) {
          .services-section-1 .container {
            padding: 72px 20px 48px;
          }

          .services-section-1 .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
        }

        @media (max-width: 767px) {
          .services-section-1 .container {
            padding: 56px 16px 40px;
          }

          .services-section-1 .title {
            font-size: 36px;
            line-height: 42px;
            letter-spacing: -0.6px;
            margin-bottom: 14px;
          }

          .services-section-1 .description {
            font-size: 15px;
            line-height: 22px;
          }

          .services-section-1 .cards {
            margin-top: 36px;
            grid-template-columns: 1fr;
          }

          .services-section-1 .card {
            min-height: 380px;
          }
        }
      `}</style>

      <div className="container">
        <header className="header">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </header>

        <div className="cards">
          {cards.map((card) => (
            <article className="card" key={card.title}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button className="cta" type="button">
                  {card.ctaText}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
