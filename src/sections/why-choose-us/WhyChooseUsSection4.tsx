import type { JSX } from "react";

type InfoCard = {
  title: string;
  description: string;
  icon: string;
};

export interface WhyChooseUsSection4Props {
  eyebrow?: string;
  title?: string;
  cards?: InfoCard[];
  description?: string;
  buttonText?: string;
  profileName?: string;
  profileRole?: string;
  experienceText?: string;
}

const COLLAGE_IMAGE = "https://www.figma.com/api/mcp/asset/493afb42-4e26-4d76-8950-99e08716cc3e";
const AVATAR_IMAGE = "https://www.figma.com/api/mcp/asset/95661560-654b-4fdc-81be-e2266d6cf328";
const SIGNATURE_IMAGE = "https://www.figma.com/api/mcp/asset/3d94b0c9-1139-4ff2-8571-8adf0ed8c720";
const SHIELD_ICON = "https://www.figma.com/api/mcp/asset/dba76d2f-43f0-4601-a812-e07d7be9a912";
const CARD_ICON_1 = "https://www.figma.com/api/mcp/asset/7b66b655-6f5a-47e6-963e-0c67206c7012";
const CARD_ICON_2 = "https://www.figma.com/api/mcp/asset/2c2b34fd-6378-4320-89af-09e6df2f7621";

const defaultEyebrow = "WELCOME TO OUR ROOFING SERVICE";
const defaultTitle = "A Trusted Home Builder In Toronto";
const defaultCards: InfoCard[] = [
  {
    title: "Over 15 Years Experience",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: CARD_ICON_1,
  },
  {
    title: "Over 15 Years Experience",
    description: "We start with transparency. Our online tool provides a realistic budget range instantly",
    icon: CARD_ICON_2,
  },
];
const defaultDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultButtonText = "Read More About Us";
const defaultProfileName = "William Sanders";
const defaultProfileRole = "Owner, Sanders Roofing";
const defaultExperienceText = "28 Years of Experience";

export default function WhyChooseUsSection4({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  cards = defaultCards,
  description = defaultDescription,
  buttonText = defaultButtonText,
  profileName = defaultProfileName,
  profileRole = defaultProfileRole,
  experienceText = defaultExperienceText,
}: WhyChooseUsSection4Props): JSX.Element {
  const visibleCards = cards.slice(0, 2);

  return (
    <section className="why-choose-us-section-4">
      <style>{`
        .why-choose-us-section-4 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .why-choose-us-section-4 {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .why-choose-us-section-4 .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 97px 14px 46px;
        }

        .why-choose-us-section-4 .layout {
          display: flex;
          gap: 53px;
          align-items: start;
        }

        .why-choose-us-section-4 .collage {
          width: 612px;
          height: 642px;
          position: relative;
        }

        .why-choose-us-section-4 .photo {
          background-image: url("${COLLAGE_IMAGE}");
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
        }

        .why-choose-us-section-4 .photo--left {
          left: 0;
          top: 89px;
          width: 306px;
          height: 553px;
          background-position: left bottom;
        }

        .why-choose-us-section-4 .photo--right {
          left: 321px;
          top: 0;
          width: 271px;
          height: 532px;
          background-position: right top;
        }

        .why-choose-us-section-4 .experience {
          position: absolute;
          left: 290px;
          top: 464px;
          width: 322px;
          height: 157px;
          background: #423d3d;
          color: #ffb717;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 32px 20px 26px 34px;
        }

        .why-choose-us-section-4 .experience img {
          width: 93px;
          height: 93px;
          flex-shrink: 0;
        }

        .why-choose-us-section-4 .experience-copy {
          min-width: 0;
          max-width: 150px;
        }

        .why-choose-us-section-4 .experience-value {
          font-family: "Syne", "Inter", sans-serif;
          font-size: 52.923px;
          font-weight: 700;
          line-height: 0.96;
          letter-spacing: -1.74px;
        }

        .why-choose-us-section-4 .experience-text {
          margin-top: 6px;
          font-family: "Syne", "Inter", sans-serif;
          font-size: 22.051px;
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.73px;
          white-space: normal;
        }

        .why-choose-us-section-4 .content {
          width: 546px;
        }

        .why-choose-us-section-4 .eyebrow {
          color: #fd9a00;
          font-size: 14px;
          font-weight: 700;
          line-height: 38px;
          text-transform: uppercase;
          margin-bottom: 0;
        }

        .why-choose-us-section-4 .title {
          color: #131212;
          width: 413px;
          font-size: 48px;
          line-height: 50px;
          letter-spacing: -2px;
          font-weight: 700;
          text-transform: capitalize;
          margin-top: 1px;
        }

        .why-choose-us-section-4 .feature-grid {
          margin-top: 23px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .why-choose-us-section-4 .feature-card {
          border: 0.35px solid #626262;
          border-radius: 10px;
          height: 89px;
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 11px 13px;
          background: #ffffff;
        }

        .why-choose-us-section-4 .feature-card-icon {
          width: 51.029px;
          height: 51.029px;
          display: block;
        }

        .why-choose-us-section-4 .feature-card-title {
          color: #2b2b2b;
          font-size: 15px;
          line-height: 20.143px;
          font-weight: 700;
          letter-spacing: -1.3429px;
          text-transform: capitalize;
        }

        .why-choose-us-section-4 .feature-card-description {
          margin-top: 2px;
          color: #2b2b2b;
          font-size: 10.743px;
          line-height: 12.086px;
          letter-spacing: -0.2417px;
        }

        .why-choose-us-section-4 .description {
          margin-top: 27px;
          color: #363636;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          white-space: pre-wrap;
        }

        .why-choose-us-section-4 .button {
          margin-top: 24px;
          width: 176px;
          height: 49px;
          border: none;
          border-radius: 4px;
          background: #ffb717;
          box-shadow: 0px 2.416px 0.805px 0.805px rgba(0, 0, 0, 0.16);
          color: #000000;
          font-family: "Arimo", "Inter", sans-serif;
          font-size: 12.564px;
          line-height: 16.752px;
          letter-spacing: -0.2577px;
          font-weight: 700;
          cursor: pointer;
        }

        .why-choose-us-section-4 .footer {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .why-choose-us-section-4 .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          display: block;
        }

        .why-choose-us-section-4 .person-name {
          color: #2b2b2b;
          font-size: 15px;
          line-height: 20.143px;
          font-weight: 700;
          letter-spacing: -1.3429px;
          text-transform: capitalize;
        }

        .why-choose-us-section-4 .person-role {
          margin-top: 3px;
          color: #2b2b2b;
          font-size: 10.743px;
          line-height: 12.086px;
          letter-spacing: -0.2417px;
        }

        .why-choose-us-section-4 .signature {
          width: 214.995px;
          height: 41px;
          object-fit: cover;
          display: block;
          margin-left: 2px;
        }

        @media (max-width: 1240px) {
          .why-choose-us-section-4 .container {
            padding: 64px 20px 40px;
          }

          .why-choose-us-section-4 .layout {
            flex-direction: column;
            gap: 30px;
          }

          .why-choose-us-section-4 .collage {
            max-width: 612px;
          }

          .why-choose-us-section-4 .content {
            width: 100%;
            max-width: 700px;
          }
        }

        @media (max-width: 860px) {
          .why-choose-us-section-4 .collage {
            width: 100%;
            height: 430px;
          }

          .why-choose-us-section-4 .photo--left {
            width: 52%;
            height: 390px;
            top: 40px;
          }

          .why-choose-us-section-4 .photo--right {
            left: auto;
            right: 0;
            width: 46%;
            height: 360px;
          }

          .why-choose-us-section-4 .experience {
            left: 43%;
            width: 57%;
            top: 285px;
            height: 145px;
            padding: 22px 14px;
          }

          .why-choose-us-section-4 .experience img {
            width: 66px;
            height: 66px;
          }

          .why-choose-us-section-4 .experience-copy {
            max-width: 128px;
          }

          .why-choose-us-section-4 .experience-value {
            font-size: 42px;
          }

          .why-choose-us-section-4 .experience-text {
            font-size: 18px;
          }
        
          .why-choose-us-section-4 .title {
            width: 100%;
            font-size: 36px;
            line-height: 39px;
          }

          .why-choose-us-section-4 .eyebrow {
            font-size: 12px;
            line-height: 24px;
          }

          .why-choose-us-section-4 .feature-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .why-choose-us-section-4 .description {
            margin-top: 20px;
            font-size: 15px;
            line-height: 18px;
          }

          .why-choose-us-section-4 .signature {
            width: 180px;
            height: 34px;
          }
        }

        @media (max-width: 560px) {
          .why-choose-us-section-4 .container {
            padding: 44px 14px 32px;
          }

          .why-choose-us-section-4 .collage {
            height: 360px;
          }

          .why-choose-us-section-4 .photo--left {
            top: 40px;
            height: 320px;
          }

          .why-choose-us-section-4 .photo--right {
            height: 286px;
          }

          .why-choose-us-section-4 .experience {
            top: 250px;
            height: 110px;
            gap: 10px;
            padding: 12px 10px;
          }

          .why-choose-us-section-4 .experience img {
            width: 48px;
            height: 48px;
          }

          .why-choose-us-section-4 .experience-copy {
            max-width: 98px;
          }

          .why-choose-us-section-4 .experience-value {
            font-size: 30px;
          }

          .why-choose-us-section-4 .experience-text {
            margin-top: 4px;
            font-size: 13px;
          }

          .why-choose-us-section-4 .title {
            font-size: 30px;
            line-height: 33px;
            letter-spacing: -1.2px;
          }

          .why-choose-us-section-4 .feature-card {
            height: auto;
            min-height: 82px;
          }

          .why-choose-us-section-4 .footer {
            gap: 10px;
            flex-wrap: wrap;
          }

          .why-choose-us-section-4 .signature {
            width: 140px;
            height: 26px;
            margin-left: 64px;
          }
        }
      `}</style>

      <div className="container">
        <div className="layout">
          <div className="collage">
            <div className="photo photo--left" />
            <div className="photo photo--right" />

            <div className="experience">
              <img src={SHIELD_ICON} alt="" aria-hidden="true" />
              <div className="experience-copy">
                <p className="experience-value">28</p>
                <p className="experience-text">{experienceText}</p>
              </div>
            </div>
          </div>

          <div className="content">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="title">{title}</h2>

            <div className="feature-grid">
              {visibleCards.map((card, index) => (
                <article key={`${card.title}-${index}`} className="feature-card">
                  <img className="feature-card-icon" src={card.icon} alt="" aria-hidden="true" />
                  <div>
                    <h3 className="feature-card-title">{card.title}</h3>
                    <p className="feature-card-description">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="description">{description}</p>
            <button className="button" type="button">
              {buttonText}
            </button>

            <div className="footer">
              <img className="avatar" src={AVATAR_IMAGE} alt={profileName} />
              <div>
                <p className="person-name">{profileName}</p>
                <p className="person-role">{profileRole}</p>
              </div>
              <img className="signature" src={SIGNATURE_IMAGE} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
