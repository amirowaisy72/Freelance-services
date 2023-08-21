import React, { useContext, useState, useEffect } from 'react'
import AdminHome from './AdminHome'
import { MDBContainer, MDBInput } from "mdb-react-ui-kit"
import contextCreator from '../context/contextCreator';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddPortfolio = () => {
    const context = useContext(contextCreator)
    const { services, getServices, createPortfolio } = context

    //[Component States]
    const [portfolio, setPortfolio] = useState({
        title: "",
        description: "",
        photo: "https://expertsgraphics.com/Images/",
    });
    //[Component States END]

    //Load Services
    useEffect(() => {
        async function fetchServices() {
            // You can await here
            await getServices();
            // ...
        }
        fetchServices();
    }, []); // Or [] if effect doesn't need props or state

    const onChange = (e) => {
        setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
    }

    const handleClick = async () => {
        await createPortfolio(portfolio.title, portfolio.description, portfolio.photo)
        alert("New portfolio item added")
    }


    return (
        <>
            <AdminHome />
            <MDBContainer
                className="p-3 my-5 d-flex flex-column w-100"
            >
                <h1>Adding new portfolio item</h1>
                Adding portfolio item for which service?
                <Form.Select
                    className="mb-2"
                    name="title"
                    value={portfolio.title}
                    onChange={onChange}
                >
                    <option>Please select service</option>
                    {services.map((service) => {
                        return <option key={service._id}>{service.title}</option>;
                    })}
                </Form.Select>

                Description
                <textarea wrapperClass="mb-4"
                    rows="15"
                    type="text"
                    autoComplete="off"
                    onChange={onChange}
                    name="description"
                    value={portfolio.description}></textarea>

                Image Link
                <MDBInput
                    wrapperClass="mb-4"
                    type="text"
                    autoComplete="off"
                    onChange={onChange}
                    name="photo"
                    value={portfolio.photo}
                />

                <button className="btn btn-primary my-2" onClick={handleClick}>
                    Add Portfolio
                </button>


            </MDBContainer>
        </>
    )
}

export default AddPortfolio