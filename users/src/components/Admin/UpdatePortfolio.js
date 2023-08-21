import React, { useContext, useState } from 'react'
import AdminHome from './AdminHome'
import { MDBContainer, MDBInput } from "mdb-react-ui-kit"
import { useLocation } from "react-router";
import contextCreator from '../context/contextCreator';

const UpdatePortfolio = () => {
    const context = useContext(contextCreator)
    const { updatePortfolio } = context
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
        await updatePortfolio(location.state.id, service.title, service.description, service.photo)
        alert("Updated")
    }
  return (
    <>
            <AdminHome />
            <MDBContainer
                className="p-3 my-5 d-flex flex-column w-100"
            >
                <h1>Updating {location.state.title} Portfolio item</h1>
                Title
                <MDBInput
                    wrapperClass="mb-4"
                    type="text"
                    autoComplete="off"
                    onChange={onChange}
                    name="title"
                    value={service.title}
                    disabled
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

                <button className="btn btn-primary my-2" onClick={handleClick}>
                    Update
                </button>


            </MDBContainer>
        </>
  )
}

export default UpdatePortfolio