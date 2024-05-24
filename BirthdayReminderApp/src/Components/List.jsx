import React, { useState } from "react";
import "./list.css"
import data from "../data";
import Person from "./Person";

function List({showReminder,setShowReminder}) {
    const [peoples,setPeoples] = useState(data);
    const [cleared,setCleared] = useState(true);
    console.log(peoples);

    function showBirthdayReminder(){
        setShowReminder(!showReminder);
        setPeoples(data)
    }

    function clearAll() {
        setPeoples([]);
        setCleared(!cleared)
    }

  return (
    <div className="list">
      {
        !showReminder && (
            <button className="showBirthdayReminderBtn" onClick={showBirthdayReminder}>Show Birthday Reminder</button>
          )
      }
      {
        showReminder && (
            <>
                <h1 className="heading">{peoples.length} bithdays today</h1>
                {
                    peoples.map((person) => <Person key={person.id} singlePerson={person}/>)
                }

                {
                    cleared ? <button className="clearAllBtn" onClick={clearAll}> Clear All</button> : <h2 style={{color:"green"}}>All cleared</h2>
                }
                
            </>
        )
      }
    </div>
  )
}

export default List
