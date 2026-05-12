import "./About.css";

export default function About() {

  return (

    <section className="about" id="about">

      <video
        className="about-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.prod.website-files.com/69a111972d2e0bbcc6adb934/69a111972d2e0bbcc6adbc8a_Gradient%20%20%20-transcode.mp4"
          type="video/mp4"
        />
      </video>

      <div className="about-overlay"></div>

      <div className="about-content">

        <span className="about-tag">
          Luxury India Experiences
        </span>

        <h2>
          Discover India Beyond Ordinary Travel
        </h2>

        <p className="about-text">

          <span>India Exclusive Travel</span> creates
          immersive journeys designed for travelers
          seeking culture, authenticity, luxury,
          and unforgettable memories across India.

        </p>

        <p className="about-text">

          From the royal palaces of
          <span> Rajasthan</span>,
          the peaceful backwaters of
          <span> Kerala</span>,
          the Himalayan landscapes of
          <span> Ladakh</span>,
          to the vibrant beaches of
          <span> Goa</span>,
          every itinerary is handcrafted
          with attention to comfort,
          storytelling, and local experiences.

        </p>

        <p className="about-text">

          We specialize in premium stays,
          private guided tours, cultural
          experiences, wildlife adventures,
          spiritual journeys, and seamless
          transportation across India's most
          iconic destinations.

        </p>

        <div className="about-features">

          <div className="feature-card">
            <h3>Luxury Stays</h3>
            <p>
              Handpicked heritage hotels,
              resorts, and boutique properties.
            </p>
          </div>

          <div className="feature-card">
            <h3>Private Tours</h3>
            <p>
              Personalized itineraries with
              expert local guides.
            </p>
          </div>

          <div className="feature-card">
            <h3>Authentic Culture</h3>
            <p>
              Experience India's traditions,
              cuisine, spirituality, and art.
            </p>
          </div>

        </div>

      </div>

    </section>

  );

}