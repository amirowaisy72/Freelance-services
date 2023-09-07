import React, { useEffect, useState } from 'react';

const Section2 = () => {
  const [text, setText] = useState('');
  const content = [
    "Experts Graphics is one of the Leading Company that provides Best Quality Services of Embroidery Digitizing,",
    "Screen Printing Vector Art, Graphic Designing, Web Design/Development and Custom Patches in all across the World.",
    "We are equipped with Quality Staff of Digitizers, Vector Artists and Web Developers having an experience of more than 16 years",
    "and they are having a Great command in their respective fields.",
    "Experts Graphics never compromise on Quality and our first priority is to provide Reliable and Best Quality Services to our Valued Clients,",
    "we believe in a Best Quality work for the Best Business Relationship, in the same way we believe in a Quality but not in a Quantity.",
    "Experts Graphics Team always comes up with the Top Quality work according to our Client’s needs.",
    "While you deal with Experts Graphics Company, you can be sure of dealing with professionals who know their work well and who know how to deliver assigned tasks in the right way.",
    "We make sure each and every work is completed with utmost care and attention to details. The Karmic cycle of Experts Graphics Business keeps our Clients happy",
    "and wins us more work and admiration. We take pride in our in-house Team of Professionals and constantly updated and equipped work station.",
    "We will assist you from start to end. Working hard with integrity and dedication, we promise to deliver you 100% customer satisfaction.",
    "With the trusted name of Experts Graphics you can be assured that your experience will be worry free.",
  ];

  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      if (index < content.length) {
        setText((prevText) => prevText + content[index] + ' ');
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust typing speed here (milliseconds)
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about_us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_left_txt">
              <div className="title">
                <h3>about us</h3>
                <div className="underline"></div>
              </div>
              <div className="about_txt">
                <p>{text}</p>
                <a
                  className="lm_link"
                  style={{ textDecoration: "none" }}
                  href="#"
                >
                  Learn More...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_right_img">
              <img
                src="about.png"
                width="600"
                height="475"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
