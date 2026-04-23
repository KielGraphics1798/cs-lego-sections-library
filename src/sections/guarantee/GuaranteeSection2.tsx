import type { JSX } from "react";

export interface GuaranteeSection2Props {
  title?: string;
  description?: string;
  ctaText?: string;
  badgeImage?: string;
}

const LOCAL_BADGE_IMAGE = "/src/assets/images/image%205%20%282%29.png";

export default function GuaranteeSection2({
  title = "The Altevita Certainty Promise",
  description = "Starting a major renovation or custom build involves significant financial commitment. We establish the Altevita Certainty Promise to replace construction stress with security.",
  ctaText = "Learn More About Guarantee",
  badgeImage = LOCAL_BADGE_IMAGE,
}: GuaranteeSection2Props): JSX.Element {
  return (
    <section className="guarantee-section-2">
      <style>{`
        .guarantee-section-2 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .guarantee-section-2 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          padding: 84px 20px;
        }

        .guarantee-section-2 .panel {
          max-width: 1232px;
          margin: 0 auto;
          background: #fafaf9;
          min-height: 476px;
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 378.864px;
          align-items: center;
          justify-content: space-between;
          padding: 45px 96px 45px 115px;
          gap: 36px;
        }

        .guarantee-section-2 .panel::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 4px;
          background: rgba(208, 135, 0, 0.4);
        }

        .guarantee-section-2 .content {
          max-width: 374px;
          z-index: 1;
        }

        .guarantee-section-2 .title {
          color: #1c1917;
          font-size: 57px;
          line-height: 1.1;
          letter-spacing: -0.72px;
          font-weight: 700;
        }

        .guarantee-section-2 .description {
          margin-top: 16px;
          color: #57534e;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.16px;
          font-weight: 300;
        }

        .guarantee-section-2 .cta {
          margin-top: 24px;
          width: 221px;
          min-height: 47px;
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

        .guarantee-section-2 .cta:hover {
          filter: brightness(0.96);
        }

        .guarantee-section-2 .badge-wrap {
          width: 378.864px;
          max-width: 100%;
          justify-self: end;
        }

        .guarantee-section-2 .badge {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        @media (max-width: 1180px) {
          .guarantee-section-2 .panel {
            padding: 45px 46px;
            grid-template-columns: minmax(0, 1fr) 340px;
            gap: 24px;
          }

          .guarantee-section-2 .title {
            font-size: 48px;
          }
        }

        @media (max-width: 900px) {
          .guarantee-section-2 {
            padding: 56px 14px;
          }

          .guarantee-section-2 .panel {
            min-height: 0;
            padding: 40px 18px 46px;
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .guarantee-section-2 .content {
            max-width: none;
          }

          .guarantee-section-2 .title {
            font-size: 40px;
            line-height: 1.06;
          }

          .guarantee-section-2 .description {
            margin-top: 12px;
            font-size: 15px;
            line-height: 1.45;
          }

          .guarantee-section-2 .badge-wrap {
            justify-self: center;
            width: min(360px, 100%);
          }
        }

        @media (max-width: 560px) {
          .guarantee-section-2 .title {
            font-size: 34px;
          }

          .guarantee-section-2 .cta {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="panel">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
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
