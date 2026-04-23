import type { JSX } from "react";

type GuaranteeItem = {
  text: string;
};

export interface GuaranteeSection1Props {
  title?: string;
  description?: string;
  guarantees?: GuaranteeItem[];
  ctaText?: string;
  badgeImage?: string;
}

const CHECK_ICON = "https://www.figma.com/api/mcp/asset/70828df8-d525-47b1-a428-5778fad2617a";
const LOCAL_BADGE_IMAGE = "/src/assets/images/image%205%20%282%29.png";

const defaultGuarantees: GuaranteeItem[] = [
  { text: "Fixed Price Contracts" },
  { text: "Guaranteed Timelines" },
  { text: "2-Year Workmanship Warranty" },
];

export default function GuaranteeSection1({
  title = "Architectural Precision In Every Detail.",
  description = "Starting a major renovation or custom build involves significant financial commitment. You need confidence that your builder respects your vision and budget. We established the Altevita Certainty Promise to replace construction stress with security. As a luxury home builder in Toronto, we deliver results you rely on.",
  guarantees = defaultGuarantees,
  ctaText = "Learn More About Guarantee",
  badgeImage = LOCAL_BADGE_IMAGE,
}: GuaranteeSection1Props): JSX.Element {
  return (
    <section className="guarantee-section-1">
      <style>{`
        .guarantee-section-1 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .guarantee-section-1 {
          width: 100%;
          background: #f5f5f4;
          border-top: 0.889px solid #f5f5f4;
          font-family: "Inter", sans-serif;
        }

        .guarantee-section-1 .container {
          max-width: 1174px;
          margin: 0 auto;
          min-height: 560px;
          padding: 82px 20px;
          display: grid;
          grid-template-columns: minmax(0, 565px) minmax(0, 390px);
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .guarantee-section-1 .content {
          max-width: 565px;
        }

        .guarantee-section-1 .title {
          color: #131212;
          font-size: 60px;
          line-height: 45px;
          letter-spacing: -2px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .guarantee-section-1 .description {
          margin-top: 28px;
          color: #363636;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          font-weight: 400;
        }

        .guarantee-section-1 .list {
          margin-top: 20px;
          list-style: none;
          display: grid;
          gap: 20px;
        }

        .guarantee-section-1 .item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .guarantee-section-1 .item-icon-wrap {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e7e5e4;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .guarantee-section-1 .item-icon {
          width: 12px;
          height: 12px;
          display: block;
        }

        .guarantee-section-1 .item-text {
          color: #44403c;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
        }

        .guarantee-section-1 .cta {
          margin-top: 20px;
          width: 221px;
          min-height: 37px;
          border: none;
          border-radius: 4px;
          background: #ffb717;
          box-shadow: 0 2.416px 0.805px 0.805px rgba(0, 0, 0, 0.16);
          color: #000000;
          font-family: "Arimo", "Inter", sans-serif;
          font-size: 12.564px;
          line-height: 16.752px;
          letter-spacing: -0.2577px;
          font-weight: 700;
          cursor: pointer;
          transition: filter 0.2s ease;
        }

        .guarantee-section-1 .cta:hover {
          filter: brightness(0.96);
        }

        .guarantee-section-1 .badge-wrap {
          width: 390px;
          max-width: 100%;
          justify-self: end;
        }

        .guarantee-section-1 .badge {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        @media (max-width: 1120px) {
          .guarantee-section-1 .container {
            grid-template-columns: 1fr 340px;
            gap: 28px;
            padding: 66px 20px;
          }

          .guarantee-section-1 .title {
            font-size: 48px;
            line-height: 1.04;
            letter-spacing: -1.2px;
          }
        }

        @media (max-width: 860px) {
          .guarantee-section-1 .container {
            grid-template-columns: 1fr;
            gap: 30px;
            min-height: 0;
            padding: 48px 14px 56px;
          }

          .guarantee-section-1 .content {
            max-width: none;
          }

          .guarantee-section-1 .title {
            font-size: 38px;
            line-height: 1.06;
            letter-spacing: -0.8px;
          }

          .guarantee-section-1 .description {
            margin-top: 16px;
            font-size: 15px;
            line-height: 1.35;
            letter-spacing: -0.2px;
          }

          .guarantee-section-1 .list {
            margin-top: 16px;
            gap: 14px;
          }

          .guarantee-section-1 .badge-wrap {
            width: min(390px, 100%);
            justify-self: center;
          }
        }

        @media (max-width: 560px) {
          .guarantee-section-1 .title {
            font-size: 32px;
          }

          .guarantee-section-1 .cta {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <div className="container">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>

          <ul className="list">
            {guarantees.map((item, index) => (
              <li className="item" key={`${item.text}-${index}`}>
                <span className="item-icon-wrap">
                  <img className="item-icon" src={CHECK_ICON} alt="" aria-hidden="true" />
                </span>
                <span className="item-text">{item.text}</span>
              </li>
            ))}
          </ul>

          <button className="cta" type="button">
            {ctaText}
          </button>
        </div>

        <div className="badge-wrap">
          <img className="badge" src={badgeImage} alt="Altevita Certainty Promise badge" />
        </div>
      </div>
    </section>
  );
}
