import "./Footer.css";

export default function Footer() {

  return (

    <footer className="footer">

      <video
        className="footer-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="footer-overlay"></div>

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              India Exclusive Travel
            </h2>

            <p>
              Luxury journeys across India
              designed with culture,
              comfort, authenticity,
              and unforgettable experiences.
            </p>

          </div>

          <div className="footer-newsletter">

            <h3>
              Subscribe Newsletter
            </h3>

            <div className="newsletter-box">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                Subscribe
              </button>

            </div>

          </div>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#destination">Destinations</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-socials">

          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">YouTube</a>
          <a href="/">LinkedIn</a>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 India Exclusive Travel.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );

}