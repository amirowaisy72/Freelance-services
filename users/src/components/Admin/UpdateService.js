import React, { useContext, useState } from 'react'
import AdminHome from './AdminHome'
import { MDBContainer, MDBInput } from "mdb-react-ui-kit"
import { useLocation } from "react-router";
import contextCreator from '../context/contextCreator';

const UpdateService = () => {
    const context = useContext(contextCreator)
    const { updateServices } = context
    const location = useLocation();
    //[Component States]
    const [service, setService] = useState({
        title: location.state.title,
        description: location.state.description,
        photo: location.state.photo,
        price: location.state.price
    });
    //[Component States END]

    const onChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    }

    const handleClick = async () => {
        await updateServices(location.state.id, service.title, service.description, service.photo, location.state.price)
        alert("Updated")
    }
    return (
        <>
            <AdminHome />
            <MDBContainer
                className="p-3 my-5 d-flex flex-column w-100"
            >
                <h1>Updating {location.state.title}</h1>
                Title
                <MDBInput
                    wrapperClass="mb-4"
                    type="text"
                    autoComplete="off"
                    onChange={onChange}
                    name="title"
                    value={service.title}
                />

                Description
                <textarea wrapperClass="mb-4"
                    rows="15"
                    type="text"
                    autoComplete="off"
                    onChange={onChange}
                    name="description"
                    value={service.description}></textarea>

                Image Link
                <MDBInput
                    wrapperClass="mb-4"
                    type="text"
                    autoComplete="off"
                    onChange={onChange}
                    name="photo"
                    value={service.photo}
                />

                Price in rupees
                <MDBInput
                    wrapperClass="mb-4"
                    type="number"
                    autoComplete="off"
                    onChange={onChange}
                    name="price"
                    value={service.price}
                    disabled
                />

                <button className="btn btn-primary my-2" onClick={handleClick}>
                    Update
                </button>


            </MDBContainer>
        </>
    )
}

export default UpdateService