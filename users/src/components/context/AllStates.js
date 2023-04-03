import React, { useState } from "react";
import context from "./contextCreator";

const AllStates = (props) => {
  //Host
  const host = "http://localhost:5000";
  //States
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  //Services CRUD
  const getServices = async () => {
    const response = await fetch(`${host}/services/read`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setServices(json);
  };

  //Portfolio CRUD
  const getPortfolio = async () => {
    const response = await fetch(`${host}/portfolio/read`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPortfolio(json);
  };

  //Messages CRUD
  const createMessage = async (fname, lname, mobile, service, msg) => {
    const response = await fetch(`${host}/messages/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, lname, mobile, service, msg }),
    });
    const json = await response.json();
    return json.success
  };

  return (
    <>
      <context.Provider
        value={{ services, portfolio, getServices, getPortfolio, createMessage }}
      >
        {props.children}
      </context.Provider>
    </>
  );
};

export default AllStates;
