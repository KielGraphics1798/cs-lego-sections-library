import type { JSX } from "react";

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  icon: string;
  ctaText?: string;
  imagePosition?: string;
};

export interface ServicesSection5Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  cards?: ServiceCard[];
}

const IMAGE_CUSTOM_HOMES = "https://www.figma.com/api/mcp/asset/f00e6e37-f01f-4bc3-b4c0-a40768880835";
const IMAGE_HOME_ADDITION = "https://www.figma.com/api/mcp/asset/941426b6-d268-4070-8ddb-6919411be581";
const IMAGE_HOME_RENOVATION = "https://www.figma.com/api/mcp/asset/f936a1f1-4b10-480b-ba24-a33fcc0bcd5c";
const ICON_BADGE = "https://www.figma.com/api/mcp/asset/45c503dd-3f37-4d90-abcf-dff030babca2";
const ICON_CUSTOM_HOMES = "https://www.figma.com/api/mcp/asset/8580aecd-fd72-42ea-866c-efe453a2b04f";
const ICON_HOME_ADDITION = "https://www.figma.com/api/mcp/asset/de838931-0d82-4cb2-8848-0bf350414e6d";
const ICON_HOME_RENOVATION = "https://www.figma.com/api/mcp/asset/a8fe866b-290d-420a-8d00-2642b17b79ca";
const ICON_ARROW = "https://www.figma.com/api/mcp/asset/fd0d6c32-26bf-4647-8c6e-ea32bd68b6af";

const defaultEyebrow = "OUR SERVICES";
const defaultTitle = "Best Service From Altevita";
const defaultDescription =
  "How we work tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue, id vulputate erat egestas sed. Ut euismod ipsum ut dolor hendrerit, non ultricies urna accumsan.";

const defaultCards: ServiceCard[] = [
  {
    title: "Custom Homes",
    description:
      "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_CUSTOM_HOMES,
    icon: ICON_CUSTOM_HOMES,
    ctaText: "Explore",
    imagePosition: "center center",
  },
  {
    title: "Home Addition",
    description:
      "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_HOME_ADDITION,
    icon: ICON_HOME_ADDITION,
    ctaText: "Explore",
    imagePosition: "center center",
  },
  {
    title: "Home Renovation",
    description:
      "Building your dream home from the ground up? Our custom home services bring inspector-level oversight to every phase, preventing problems before they start.",
    image: IMAGE_HOME_RENOVATION,
    icon: ICON_HOME_RENOVATION,
    ctaText: "Explore",
    imagePosition: "62% center",
  },
];

export default function ServicesSection5({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  cards = defaultCards,
}: ServicesSection5Props): JSX.Element {
  const visibleCards = cards.slice(0, 3);

  return (
    <section className="services-section-5">
      <style>{`
        .services-section-5 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .services-section-5 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .services-section-5 .container {
          max-width: 1298px;
          margin: 0 auto;
          padding: 92px 24px 70px;
        }

        .services-section-5 .eyebrow {
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 4.8px;
          color: #fea600;
          text-transform: uppercase;
          margin-bottom: 33px;
        }

        .services-section-5 .title {
          max-width: 690px;
          margin: 0 auto;
          text-align: center;
          color: #212121;
          font-size: 48px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.96px;
        }

        .services-section-5 .description {
          max-width: 930px;
          margin: 24px auto 0;
          text-align: center;
          color: #616161;
          font-family: "Montserrat", "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
        }

        .services-section-5 .cards {
          margin-top: 74px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .services-section-5 .card {
          position: relative;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0px 1px 24.7px 0px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          height: 448px;
        }

        .services-section-5 .image-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .services-section-5 .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.7);
        }

        .services-section-5 .image-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(2.5deg, rgba(0, 0, 0, 1) 37%, rgba(0, 0, 0, 0.2) 106%, rgba(0, 0, 0, 0) 149%);
          opacity: 0.9;
        }

        .services-section-5 .card-body {
          position: relative;
          z-index: 1;
          margin-top: 195px;
          height: 253px;
          padding: 32px 28px 24px;
          text-align: center;
        }

        .services-section-5 .panel-shape {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .services-section-5 .icon-badge {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 41px;
          height: 39px;
          z-index: 1;
        }

        .services-section-5 .icon-badge-mark {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .services-section-5 .card-title {
          position: relative;
          z-index: 1;
          margin-top: 72px;
          color: #fd9a00;
          text-transform: capitalize;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          line-height: 45px;
          letter-spacing: -2px;
        }

        .services-section-5 .card-description {
          position: relative;
          z-index: 1;
          margin-top: 4px;
          color: #000000;
          text-align: center;
          text-transform: capitalize;
          font-size: 12px;
          font-weight: 400;
          line-height: normal;
          max-width: 323px;
          margin-left: auto;
          margin-right: auto;
        }

        .services-section-5 .cta {
          position: relative;
          z-index: 1;
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #fd9a00;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 1.2px;
        }

        .services-section-5 .cta img {
          width: 16px;
          height: 16px;
          display: block;
        }

        .services-section-5 .cta-row {
          position: relative;
          z-index: 1;
          padding-bottom: 20px;
        }

        @media (max-width: 1200px) {
          .services-section-5 .title {
            font-size: 42px;
          }

          .services-section-5 .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .services-section-5 .cta-row {
            padding-bottom: 0;
          }

          .services-section-5 .cta {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 860px) {
          .services-section-5 .container {
            padding: 64px 16px 48px;
          }

          .services-section-5 .eyebrow {
            margin-bottom: 20px;
            font-size: 14px;
            letter-spacing: 3.8px;
          }

          .services-section-5 .title {
            font-size: 38px;
            line-height: 46px;
          }

          .services-section-5 .description {
            margin-top: 18px;
            font-size: 15px;
            line-height: 23px;
          }

          .services-section-5 .cards {
            margin-top: 42px;
            grid-template-columns: 1fr;
          }

          .services-section-5 .card {
            height: 430px;
          }

          .services-section-5 .card-body {
            margin-top: 185px;
            height: 245px;
          }

          .services-section-5 .card-title {
            margin-top: 66px;
          }

          .services-section-5 .cta-row {
            padding-bottom: 0;
          }

          .services-section-5 .cta {
            margin-bottom: 10px;
          }

        }
      `}</style>

      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>

        <div className="cards">
          {visibleCards.map((card) => (
            <article key={card.title} className="card">
              <div className="image-wrap">
                <img
                  className="card-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.imagePosition ?? "center center" }}
                />
              </div>

              <div className="card-body">
                <img className="panel-shape" src={ICON_BADGE} alt="" aria-hidden="true" />

                <div className="icon-badge" aria-hidden="true">
                  <img className="icon-badge-mark" src={card.icon} alt="" />
                </div>

                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>

                <div className="cta-row">
                  <div className="cta">
                    <span>{card.ctaText ?? "Explore"}</span>
                    <img src={ICON_ARROW} alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
