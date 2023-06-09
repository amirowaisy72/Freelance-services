import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import contextCreator from "../context/contextCreator";

const Portfolio = () => {
  const context = useContext(contextCreator);
  const { portfolio, getPortfolio } = context;

  //Load Portfolio
  useEffect(() => {
    async function fetchPortfolio() {
      // You can await here
      await getPortfolio();
      // ...
    }
    fetchPortfolio();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <>
      <center>
        <h1>Our Work</h1>
      </center>
      <div className="container my-5">
        <div className="row">
          {portfolio.map((p) => {
            return (
              <div key={p._id} className="col-sm-3 mt-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="5079214.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
