import React, { useContext, useEffect } from "react";
import contextCreator from "../context/contextCreator";

const Portfolio = () => {
  const context = useContext(contextCreator);
  const { portfolio, getPortfolio } = context;

  //Load Portfolio
  useEffect(() => {
    async function fetchPortfolio() {
      // You can await here
      await getPortfolio('Digitizing');
      alert(portfolio)
      // ...
    }
    fetchPortfolio();
  }, []); // Or [] if effect doesn't need props or state
  return (
    <>
      <section className="portfolio_sec" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h3>Our portfolio</h3>
                <div className="underline"></div>
                <p>Have a look to some of our Quality Work</p>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-md-12">
              <div className="button-group filter-button-group">
                <button data-filter=".Digitizing">Digitizing</button>
                <button data-filter=".Vectorizing">Vectorizing</button>
                <button data-filter=".Graphic-Designing">
                  Graphic Designing
                </button>
                <button data-filter=".Web-Designing">Web Designing</button>
                <button data-filter=".Custom-Patches">Custom Patches</button>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-md-12">
              <div className="grid popup-gallery">
                <div className="row">
                  {portfolio.map((p)=>{
                    <div
                    style={{ border: "1px solid #ddd" }}
                    className="col-md-4 grid-item Digitizing"
                    data-category="Digitizing"
                  >
                    <div className="item-inner">
                      <div className="overlay">
                        <div className="view-list">
                          <a
                            href="#"
                            data-toggle="lightbox"
                            data-gallery="example-gallery"
                            className="item popup-link"
                          >
                            <img
                              src={p.photo}
                              width="375"
                              height="355"
                              style={{ maxHeight: "100% !important" }}
                              alt="Car logo Best Top Quality Line Embroidery Digitizing Services"
                              title="Car logo Best Top Quality Line Embroidery Digitizing Services"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
