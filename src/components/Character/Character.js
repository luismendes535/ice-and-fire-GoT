import React from "react";
import "./Character.css";
import moment from "moment";

const Character = props => {
  return (
    <div className={"Character"}>
      {props.character.name && (
        <div>
          <b>Name: </b>
          <div>{props.character.name}</div>
        </div>
      )}
      {props.character.aliases && (
        <div className={"Aliases"}>
          <b>Aliases: </b>
          <ul>
            {props.character.aliases.map((alias, index) => (
              <li>{(index ? ", " : "") + alias}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <b>Gender: </b>
        <div>{props.character.gender}</div>
      </div>
      <div>
        <b>Is alive: </b>
        <div>{!props.character.died ? "Yes" : "No"}</div>
      </div>
      <div className={"Books"}>
        <b>Appear on: </b>
        <ul>
          {props.character.fetchedBooks &&
            props.character.fetchedBooks.map((book, id) => (
              <li key={id}>
                {book.name} - {moment(book.released).format("MMMM Do YYYY")}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Character;
