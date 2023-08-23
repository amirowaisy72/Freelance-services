import React from 'react'
import { Link } from 'react-router-dom'

const Section5 = () => {
    return (
        <>
            <section className="b_features" id="features" style={{ marginBottom: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="title">
                                <h3>Our Pricing</h3>
                                <div className="underline"></div>
                                <p>Our Quality Work always justifies our Pricing.</p>
                            </div>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-6  wow animate fadeInUp">
                            <div className="pricing_feature pricing">
                                <div className="feature_txt">
                                    <h2 className="title">Embroidery Digitizing</h2>
                                    <p className="desc">Left Chest / Cap</p>
                                    <h1 className="price">$ 15</h1>
                                    <p className="type">Flat Fee</p>
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                        <div className="col-md-6  wow animate fadeInUp">
                            <div className="pricing_feature pricing">
                                <div className="feature_txt">
                                    <h2 className="title">Screen Printing Vector Art</h2>
                                    <p className="desc">Simple Vector</p>
                                    <h1 className="price">$ 10</h1>
                                    <p className="type">Minimum</p>
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                        <div className="col-md-6  wow animate fadeInUp">
                            <div className="pricing_feature pricing">
                                <div className="feature_txt">
                                    <h2 className="title">Graphic Designing</h2>
                                    <p className="desc">Click Below to</p>
                                    <Link to="/order">
                                        <button onclick="location.href='quote.php'">Get a Quote</button>
                                    </Link>
                                    <p class="type" style={{ visibility: "hidden" }} >hidden</p>
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                        <div className="col-md-6  wow animate fadeInUp">
                            <div className="pricing_feature pricing">
                                <div className="feature_txt">
                                    <h2 className="title">Web Designing</h2>
                                    <p className="desc">Static Website</p>
                                    <h1 className="price">$ 129</h1>
                                    <p className="type">Minimum</p>
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                        <div className="col-md-6  wow animate fadeInUp">
                            <div className="pricing_feature pricing">
                                <div className="feature_txt">
                                    <h2 className="title">Custom Patches</h2>
                                    <p className="desc">Click Below to</p>
                                    <Link to="/order">
                                        <button onclick="location.href='quote.php'">Get a Quote</button>
                                    </Link>
                                    <p class="type" style={{ visibility: "hidden" }} >hidden</p>
                                </div>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                        {/* Repeat the above structure for other pricing features */}
                        {/* ... */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5