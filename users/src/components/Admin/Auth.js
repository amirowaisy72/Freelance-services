import React, { useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router";

const Auth = () => {
    const navigate = useNavigate()
  //[Component States]
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (admin.username === "admin" && admin.password === "admin") {
      navigate('/admin')
    } else {
      setError("Incorrect username or password");
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-100">
      <center className="mb-2">
        <h1>Please authenticate to access admin panel</h1>
      </center>
      <label style={{color:"red"}}>{error}</label>
      Username
      <MDBInput
        wrapperClass="mb-4"
        type="text"
        autoComplete="off"
        onChange={onChange}
        name="username"
        value={admin.username}
      />
      
      Password
      <MDBInput
        wrapperClass="mb-4"
        type="password"
        autoComplete="off"
        onChange={onChange}
        name="password"
        value={admin.password}
      />
      <button className="btn btn-primary my-2" onClick={handleClick}>
        Authenticate
      </button>
    </MDBContainer>
  );
};

export default Auth;
