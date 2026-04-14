import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {

  const handleScroll = () => {

    const hero = document.querySelector(".hero");
    const heroHeight = hero.offsetHeight;

    let value = window.scrollY;

    // LIMIT SCROLL EFFECT ONLY INSIDE HERO
    if (value > heroHeight) value = heroHeight;

    const back1 = document.querySelector(".back-1");
    const back2 = document.querySelector(".back-2");
    const back3 = document.querySelector(".back-3");
    const back4 = document.querySelector(".back-4");

    if (back1)
      back1.style.bottom = (-12 + value * 0.15) + "%";

    if (back2)
      back2.style.bottom = (-12 + value * 0.25) + "%";

    if (back3)
      back3.style.bottom = (-12 + value * 0.35) + "%";

    if (back4)
      back4.style.bottom = (-12 + value * 0.45) + "%";

  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);

}, []);
  return (

    <section className="hero">

      <div className="content">

        <img src="/assets/bac 4.png" className="back-4" alt="" />
        <img src="/assets/bac 3.png" className="back-3" alt="" />
        <img src="/assets/bac 2.png" className="back-2" alt="" />
        <img src="/assets/bac 1.png" className="back-1" alt="" />

      </div>

      <div className="title">

        <h3>Explore</h3>

        <h1>India</h1>

      </div>

      <div className="info-wrap">

        <p>
          Discover breathtaking destinations across India with curated
          premium travel experiences.
        </p>

      </div>

      <div className="cta">

        <button>
          Discover Now →
        </button>

      </div>

      <div className="slider">

        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-right"></i>

      </div>

    </section>

  );

}