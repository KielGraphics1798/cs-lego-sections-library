import type { JSX } from "react";

export interface AboutSection4Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const GALLERY_IMAGE_1 =
  "https://www.figma.com/api/mcp/asset/5b563956-4bf8-45a3-8ace-57e7d368cb99";
const GALLERY_IMAGE_2 =
  "https://www.figma.com/api/mcp/asset/87e7773e-6531-4d03-995c-1b8213bcb47d";
const GALLERY_IMAGE_3 =
  "https://www.figma.com/api/mcp/asset/4bcb1d95-0f7b-4d1d-b2d9-e3e4ed8492e1";
const GALLERY_IMAGE_4 =
  "https://www.figma.com/api/mcp/asset/e100b090-4cc9-4a24-84e4-66bef12af5e1";

const defaultSubtitle = "About Us";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultCtaText = "Read More About Us";

export default function AboutSection4({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
}: AboutSection4Props): JSX.Element {
  return (
    <section className="about-section-4">
      <style>{`
        .about-section-4 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-section-4 {
          font-family: "Inter", sans-serif;
          background-color: #ffffff;
          color: #363636;
          overflow-x: hidden;
        }

        .about-section-4 .container {
          position: relative;
          width: 100%;
          min-height: 730px;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-section-4 .bg-accent {
          position: absolute;
          right: 0;
          top: 0;
          width: 35%;
          height: 730px;
          background-color: #f2f2f2;
          z-index: 0;
        }

        .about-section-4 .about-section {
          position: relative;
          display: flex;
          gap: 60px;
          padding: 119px 0;
          z-index: 1;
        }

        .about-section-4 .content-wrapper {
          flex: 1;
          max-width: 550px;
        }

        .about-section-4 .label {
          font-weight: 700;
          font-size: 16px;
          line-height: 38px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #fd9a00;
          margin-bottom: 24px;
        }

        .about-section-4 .main-title {
          font-weight: 700;
          font-size: 48px;
          line-height: 45px;
          letter-spacing: -2px;
          color: #131212;
          text-transform: capitalize;
          margin-bottom: 40px;
          max-width: 413px;
        }

        .about-section-4 .description {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          color: #363636;
          margin-bottom: 48px;
          max-width: 518px;
        }

        .about-section-4 .stats-container {
          display: flex;
          gap: 40px;
          margin-bottom: 32px;
          flex-wrap: nowrap;
          justify-content: flex-start;
        }

        .about-section-4 .stat-item {
          text-align: center;
          flex: 1;
          min-width: 120px;
        }

        .about-section-4 .stat-number {
          font-weight: 600;
          font-size: 38.468px;
          line-height: normal;
          color: #fd9a00;
          margin-bottom: 8px;
        }

        .about-section-4 .stat-label {
          font-weight: 400;
          font-size: 12.823px;
          line-height: 20.035px;
          color: #212121;
        }

        .about-section-4 .gallery-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
        }

        .about-section-4 .gallery-wrapper {
          position: relative;
          width: 100%;
        }

        .about-section-4 .gallery-grid {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 515px;
        }

        .about-section-4 .gallery-item {
          position: absolute;
          overflow: hidden;
          border-radius: 4px;
        }

        .about-section-4 .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-section-4 .gallery-item-1 {
          top: 38px;
          left: 0;
          width: 182px;
          height: 182px;
        }

        .about-section-4 .gallery-item-2 {
          top: 0;
          left: 208px;
          width: 391px;
          height: 221px;
        }

        .about-section-4 .gallery-item-3 {
          top: 241px;
          left: 0;
          width: 287px;
          height: 192px;
        }

        .about-section-4 .gallery-item-4 {
          top: 241px;
          left: 313px;
          width: 183px;
          height: 273px;
        }

        .about-section-4 .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffb717;
          color: #000000;
          font-family: "Arimo", sans-serif;
          font-weight: 700;
          font-size: 12.564px;
          line-height: 16.752px;
          letter-spacing: -0.2577px;
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 4px;
          box-shadow: 0px 2.416px 0.805px 0.805px rgba(0, 0, 0, 0.16);
          transition: background-color 0.3s ease;
          width: 176px;
          height: 49px;
          border: none;
          cursor: pointer;
        }

        .about-section-4 .cta-button:hover {
          background-color: #e6a615;
        }

        .about-section-4 .gallery-section .cta-button {
          display: none;
        }

        .about-section-4 .content-wrapper .cta-button {
          display: inline-flex;
        }

        @media (max-width: 1200px) {
          .about-section-4 .about-section {
            gap: 40px;
          }

          .about-section-4 .main-title {
            font-size: 40px;
            line-height: 38px;
          }

          .about-section-4 .gallery-grid {
            max-width: 500px;
            height: 430px;
          }

          .about-section-4 .gallery-item-1 {
            width: 152px;
            height: 152px;
          }

          .about-section-4 .gallery-item-2 {
            left: 174px;
            width: 326px;
            height: 184px;
          }

          .about-section-4 .gallery-item-3 {
            top: 201px;
            width: 240px;
            height: 160px;
          }

          .about-section-4 .gallery-item-4 {
            top: 201px;
            left: 261px;
            width: 152px;
            height: 228px;
          }

          .about-section-4 .stats-container {
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .about-section-4 .about-section {
            flex-direction: column;
            padding: 60px 0;
            align-items: center;
          }

          .about-section-4 .bg-accent {
            width: 100%;
            height: 500px;
            top: 0;
            bottom: auto;
            left: 0;
            right: 0;
          }

          .about-section-4 .content-wrapper {
            max-width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .about-section-4 .main-title {
            max-width: 100%;
          }

          .about-section-4 .description {
            max-width: 100%;
          }

          .about-section-4 .stats-container {
            justify-content: center;
            width: 100%;
          }

          .about-section-4 .gallery-section {
            order: -1;
            align-items: center;
            width: 100%;
          }

          .about-section-4 .gallery-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .about-section-4 .gallery-grid {
            max-width: 100%;
            height: 380px;
          }

          .about-section-4 .content-wrapper .cta-button {
            display: none;
          }

          .about-section-4 .gallery-section .cta-button {
            display: inline-flex;
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .about-section-4 .bg-accent {
            height: 420px;
          }

          .about-section-4 .about-section {
            padding: 40px 0;
          }

          .about-section-4 .gallery-section .cta-button {
            display: none;
          }

          .about-section-4 .content-wrapper .cta-button {
            display: inline-flex;
          }

          .about-section-4 .label {
            font-size: 14px;
            letter-spacing: 3px;
            margin-bottom: 16px;
          }

          .about-section-4 .main-title {
            font-size: 32px;
            line-height: 30px;
            margin-bottom: 24px;
          }

          .about-section-4 .description {
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 32px;
          }

          .about-section-4 .stats-container {
            gap: 20px;
            margin-bottom: 28px;
          }

          .about-section-4 .stat-item {
            min-width: 100px;
          }

          .about-section-4 .stat-number {
            font-size: 28px;
          }

          .about-section-4 .stat-label {
            font-size: 10px;
            line-height: 14px;
          }

          .about-section-4 .gallery-grid {
            height: 320px;
          }

          .about-section-4 .gallery-item-1 {
            width: 128px;
            height: 128px;
            top: 32px;
          }

          .about-section-4 .gallery-item-2 {
            left: 146px;
            width: 274px;
            height: 155px;
          }

          .about-section-4 .gallery-item-3 {
            top: 169px;
            width: 202px;
            height: 135px;
          }

          .about-section-4 .gallery-item-4 {
            top: 169px;
            left: 220px;
            width: 128px;
            height: 192px;
          }
        }

        @media (max-width: 576px) {
          .about-section-4 .bg-accent {
            height: 360px;
          }

          .about-section-4 .main-title {
            font-size: 28px;
            line-height: 26px;
          }

          .about-section-4 .stats-container {
            gap: 15px;
          }

          .about-section-4 .stat-item {
            min-width: 90px;
          }

          .about-section-4 .stat-number {
            font-size: 24px;
          }

          .about-section-4 .stat-label {
            font-size: 9px;
            line-height: 13px;
          }

          .about-section-4 .cta-button {
            width: 100%;
            max-width: 250px;
          }

          .about-section-4 .gallery-grid {
            height: 280px;
          }

          .about-section-4 .gallery-item-1 {
            width: 100px;
            height: 100px;
            top: 25px;
          }

          .about-section-4 .gallery-item-2 {
            left: 114px;
            width: 214px;
            height: 121px;
          }

          .about-section-4 .gallery-item-3 {
            top: 132px;
            width: 158px;
            height: 106px;
          }

          .about-section-4 .gallery-item-4 {
            top: 132px;
            left: 172px;
            width: 100px;
            height: 150px;
          }
        }
      `}</style>
      <div className="container">
        <div className="bg-accent" />

        <section className="about-section">
          <div className="content-wrapper">
            <div className="label">{subtitle}</div>
            <h1 className="main-title">{title}</h1>
            <p className="description">
              {description.split("\n\n").map((paragraph, index) => (
                <span key={`${paragraph}-${index}`}>
                  {paragraph}
                  {index < description.split("\n\n").length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">28+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">894+</div>
                <div className="stat-label">Project Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">42+</div>
                <div className="stat-label">Best Partners</div>
              </div>
            </div>

            <button className="cta-button" type="button">
              {ctaText}
            </button>
          </div>

          <div className="gallery-section">
            <div className="gallery-wrapper">
              <div className="gallery-grid">
                <div className="gallery-item gallery-item-1">
                  <img src={GALLERY_IMAGE_1} alt="Interior design 1" />
                </div>
                <div className="gallery-item gallery-item-2">
                  <img src={GALLERY_IMAGE_2} alt="Interior design 2" />
                </div>
                <div className="gallery-item gallery-item-3">
                  <img src={GALLERY_IMAGE_3} alt="Interior design 3" />
                </div>
                <div className="gallery-item gallery-item-4">
                  <img src={GALLERY_IMAGE_4} alt="Interior design 4" />
                </div>
              </div>
            </div>
            <button className="cta-button" type="button">
              {ctaText}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
