import React, { useState } from "react";
import data from "./data.js"
import "./accordian.css";

function Accordian() {
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection,setEnableMultiSelection] = useState(false)
    const [multiSelected,setMultiSelected] = useState([]);

    function handleSingleSelection(getCurrentId){

        {
            setSelected(getCurrentId === selected ? null : getCurrentId);
        }
        
    }

    function handleMultiSelection(getCurrentId){
        let copyMultiSelected = [...multiSelected];
        const findIndexOfCurrentId = copyMultiSelected.indexOf(getCurrentId)
        console.log("curentIdfind",findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1){
            copyMultiSelected.push(getCurrentId)
        }
        else{
            copyMultiSelected.splice(findIndexOfCurrentId, 1);
        }

        setMultiSelected(copyMultiSelected) 
    }
    console.log(selected,multiSelected);
    console.log(enableMultiSelection);

  return (
    <div className="wrapper">
        <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>{enableMultiSelection? "Multi Selecton Is Enabled" : "Enable Multi Selection"}</button>
      <div className="accordian">
        {

            data && data.length > 0 ?
            data.map((dataItem)=>{
                return(
                    <div className="item" key={dataItem.id}>
                        <div className="title" onClick={()=>enableMultiSelection? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id)}>
                            <h3 className="question">{dataItem.question}</h3>
                            {
                                selected === dataItem.id || multiSelected.indexOf(dataItem.id) !== -1 ?<span>-</span> : <span>+</span>
                            }
                        </div>
                        {/* {
                            selected === dataItem.id || multiSelected.indexOf(dataItem.id) !== -1 ? <p className="content">{dataItem.answer}</p> : null
                        } */}
                        {
                            enableMultiSelection ?
                            multiSelected.indexOf(dataItem.id) !==-1 && (<p className="content">{dataItem.answer}</p>)
                            :selected === dataItem.id && (<p className="content">{dataItem.answer}</p>)
                        }

                    </div>
                )
            })
            : <div>No Data Found</div>
        }
      </div>
    </div>
  )
}

export default Accordian;
