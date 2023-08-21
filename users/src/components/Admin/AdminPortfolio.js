import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import contextCreator from "../context/contextCreator";
import AdminHome from './AdminHome'

const AdminPortfolio = () => {
  const location = useLocation();
  //States
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
      <AdminHome />
      <center>
        <h1>Our Work in {location.state.title}</h1>
      </center>
      <div className="container my-5">
        <div className="row">
          {portfolio.map((p) => {
            return (
              <>
                {p.title === location.state.title ? (
                  <div key={p._id} className="col-sm-3 mt-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={p.photo}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <Link to="/editportfolio" state={{ title: p.title, description: p.description, photo: p.photo, id: p._id }}>
                          <i className="fa-solid fa-pen-to-square mx-4"></i>
                        </Link>

                        <Link to="/deleteportfolio" state={{ title: p.title, description: p.description, photo: p.photo, id: p._id }}>
                          <i className="fa-solid fa-trash"></i>
                        </Link>
                      </div>
                    </div>
                  </div >
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div >
    </>
  )
}

export default AdminPortfolio