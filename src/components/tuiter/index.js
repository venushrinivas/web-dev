import React from "react";
import {Link} from "react-router-dom";

const Tuiter = () => {
    return (
        <>
            <h1>Tuiter</h1>
            <Link to="/">Labs</Link> | <Link to="/hello">Hello</Link>
        </>
    )
};

export default Tuiter;