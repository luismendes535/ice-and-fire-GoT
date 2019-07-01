import React from "react";
import "./Character.css";
import moment from "moment";
import PropTypes from "prop-types";

const Character = ({
  character: { name, aliases, gender, died, fetchedBooks } = {}
}) => {
  return (
    <div className={"Character"} data-test="characterComponent">
      {name && (
        <div data-test='characterName'>
          <b>Name: </b>
          <div>{name}</div>
        </div>
      )}
      {aliases[0].length > 0 && (
        <div className={"Aliases"} data-test='characterAliases'>
          <b>Aliases: </b>
          <ul>
            {aliases.map((alias, index) => (
              <li key={index}>{alias}</li>
            ))}
          </ul>
        </div>
      )}
      <div data-test='characterGender'>
        <b>Gender: </b>
        <div>{gender}</div>
      </div>
      <div data-test='characterIsAlive'>
        <b>Is alive: </b>
        <div>{!died ? "Yes" : "No"}</div>
      </div>
      <div className={"Books"} data-test='characterBooks'>
        <b>Appear on: </b>
        <ul>
          {fetchedBooks &&
            fetchedBooks.map((book, id) => (
              <li key={id}>
                {book.name} - {moment(book.released).format("MMMM Do YYYY")}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    died: PropTypes.string,
    fetchedBooks: PropTypes.array
  })
};

export default Character;
