import React, { useState } from "react";
import context from "./contextCreator";

const AllStates = (props) => {
  //Host
  // const host = "http://localhost:5000";
  const host = "https://jade-frantic-fly.cyclic.cloud"
  //States
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [messages, setMessages] = useState([])

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

  //Update services
  const updateServices = async (id, title, description, photo, price) => {
    //API Call
    const response = await fetch(`${host}/services/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, photo, price }),
    });
    // const json = await response.json();
  };

  //Update Portfolio
  const updatePortfolio = async (id, title, description, photo) => {
    //API Call
    const response = await fetch(`${host}/portfolio/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, photo}),
    });
    // const json = await response.json();
  };

  //Delete service
  const deleteService = async (id) => {
    //API Call
    const response = await fetch(`${host}/services/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json.success
  };

  //Delete Portfolio
  const deletePortfolio = async (id) => {
    //API Call
    const response = await fetch(`${host}/portfolio/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json.success
  };

  //Create services
  const createService = async (title, description, photo, price) => {
    //API Call
    const response = await fetch(`${host}/services/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, photo, price }),
    });
    // const json = await response.json();
  };

  //Create services
  const createPortfolio = async (title, description, photo) => {
    //API Call
    const response = await fetch(`${host}/portfolio/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, photo }),
    });
    // const json = await response.json();
  };

  //Portfolio CRUD
  const getPortfolio = async (title) => {
    const response = await fetch(`${host}/portfolio/read/${title}`, {
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

  //Read messafes
  const getMessages = async () => {
    const response = await fetch(`${host}/messages/read`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setMessages(json);
  };

  return (
    <>
      <context.Provider
        value={{ services, portfolio, messages, getMessages, deletePortfolio, updatePortfolio, getServices, getPortfolio, createMessage, updateServices, createService, deleteService, createPortfolio }}
      >
        {props.children}
      </context.Provider>
    </>
  );
};

export default AllStates;
