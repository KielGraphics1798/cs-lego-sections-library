import type { JSX } from "react";

type WhyChooseCard = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconWrapper?: "image" | "border";
};

export interface WhyChooseUsSection1Props {
  title?: string;
  description?: string;
  cards?: WhyChooseCard[];
}

const ICON_1 = "https://www.figma.com/api/mcp/asset/4be55e8b-49d9-4d15-ac45-69e4a13a2194";
const ICON_2 = "https://www.figma.com/api/mcp/asset/8c8a8790-9883-48a5-a303-3b0c5df698c1";
const ICON_3 = "https://www.figma.com/api/mcp/asset/15628d60-2af7-4bcd-8462-7c3aa0b8c0c8";

const defaultTitle = "Why Homeownwers Choose Us";
const defaultDescription =
  "Founded by Kevin Smith back in 2000, Renovate has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.";
const defaultCards: WhyChooseCard[] = [
  {
    title: "Over 15 Years Experience",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: ICON_1,
    iconAlt: "Years experience icon",
    iconWrapper: "image",
  },
  {
    title: "Quality Craftsmanship",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: ICON_2,
    iconAlt: "Craftsmanship icon",
    iconWrapper: "image",
  },
  {
    title: "Professional Standards",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: ICON_3,
    iconAlt: "Professional standards icon",
    iconWrapper: "border",
  },
];

export default function WhyChooseUsSection1({
  title = defaultTitle,
  description = defaultDescription,
  cards = defaultCards,
}: WhyChooseUsSection1Props): JSX.Element {
  return (
    <section className="why-choose-us-section-1">
      <style>{`
        .why-choose-us-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .why-choose-us-section-1 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .why-choose-us-section-1 .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 88px 24px 96px;
        }

        .why-choose-us-section-1 .header {
          max-width: 848px;
          margin: 0 auto;
          text-align: center;
        }

        .why-choose-us-section-1 .title {
          margin: 0 auto;
          max-width: 507px;
          color: #000000;
          font-weight: 700;
          font-size: 48px;
          line-height: 54px;
          letter-spacing: -2px;
          text-transform: capitalize;
        }

        .why-choose-us-section-1 .divider {
          width: 80px;
          height: 2px;
          margin: 20px auto 34px;
          background-color: #f4bc16;
        }

        .why-choose-us-section-1 .description {
          color: #444444;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.16px;
          text-align: center;
        }

        .why-choose-us-section-1 .cards {
          margin-top: 136px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 56px 20px;
        }

        .why-choose-us-section-1 .card {
          display: flex;
          align-items: center;
          gap: 24px;
          min-height: 153px;
          border: 0.35px solid #626262;
          border-radius: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
          padding: 14px;
          background: transparent;
        }

        .why-choose-us-section-1 .icon-wrap {
          width: 109.692px;
          height: 109.692px;
          flex: 0 0 109.692px;
          position: relative;
        }

        .why-choose-us-section-1 .icon-wrap--image img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .why-choose-us-section-1 .icon-wrap--outlined {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .why-choose-us-section-1 .icon-wrap--outlined svg {
          display: block;
          border: none !important;
          outline: none !important;
          background: transparent !important;
        }

        .why-choose-us-section-1 .icon-wrap--outlined img {
          width: 53.432px;
          height: 53.432px;
          display: block;
        }

        .why-choose-us-section-1 .card-title {
          color: #2b2b2b;
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
          letter-spacing: -2px;
          text-transform: capitalize;
          margin-bottom: 19px;
        }

        .why-choose-us-section-1 .card-description {
          color: #2b2b2b;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          max-width: 216px;
        }

        @media (max-width: 1024px) {
          .why-choose-us-section-1 .container {
            padding: 72px 20px 80px;
          }

          .why-choose-us-section-1 .title {
            font-size: 42px;
            line-height: 48px;
          }

          .why-choose-us-section-1 .cards {
            margin-top: 90px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 44px 22px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-us-section-1 .container {
            padding: 56px 16px 64px;
          }

          .why-choose-us-section-1 .title {
            font-size: 34px;
            line-height: 38px;
            letter-spacing: -1.4px;
          }

          .why-choose-us-section-1 .divider {
            margin: 16px auto 24px;
          }

          .why-choose-us-section-1 .description {
            font-size: 15px;
            line-height: 24px;
          }

          .why-choose-us-section-1 .cards {
            margin-top: 56px;
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .why-choose-us-section-1 .card {
            justify-content: flex-start;
          }

          .why-choose-us-section-1 .card-title {
            font-size: 22px;
            line-height: 28px;
            margin-bottom: 12px;
          }
        }
      `}</style>

      <div className="container">
        <header className="header">
          <h2 className="title">{title}</h2>
          <div className="divider" />
          <p className="description">{description}</p>
        </header>

        <div className="cards">
          {cards.map((card, index) => (
            <article className="card" key={card.title}>
              <div className={`icon-wrap ${card.iconWrapper === "border" || index === 2 ? "icon-wrap--outlined" : "icon-wrap--image"}`}>
                {card.iconWrapper === "border" || index === 2 ? (
                  <svg aria-hidden="true" viewBox="0 0 54 54" width="53.432" height="53.432">
                    <path
                      d="M27 3L43 9V22C43 33.5 35.7 43.6 27 48C18.3 43.6 11 33.5 11 22V9L27 3Z"
                      fill="none"
                      stroke="#FFB717"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 27.5L24.5 32.2L34.5 22"
                      fill="none"
                      stroke="#FFB717"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <img alt={card.iconAlt} src={card.icon} />
                )}
              </div>
              <div>
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
