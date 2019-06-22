import React from "react";
import "./Character.css";
import moment from "moment";

const Character = props => {
  return (
    <div className={"Character"}>
      <div>
        <p>
          <b>Name: </b>
          {props.character.name}
        </p>
        <p>
          <b>Gender: </b>
          {props.character.gender}
        </p>
        <p>
          <b>Is alive: </b>
          {!props.character.died ? "Yes" : "No"}
        </p>
      </div>
      <div className={"Books"}>
        <b>Appear on: </b>
        {props.character.fetchedBooks && props.character.fetchedBooks.map(book => {
              return (
                <p>
                  {book.name} - {moment(book.released).format("MMMM Do YYYY")}
                </p>
              );
            })}
      </div>
    </div>
  );
};
export default Character;
