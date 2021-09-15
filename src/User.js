import React from "react";

export function User({person, isHidden}) {
  return (
    <li key={person.email}>
      <img src={person.picture.thumbnail} alt={person.name.first}/>
      <h2>{person.name.first}</h2>
      {isHidden && <p>{person.gender}</p>}
      <button>Show Details</button>
    </li>
  );
}