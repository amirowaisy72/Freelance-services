import React, { useState, useEffect } from "react";

const textStyle = {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: "1",
  fontFamily: "YourFont, sans-serif",
  fontSize: "3rem", // Default font size for larger screens
  fontWeight: "bold",
  width: "80%",
};

const backgroundStyle = {
  backgroundColor: "#242047",
  padding: "10px 20px",
  borderRadius: "25px",
};

const goldenTextStyle = {
  color: "white",
  textDecoration: "none",
};

const sliderContainerStyle = {
  marginTop: "0px",
};

const imageStyle = {
  filter: "blur(0px)",
};

// Define different font sizes for responsive design
const responsiveTextSizes = {
  small: "1rem", // Font size for small screens (e.g., mobile)
  medium: "2rem", // Font size for medium-sized screens (e.g., tablets)
  large: "3rem", // Default font size for larger screens
};

const carouselItems = [
  {
    src: "Sliders/Mock.png",
    alt: "Image 1",
    text: {
      description: "Embroidery Digitizing",
    },
  },
  {
    src: "Sliders/slider4.jpg",
    alt: "Image 2",
    text: {
      description: "Vector Arts",
    },
  },
  {
    src: "Sliders/slider3.jpg",
    alt: "Image 3",
    text: {
      description: "Graphics Designing",
    },
  },
  {
    src: "Sliders/xyz.jpg",
    alt: "Image 4",
    text: {
      description: "Web Designing/Development",
    },
  },
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fontSize, setFontSize] = useState(responsiveTextSizes.large);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      // Determine the appropriate font size based on screen width
      if (window.innerWidth <= 768) {
        setFontSize(responsiveTextSizes.small);
      } else if (window.innerWidth <= 1024) {
        setFontSize(responsiveTextSizes.medium);
      } else {
        setFontSize(responsiveTextSizes.large);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial font size calculation
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsiveTextStyle = {
    ...textStyle,
    fontSize,
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
              <div className="carousel-caption" style={responsiveTextStyle}>
                <p>
                  <span style={backgroundStyle}>
                    <span style={goldenTextStyle}>{item.text.description}</span>
                  </span>
                </p>
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
