import React from "react";
import "./randomColor.css";
import { useState } from "react";
import { useEffect } from "react";

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color,setColor] = useState("#101010");

    function randomColorUtility(value){
        return Math.floor(Math.random() * value);
    }

    function handleRandomHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";
        for(let i=1;i<=6;i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleRandomRGBColor(){
        let r = randomColorUtility(256)
        let g = randomColorUtility(256)
        let b = randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`);
        // setTypeOfColor("rgb")
    }

    useEffect(()=>{
        typeOfColor === "rgb" ? handleRandomRGBColor() : handleRandomHexColor();
    },[typeOfColor])
  return (
    <div className="wrapper" style={{backgroundColor: color}}>
      <div className="btnContainer">
        <button className="hexColor" onClick={()=>setTypeOfColor("hex")}>Hex Color</button>
        <button className="rgbColor" onClick={()=>setTypeOfColor("rgb")}>RGB Color</button>
        <button className="generateRandomColor" onClick={typeOfColor==="hex" ? handleRandomHexColor : handleRandomRGBColor}>Generate Random Color</button>
      </div>

      <div className="details">

        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  )
}

export default RandomColor;
