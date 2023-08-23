import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useEffect } from "react";
import contextCreator from "./context/contextCreator";

const Order = () => {
    const context = useContext(contextCreator);
    const { services, getServices, createMessage } = context;
    const [data, setData] = useState({
        fname: "",
        lname: "",
        mobile: "",
        service: "",
        msg: "",
    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    //Load Services
    useEffect(() => {
        async function fetchServices() {
            // You can await here
            await getServices();
            // ...
        }
        fetchServices();
    }, []); // Or [] if effect doesn't need props or state

    const handleClick = async (e) => {
        e.preventDefault();
        if (!data.fname || !data.lname || !data.mobile || !data.msg) {
            alert("Please Fill All Fields");
        } else {
            const create = await createMessage(
                data.fname,
                data.lname,
                data.mobile,
                data.service,
                data.msg
            );
            if (create) {
                setData({ fname: "", lname: "", mobile: "", service: "", msg: "" });
                alert("Your message has been delivered. Team will soon contact back with you.")
            } else {
                alert("Some Error Occured");
            }
        }
    };
    return (
        <div className="container mt-2">
            <center>
                <h1 style={{color:"black", fontSize:"32px"}}>Order/Quote</h1>
            </center>
            <Form>
                <div className="row mt-4">
                    <div className="col-md">
                        <Form.Control
                            type="text"
                            className="mb-2"
                            placeholder="First Name"
                            name="fname"
                            value={data.fname}
                            onChange={onChange} autoComplete="off"
                        />
                    </div>
                    <div className="col-md">
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            value={data.lname}
                            onChange={onChange} autoComplete="off"
                        />
                    </div>
                </div>
                <Form.Control
                    type="mobile"
                    className="mt-2"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={data.mobile}
                    onChange={onChange} autoComplete="off"
                />
                <label htmlFor="" className="my-2">
                    For which service you need assistance?
                </label>{" "}
                <br />
                <Form.Select
                    className="mb-2"
                    name="service"
                    value={data.service}
                    onChange={onChange}
                >
                    <option>Select service</option>
                    {services.map((service) => {
                        return <option key={service._id}>{service.title}</option>;
                    })}
                </Form.Select>
                <Form.Control
                    className="mb-2"
                    as="textarea"
                    placeholder="Enter your message"
                    name="msg"
                    value={data.msg}
                    onChange={onChange}
                    rows={3}
                    required={true}
                />
                <div className="col-md">
                    Choose a file
                    <Form.Control
                        type="file"
                        className="mb-2"
                        placeholder="First Name"
                        name=""
                        autoComplete="off"
                    />
                </div>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Order