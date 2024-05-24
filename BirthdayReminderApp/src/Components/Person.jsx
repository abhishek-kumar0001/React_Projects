import React from "react";
import "./person.css"

function Person({singlePerson}) {
    const {name,age,img} = singlePerson;
  return (
    <div className="person">
      <img src={img}/>
      <article>
        <h4 className="name">{name}</h4>
        <p className="age">{age} years</p>
      </article>

    </div>
  )
}

export default Person
