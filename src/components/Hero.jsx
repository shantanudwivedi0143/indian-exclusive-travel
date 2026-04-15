import { useState } from "react";
import heroSlides from "../data/heroSlides";

export default function Hero() {

  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((index + 1) % heroSlides.length);

  const prevSlide = () =>
    setIndex(
      (index - 1 + heroSlides.length) %
      heroSlides.length
    );

  const slide = heroSlides[index];

  const getTitleSize = (title) => {
  const length = title.length;

  if (length <= 6) return "hero-title-xl";
  if (length <= 10) return "hero-title-lg";
  if (length <= 14) return "hero-title-md";
  return "hero-title-sm";
};

  return (

    <section id="home" className="hero">

    <div key={index} className="content">
  <img src={slide.images[0]} className="back-4" alt="" />
  <img src={slide.images[1]} className="back-3" alt="" />
  <img src={slide.images[2]} className="back-2" alt="" />
  <img src={slide.images[3]} className="back-1" alt="" />
</div>

<div key={"title-" + index} className="title">
  <h3>{slide.subtitle}</h3>
  <h1 className={getTitleSize(slide.title)}>
  {slide.title}
</h1>
</div>

<div key={"desc-" + index} className="info-wrap">
  <p>{slide.description}</p>
</div>

<div key={"cta-" + index} className="cta">
  <button>Discover Now →</button>
</div>

      <div className="slider">

        <i
          className="fa-solid fa-chevron-left"
          onClick={prevSlide}
        ></i>

        <i
          className="fa-solid fa-chevron-right"
          onClick={nextSlide}
        ></i>

      </div>

    </section>

  );

}