import type { JSX } from "react";

export interface AboutSection5Props {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  image?: string;
}

const DEFAULT_IMAGE_1 =
  "https://www.figma.com/api/mcp/asset/4bcb1d95-0f7b-4d1d-b2d9-e3e4ed8492e1";
const DEFAULT_IMAGE_2 =
  "https://www.figma.com/api/mcp/asset/e100b090-4cc9-4a24-84e4-66bef12af5e1";

const defaultSubtitle = "About Us";
const defaultTitle = "A Trusted Home Builder in Toronto";
const defaultDescription =
  "When you work with us, you are not just hiring a luxury home builder in Toronto; you are gaining a partner who understands custom residential building from the first sketch to the final coat of paint.\n\nWe bridge the gap that other companies create. As a unified design build firm in Toronto, we ensure that your aesthetic vision is technically feasible and financially realistic from day one. You get premium craftsmanship without the friction of managing separate teams.";
const defaultCtaText = "Read More About Us";

export default function AboutSection5({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaText = defaultCtaText,
}: AboutSection5Props): JSX.Element {
  return (
    <section className="about-section-5">
      <style>{`
        .about-section-5 * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-section-5 {
          font-family: "Inter", sans-serif;
          background-color: #ffffff;
          color: #363636;
          overflow-x: hidden;
        }

        .about-section-5 .about-container {
          position: relative;
          width: 100%;
          min-height: 730px;
          max-width: 1440px;
          margin: 0 auto;
          overflow: hidden;
        }

        .about-section-5 .dark-overlay {
          position: absolute;
          left: 0;
          top: 0;
          width: 47%;
          height: 100%;
          background-color: rgba(6, 6, 6, 0.89);
          z-index: 0;
        }

        .about-section-5 .about-content {
          position: relative;
          display: flex;
          gap: 60px;
          padding: 87px 120px;
          z-index: 1;
        }

        .about-section-5 .image-gallery {
          position: relative;
          flex: 0 0 630px;
          height: 642px;
        }

        .about-section-5 .gallery-image {
          position: absolute;
          overflow: hidden;
        }

        .about-section-5 .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-section-5 .image-border {
          position: absolute;
          inset: 0;
          border: 2px solid #ffb717;
          pointer-events: none;
        }

        .about-section-5 .image-1 {
          top: 0;
          left: 0;
          width: 309px;
          height: 495px;
        }

        .about-section-5 .image-2 {
          top: 60px;
          left: 321px;
          width: 309px;
          height: 495px;
        }

        .about-section-5 .experience-badge {
          position: absolute;
          top: 70px;
          left: 213px;
          background-color: #000000;
          padding: 30px 25px;
          width: 215px;
          text-align: center;
          z-index: 2;
        }

        .about-section-5 .badge-number {
          font-family: "Syne", sans-serif;
          font-weight: 700;
          font-size: 73.886px;
          line-height: 24.629px;
          color: #ffb717;
          margin-bottom: 10px;
        }

        .about-section-5 .badge-text {
          font-family: "Syne", sans-serif;
          font-weight: 700;
          font-size: 30.786px;
          line-height: 24.629px;
          color: #ffb717;
        }

        .about-section-5 .content-section {
          flex: 1;
          max-width: 550px;
          padding-top: 20px;
        }

        .about-section-5 .label {
          font-weight: 700;
          font-size: 16px;
          line-height: 38px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #fd9a00;
          margin-bottom: 24px;
        }

        .about-section-5 .main-title {
          font-weight: 700;
          font-size: 48px;
          line-height: 45px;
          letter-spacing: -2px;
          color: #131212;
          text-transform: capitalize;
          margin-bottom: 40px;
          max-width: 413px;
        }

        .about-section-5 .description {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.36px;
          color: #363636;
          margin-bottom: 48px;
          max-width: 518px;
        }

        .about-section-5 .stats-container {
          display: flex;
          gap: 40px;
          margin-bottom: 32px;
          flex-wrap: nowrap;
        }

        .about-section-5 .stat-item {
          text-align: center;
          flex: 1;
          min-width: 120px;
        }

        .about-section-5 .stat-number {
          font-weight: 600;
          font-size: 38.468px;
          line-height: normal;
          color: #fd9a00;
          margin-bottom: 8px;
        }

        .about-section-5 .stat-label {
          font-weight: 400;
          font-size: 12.823px;
          line-height: 20.035px;
          color: #212121;
        }

        .about-section-5 .cta-button {
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

        .about-section-5 .cta-button:hover {
          background-color: #e6a615;
        }

        @media (max-width: 1200px) {
          .about-section-5 .about-content {
            padding: 60px 40px;
          }

          .about-section-5 .image-gallery {
            flex: 0 0 500px;
            height: 520px;
          }

          .about-section-5 .image-1,
          .about-section-5 .image-2 {
            width: 250px;
            height: 400px;
          }

          .about-section-5 .image-2 {
            left: 250px;
          }

          .about-section-5 .experience-badge {
            left: 160px;
            width: 180px;
            padding: 25px 20px;
          }

          .about-section-5 .badge-number {
            font-size: 60px;
          }

          .about-section-5 .badge-text {
            font-size: 25px;
          }

          .about-section-5 .main-title {
            font-size: 40px;
            line-height: 38px;
          }
        }

        @media (max-width: 992px) {
          .about-section-5 .dark-overlay {
            width: 100%;
            height: 50%;
          }

          .about-section-5 .about-content {
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
          }

          .about-section-5 .image-gallery {
            flex: none;
            width: 100%;
            max-width: 500px;
            height: 520px;
          }

          .about-section-5 .content-section {
            max-width: 100%;
            text-align: center;
            padding-top: 0;
          }

          .about-section-5 .stats-container {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .about-section-5 .dark-overlay {
            height: 45%;
          }

          .about-section-5 .about-content {
            padding: 30px 16px;
          }

          .about-section-5 .image-gallery {
            max-width: 420px;
            height: 440px;
          }

          .about-section-5 .image-1,
          .about-section-5 .image-2 {
            width: 200px;
            height: 320px;
          }

          .about-section-5 .image-2 {
            left: 200px;
            top: 50px;
          }

          .about-section-5 .experience-badge {
            left: 120px;
            top: 60px;
            width: 160px;
            padding: 20px 15px;
          }

          .about-section-5 .badge-number {
            font-size: 50px;
            line-height: 20px;
          }

          .about-section-5 .badge-text {
            font-size: 20px;
            line-height: 20px;
          }

          .about-section-5 .label {
            font-size: 14px;
            letter-spacing: 3px;
          }

          .about-section-5 .main-title {
            font-size: 32px;
            line-height: 30px;
            margin-bottom: 24px;
          }

          .about-section-5 .description {
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 32px;
          }

          .about-section-5 .stats-container {
            gap: 20px;
          }

          .about-section-5 .stat-number {
            font-size: 28px;
          }

          .about-section-5 .stat-label {
            font-size: 11px;
          }
        }

        @media (max-width: 576px) {
          .about-section-5 .dark-overlay {
            height: 40%;
          }

          .about-section-5 .image-gallery {
            max-width: 340px;
            height: 360px;
          }

          .about-section-5 .image-1,
          .about-section-5 .image-2 {
            width: 160px;
            height: 260px;
          }

          .about-section-5 .image-2 {
            left: 160px;
            top: 40px;
          }

          .about-section-5 .experience-badge {
            left: 90px;
            top: 50px;
            width: 140px;
            padding: 18px 12px;
          }

          .about-section-5 .badge-number {
            font-size: 42px;
            line-height: 18px;
          }

          .about-section-5 .badge-text {
            font-size: 16px;
            line-height: 18px;
          }

          .about-section-5 .main-title {
            font-size: 28px;
            line-height: 26px;
          }

          .about-section-5 .stats-container {
            gap: 15px;
          }

          .about-section-5 .stat-item {
            min-width: 90px;
          }

          .about-section-5 .stat-number {
            font-size: 24px;
          }

          .about-section-5 .stat-label {
            font-size: 10px;
          }

          .about-section-5 .cta-button {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
      <div className="about-container">
        <div className="dark-overlay" />

        <section className="about-content">
          <div className="image-gallery">
            <div className="gallery-image image-1">
              <img src={DEFAULT_IMAGE_1} alt="Luxury home design 1" />
              <div className="image-border" />
            </div>
            <div className="gallery-image image-2">
              <img src={DEFAULT_IMAGE_2} alt="Luxury home design 2" />
              <div className="image-border" />
            </div>

            <div className="experience-badge">
              <div className="badge-number">28</div>
              <div className="badge-text">Years of Experience</div>
            </div>
          </div>

          <div className="content-section">
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
        </section>
      </div>
    </section>
  );
}
