import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import contextCreator from "../context/contextCreator";

const Section3 = () => {
    const context = useContext(contextCreator);
    const { services, getServices } = context;

    //Load Services
    useEffect(() => {
        async function fetchServices() {
            // You can await here
            await getServices();
            // ...
        }
        fetchServices();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <div style={{ background: '#2F2D2D', color: 'white' }}>
            <center>
                <br></br>
                <h5>Our Services</h5>
                <h1>Best Popular Services</h1>
                <hr style={{ width: '150px', color: 'red' }}></hr>
                <br></br>
                <br></br>
                <div className="container my-5">
                    <div className="row">
                        {services.map((service) => {
                            return (
                                <div key={service._id} className="col-sm-3 mt-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img
                                            className="card-img-top"
                                            src="slider1.jpg"
                                            alt="Card image cap"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{service.title}</h5>
                                            <p className="card-text">{service.description.substr(0, 100)}...</p>
                                            <Link
                                                className="btn btn-primary"
                                                to="/services/serviceDescription"
                                                state={{ title: service.title, description: service.description }}
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br></br>
            </center>
        </div>
    )
}

export default Section3