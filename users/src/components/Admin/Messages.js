import React, { useContext, useEffect } from "react";
import contextCreator from "../context/contextCreator";
import AdminHome from './AdminHome'

const Messages = () => {
    //States
    const context = useContext(contextCreator);
    const { messages, getMessages } = context;

    //Load Portfolio
    useEffect(() => {
        async function fetchMessages() {
            // You can await here
            await getMessages();
            // ...
        }
        fetchMessages();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <>
            <AdminHome />
            <center><h1>All Messages</h1></center>
            <div className="container my-5">
                <div className="row">
                    {messages.map((m) => {
                        return (
                            <div key={m._id} className="col-sm-3 mt-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{m.fname} {m.lname}</h5>
                                        <p className="card-text">{m.mobile}</p>
                                        <p className="card-text">{m.service}</p>
                                        <p className="card-text">{m.msg}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Messages