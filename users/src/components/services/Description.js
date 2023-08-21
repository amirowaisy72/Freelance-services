import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  return (
    <div className="container my-2">
      <center>
        <h1>{location.state.title}</h1>
      </center>
      <div className="row my-5">
        <div className="col-sm">
          <img className="card-img-top" src={location.state.photo} alt="Vector Art Design" />
        </div>
        <div className="col-sm">
          <p>What we offer in {location.state.title}</p>
          <hr />
          <p>
          {location.state.description}
          </p>
          <Link
            className="btn btn-primary"
            state={{ service: location.state.title }}
            to="/servicePortfolio"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
