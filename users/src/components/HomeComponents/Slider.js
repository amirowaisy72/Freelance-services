import React, { useState } from 'react';

const textStyle = {
  color: 'white',
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: '1',
  fontFamily: 'YourFont, sans-serif',
  fontSize: '2rem',
  fontWeight: 'bold',
};

const titleStyle = {
  color: 'white',
  maxWidth: '80%', // Set a maximum width for the title
  fontSize: '2rem',
  marginBottom: '1rem', // Add some spacing between title and description
};

const descriptionStyle = {
  color: 'white',
  maxWidth: '80%', // Set a maximum width for the description
  fontSize: '1.5rem', // Adjust the font size for description
};

const carouselItems = [
  {
    src: 'Sliders/patches1.jpg',
    alt: 'Image 1',
    text: {
      title: 'Experts Graphics',
      description: 'Expert in Custom Patches',
    },
  },
  {
    src: 'Sliders/slider4.jpg',
    alt: 'Image 2',
    text: {
      title: 'Experts Graphics',
      description: 'Expert in Web Designing',
    },
  },
  {
    src: 'Sliders/slider3.jpg',
    alt: 'Image 3',
    text: {
      title: 'Experts Graphics',
      description: 'Expert in Graphics Designing',
    },
  },
  {
    src: 'Sliders/xyz.jpg',
    alt: 'Image 4',
    text: {
      title: 'Experts Graphics',
      description: 'Expert in Vector Art',
    },
  },
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
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
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={item.src} className="d-block w-100" alt={item.alt} />
            <div className="carousel-caption" style={textStyle}>
              <h1 style={titleStyle}>{item.text.title}</h1>
              <p style={descriptionStyle}>{item.text.description}</p>
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
