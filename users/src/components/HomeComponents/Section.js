import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './Section.css'

const Section = () => {
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Add a class to trigger the jump-in animation after component mounts
    const buttons = buttonsRef.current.querySelectorAll('.jump-in-animation');
    buttons.forEach((button, index) => {
      button.style.animationDelay = `${index * 0.2}s`; // Add a delay to stagger the animation
      button.classList.add('animate');
    });
  }, []);

  return (
    <div className='mt-2' style={{
      background: '#242047',
      color: 'white',
      padding: '50px',
    }}>
      <center>
        <h3 style={{ color: "white", fontSize: "32px" }}>We offer High-Quality Digitizing & Vectorizing Designs</h3> <br></br>
        <div ref={buttonsRef}>
          <Link className="btn ms-4 btn-lg active jump-in-animation" role="button" aria-pressed="true" to="/contactus">Order Now</Link>
          <Link className="btn ms-4 btn-lg active jump-in-animation" role="button" aria-pressed="true" to="/contactus">Get A Quote</Link>
        </div>
      </center>
    </div>
  );
}

export default Section;
