import React from "react";
import{ FaRegCircle, FaTimes } from "react-icons/fa";
import "./icon.css"

function Icon({name}) {
    if(name === "circle"){
        return <FaRegCircle className="icon"/>;
    }
    else if(name === "cross"){
        return <FaTimes className="icon"/>;
    }
    else{
        return "";
    }
}

export default Icon;
