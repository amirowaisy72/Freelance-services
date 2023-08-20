import React from 'react'
import { Link } from "react-router-dom";

const Section = () => {
    return (
        <div className='mt-2' style={{ background: '#FF5733', color: 'white', padding: '50px' }}>
            <center>
                <h3>We offer High Quality Digitizing & Vectorizing Designs</h3> <br></br>
                <Link className="btn ms-4 btn-lg active" role="button" aria-pressed="true" to="/contactus">Order Now</Link>
                <Link className="btn ms-4 btn-lg active" role="button" aria-pressed="true" to="/contactus">Get A Quote</Link>
            </center>
        </div>
    )
}

export default Section