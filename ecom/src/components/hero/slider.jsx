import { useState, useEffect } from "react";
import "./Heroslider.css";
import HeroImage1 from "../../assests/products/headphone.jpg";
import HeroImage2 from "../../assests/products/iphone.jpg";
import HeroImage3 from "../../assests/products/mac.webp"

const HeroSlider = () => {
  const images = [
    HeroImage1,
    HeroImage2,
    HeroImage3,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="hero-slider">
      <div className="hero-slider__overlay"></div>
      <div
        className="hero-slider__slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="hero-slider__slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="hero-slider__dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`hero-slider__dot ${
              index === currentIndex ? "hero-slider__dot--active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <div className="hero-slider__content">
        <h1 className="title_font hero-slider__title">Portable</h1>
        <h1 className="title-gadgets">Gadgets</h1>
        {/* <h1 className="title_font hero-slider__title">gadgets</h1> */}
        {/* <p className="hero-slider__description">
          with gadget galore
        </p>
        <p className="hero-slider__description">
          let explore the gadgets
        </p> */}
        <button className="button-one">SHOP NOW</button>
        <button className="button-two">view more</button>
      </div>
    </div>
  );
};

export default HeroSlider;