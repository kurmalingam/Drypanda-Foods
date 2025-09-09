import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="container">
        {/* Header */}
        <div className="about-header text-center mb-5">
          <span className="section-tagline">Who We Are!</span>
          <h2 className="section-title">
            Solar-Powered Goodness From Our Hands to Yours
          </h2>
          <div className="divider mx-auto"></div>
        </div>

        {/* Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="about-content">
              <p className="lead-text">
                We focus on sustainable agricultural innovations, empowering farmers and industries with smart, eco-friendly solutions.
              </p>

              <div className="about-feature my-4">
                <p>
                  At Dry Panda, we're revolutionizing how food is preserved. We champion Precision Indirect Solar Drying, a superior method that locks in the vibrant color, rich flavor, and vital nutrients of fruits and vegetables, all while protecting them from external contaminants. The result: Pure, delicious, and incredibly healthy dried produce.
                </p>
              </div>

              <div className="about-feature my-4">
                <p>
                  But we're not just about delicious snacks. We are also the proud creators of innovative indirect solar drying machines that make this process possible. We develop and build these sustainable solutions to empower individuals and businesses, reducing food waste and fostering economic independence.
                </p>
              </div>

              <div className="about-feature my-4">
                <p>
                  Choose Dry Panda for exceptional, sun-dried quality and join us in building a more sustainable food future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
