import "./About.css";

export default function Contact() {

  return (

    <section className="about" id="contact">

      <video
        className="about-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="about-overlay"></div>

      <div className="about-content">

        <span className="about-tag">
          Plan Your Journey
        </span>

        <h2>
          Let’s Create Your Perfect India Experience
        </h2>

        <p className="about-text">

          Whether you dream of exploring
          the majestic forts of
          <span> Rajasthan</span>,
          cruising through the serene
          backwaters of
          <span> Kerala</span>,
          discovering the mountains of
          <span> Ladakh</span>,
          or relaxing on the beaches of
          <span> Goa</span>,
          our team is ready to design a
          personalized journey crafted
          exclusively for you.

        </p>

        <p className="about-text">

          Connect with
          <span> India Exclusive Travel</span>
          for luxury itineraries, private
          guided experiences, premium stays,
          transportation, and unforgettable
          cultural adventures across India.

        </p>

        <div className="about-features">

          <div className="feature-card">
            <h3>Email Us</h3>
            <p>
              contact@indiaexclusivetravel.com
            </p>
          </div>

          <div className="feature-card">
            <h3>Call Us</h3>
            <p>
              +91 98765 43210
            </p>
          </div>

          <div className="feature-card">
            <h3>Custom Tours</h3>
            <p>
              Tailor-made journeys designed
              around your travel preferences.
            </p>
          </div>

        </div>

      </div>

    </section>

  );

}