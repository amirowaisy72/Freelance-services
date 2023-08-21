import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import contextCreator from "../context/contextCreator";
import AdminHome from './AdminHome'

const AdminServices = () => {
    const context = useContext(contextCreator)
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
        <>
            <AdminHome />
            <center><h1>All Services</h1></center>
            <div className="container my-5">
                <div className="row">
                    {services.map((service) => {
                        return (
                            <div key={service._id} className="col-sm-3 mt-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img
                                        className="card-img-top"
                                        src={service.photo}
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.description.substr(0, 100)}...</p>
                                        <Link
                                            className="btn btn-primary"
                                            to="/adminportfolio"
                                            state={{ title: service.title, description: service.description, photo: service.photo }}
                                        >
                                            Portfolio
                                        </Link>
                                        <Link to="/editservice" state={{ title: service.title, description: service.description, photo: service.photo, price: service.price, id: service._id }}>
                                            <i className="fa-solid fa-pen-to-square mx-5"></i>
                                        </Link>

                                        <Link to="/deleteservice" state={{ title: service.title, description: service.description, photo: service.photo, price: service.price, id: service._id }}>
                                            <i className="fa-solid fa-trash"></i>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AdminServices