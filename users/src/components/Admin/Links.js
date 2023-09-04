import React from 'react'
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
        <button><Link to="/addportfolio">Add New Portfolio Item</Link></button>
        <button><Link to="/adminmsg">Messages</Link></button>
    </div>
  )
}

export default Links