import React, { useContext } from 'react'
import AdminHome from './AdminHome'
import { useLocation } from 'react-router'
import { Link } from "react-router-dom";
import contextCreator from '../context/contextCreator';

const DeleteService = () => {
  const context = useContext(contextCreator)
  const { deleteService } = context
  const location = useLocation()

  const handleClick = () => {
    deleteService(location.state.id)
    alert("Deleted")
  }

  return (
    <>
      <AdminHome />
      <div className='my-5'>
        Are you sure? You want to delete service <b>{location.state.title} </b> ?
        <button onClick={handleClick} className='btn btn-danger mx-2'>Delete</button>
        <Link to="/admin">
          <button className='btn btn-primary'>Cancel</button>
        </Link>

      </div>
    </>
  )
}

export default DeleteService