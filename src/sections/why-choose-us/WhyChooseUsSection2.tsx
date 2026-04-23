import type { JSX } from "react";

type WhyChooseUsItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconStyle?: "image" | "outlined";
};

export interface WhyChooseUsSection2Props {
  title?: string;
  description?: string;
  items?: WhyChooseUsItem[];
}

const ICON_1 = "https://www.figma.com/api/mcp/asset/1912a6f9-04b7-433c-9326-17d271d07f3c";
const ICON_2 = "https://www.figma.com/api/mcp/asset/169c794f-be80-4c3e-8e5e-2f6c0e824e78";
const ICON_3 = "https://www.figma.com/api/mcp/asset/1138d023-45e8-41f5-961d-d056611123fc";

const defaultTitle = "WHY CHOOSE US";
const defaultDescription =
  "Founded by Kevin Smith back in 2000, Renovate has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building.";
const defaultItems: WhyChooseUsItem[] = [
  {
    title: "OVER 15 YEARS EXPERIENCE",
    description: "Morbi nulla tortor, dignissim est node cursus euismod est arcu. Nomad at vehicula novum justo magna.",
    icon: ICON_1,
    iconAlt: "Experience icon",
    iconStyle: "image",
  },
  {
    title: "BEST MATERIALS",
    description: "Morbi nulla tortor, dignissim est node cursus euismod est arcu. Nomad at vehicula novum justo magna.",
    icon: ICON_2,
    iconAlt: "Materials icon",
    iconStyle: "image",
  },
  {
    title: "PROFESSIONAL STANDARDS",
    description: "Morbi nulla tortor, dignissim est node cursus euismod est arcu. Nomad at vehicula novum justo magna.",
    icon: ICON_3,
    iconAlt: "Professional standards icon",
    iconStyle: "outlined",
  },
];

export default function WhyChooseUsSection2({
  title = defaultTitle,
  description = defaultDescription,
  items = defaultItems,
}: WhyChooseUsSection2Props): JSX.Element {
  return (
    <section className="why-choose-us-section-2">
      <style>{`
        .why-choose-us-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .why-choose-us-section-2 {
          width: 100%;
          background: #ffffff;
          font-family: "Raleway", "Inter", sans-serif;
        }

        .why-choose-us-section-2 .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 83px 24px 56px;
        }

        .why-choose-us-section-2 .header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .why-choose-us-section-2 .title {
          color: #000000;
          font-weight: 600;
          font-size: 29px;
          line-height: 40px;
          letter-spacing: 1px;
        }

        .why-choose-us-section-2 .main-divider {
          width: 80px;
          height: 2px;
          margin: 20px auto 36px;
          background: #f4bc16;
        }

        .why-choose-us-section-2 .description {
          max-width: 796.29px;
          margin: 0 auto;
          color: #444444;
          font-size: 16px;
          line-height: 26px;
          text-align: center;
        }

        .why-choose-us-section-2 .cards {
          margin-top: 92px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 40px;
        }

        .why-choose-us-section-2 .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 340.6px;
        }

        .why-choose-us-section-2 .icon-wrap {
          width: 139.6px;
          height: 139.6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .why-choose-us-section-2 .icon-wrap--image img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .why-choose-us-section-2 .icon-wrap--outlined {
          border: 1px solid #e2e6e7;
          border-radius: 69.8px;
        }

        .why-choose-us-section-2 .icon-wrap--outlined img {
          width: 68px;
          height: 68px;
          display: block;
        }

        .why-choose-us-section-2 .connector {
          position: relative;
          width: 1px;
          height: 20px;
          background: #e2e6e7;
          margin: 0 auto 35px;
        }

        .why-choose-us-section-2 .connector::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -13px;
          transform: translateX(-50%);
          width: 12.6px;
          height: 12.6px;
          border: 1px solid #e2e6e7;
          border-radius: 6.3px;
          background: #ffffff;
        }

        .why-choose-us-section-2 .card-title {
          color: #000000;
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .why-choose-us-section-2 .card-divider {
          width: 40px;
          height: 2px;
          margin: 16px auto 20px;
          background: #f4bc16;
        }

        .why-choose-us-section-2 .card-description {
          max-width: 287.59px;
          color: #444444;
          font-size: 14px;
          line-height: 24px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .why-choose-us-section-2 .container {
            padding: 72px 20px 56px;
          }

          .why-choose-us-section-2 .cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 36px 24px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-us-section-2 .container {
            padding: 56px 16px 48px;
          }

          .why-choose-us-section-2 .title {
            font-size: 25px;
            line-height: 34px;
          }

          .why-choose-us-section-2 .main-divider {
            margin: 16px auto 24px;
          }

          .why-choose-us-section-2 .description {
            font-size: 15px;
            line-height: 24px;
          }

          .why-choose-us-section-2 .cards {
            margin-top: 56px;
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .why-choose-us-section-2 .card {
            min-height: unset;
          }
        }
      `}</style>

      <div className="container">
        <header className="header">
          <h2 className="title">{title}</h2>
          <div className="main-divider" />
          <p className="description">{description}</p>
        </header>

        <div className="cards">
          {items.map((item) => (
            <article className="card" key={item.title}>
              <div className={`icon-wrap ${item.iconStyle === "outlined" ? "icon-wrap--outlined" : "icon-wrap--image"}`}>
                <img src={item.icon} alt={item.iconAlt} />
              </div>
              <div className="connector" />
              <h3 className="card-title">{item.title}</h3>
              <div className="card-divider" />
              <p className="card-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
