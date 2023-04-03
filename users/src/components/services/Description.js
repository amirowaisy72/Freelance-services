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
          <img className="card-img-top" src="..." alt="Card image cap" />
        </div>
        <div className="col-sm">
          <p>What we offer in Digitizing</p>
          <hr />
          <p>
            Top Quality Line offers Best Top Quality Digitizing Services and We
            offer all types of Digitizing including 3D Puff, Patches, Applique
            Digitizing with All the Major Machine Formats (Native files) such
            as: DST, CND, OFM, PXF, PES, PEC, JEF, EMB, ART, EXP, HUS, NGS, POF,
            ESS, ESL, T10, T15, DAT, VEP, SAS, MJD, DSB, DSZ, 10O, KSM, TAP,
            T01, T03, T04, T05, SEW, JEF, HUS, PCD, PCQ, CSD, ART and XXX, etc.
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
