import React, { useContext } from 'react'
import AdminHome from './AdminHome'
import { useLocation } from 'react-router'
import { Link } from "react-router-dom";
import contextCreator from '../context/contextCreator';

const DeletePortfolio = () => {
    const context = useContext(contextCreator)
    const { deletePortfolio } = context
    const location = useLocation()

    const handleClick = () => {
        deletePortfolio(location.state.id)
        alert("Deleted")
    }

    return (
        <>
      <AdminHome />
      <div className='my-5'>
        Are you sure? You want to delete this portfolio item? <b>{location.state.title} </b> ?
        <button onClick={handleClick} className='btn btn-danger mx-2'>Delete</button>
        <Link to="/admin">
          <button className='btn btn-primary'>Cancel</button>
        </Link>

      </div>
    </>
    )
}

export default DeletePortfolio