import React, { useState } from "react";

const textStyle = {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: "1",
  fontFamily: "YourFont, sans-serif",
  fontSize: "2rem", // Adjust the font size for text
  fontWeight: "bold",
  width: "80%", // Set a maximum width for the text
};

const goldenTextStyle = {
  color: "gold", // Change the text color to gold
  textDecoration: "underline lightblue", // Add underline with light blue color
};

const sliderContainerStyle = {
  marginTop: "0px", // Adjust the margin-top to move the slider content below the header
};

const imageStyle = {
  filter: "blur(5px)", // Apply a 5px blur to the images
};

const carouselItems = [
  {
    src: "Sliders/Mock.png",
    alt: "Image 1",
    text: {
      title: "Experts Graphics",
      description: "Expert in Web Digitizing",
    },
  },
  {
    src: "Sliders/slider4.jpg",
    alt: "Image 2",
    text: {
      title: "Experts Graphics",
      description: "Expert in Web Designing",
    },
  },
  {
    src: "Sliders/slider3.jpg",
    alt: "Image 3",
    text: {
      title: "Experts Graphics",
      description: "Expert in Graphics Designing",
    },
  },
  {
    src: "Sliders/xyz.jpg",
    alt: "Image 4",
    text: {
      title: "Experts Graphics",
      description: "Expert in Vector Art",
    },
  },
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container" style={sliderContainerStyle}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        onSlide={handleSlideChange}
      >
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={item.src}
                className="d-block w-100"
                alt={item.alt}
                style={imageStyle}
              />
              <div className="carousel-caption" style={textStyle}>
                <h1>
                  <span style={goldenTextStyle}>{item.text.title}</span>
                </h1>
                <p>{item.text.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
