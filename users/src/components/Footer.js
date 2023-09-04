import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="bg-dark text-center text-white mt-5">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>

                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Text --> */}
                    <section className="mb-4">
                        <p>
                            Experts Graphics is a graphic design brand shop that specializes in vectorizing and digitizing services. We offer quick and efficient vectorization and digitization of logos, illustrations, and other graphics for businesses of all sizes, from small startups to large corporations.
                        </p>
                    </section>
                    {/* <!-- Section: Text --> */}

                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Contact Details</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    Email : info@expertsgraphics.com
                                    </li>
                                    <li>
                                    Mobile : +1 (210) 888-9286
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}
                            {/* <!--Grid column--> */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Quick Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Privacy policy</a>
                                    </li>
                                    <li>
                                        <Link to="/order">
                                            <a href="#!" className="text-white">Place an Order</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/order">
                                            <a href="#!" className="text-white">Get a Quote</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/auth">
                                            <a href="#!" className="text-white">Admin Panel</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <Link to="/">
                        <a className="text-white" href="https://expertsgraphics.com/"> Experts Graphics</a>
                    </Link>

                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer