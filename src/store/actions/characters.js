import * as actionType from "./actionTypes";
import axios from "axios";

export const fetchChars = (currentPage, isAlive, name) => {
  return dispatch => {
    let query = `?pageSize=5`;
    if (currentPage) query += `&page=${currentPage}`;
    if (isAlive) query += `&isAlive=${isAlive}`;
    if (name) query += `&name=${name}`;
    dispatch(fetchCharsStart());
    axios
      .get(`https://www.anapioficeandfire.com/api/characters${query}`)
      .then(({ data }) => {
        return data;
      })
      .then(async characters => {
        //Iterating all characters
        for (let i = 0; i < characters.length; i++) {
          characters[i].fetchedBooks = [];
          //Iterating books for each character...
          for (let j = 0; j < characters[i].books.length; j++) {
            await axios.get(characters[i].books[j]).then(({ data }) => {
              console.log("Fetching...");
              characters[i].fetchedBooks.push({
                name: data.name,
                released: data.released
              });
            });
          }
        }
        console.log("Characters: ", characters);
        dispatch(fetchCharsSuccess(characters));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchCharsFail(err));
      });
  };
};
export const fetchCharsSuccess = chars => {
  return {
    type: actionType.FETCH_CHARS_SUCCESS,
    chars
  };
};
export const fetchCharsFail = error => {
  return {
    type: actionType.FETCH_CHARS_FAIL,
    error
  };
};

export const fetchCharsStart = () => {
  return {
    type: actionType.FETCH_CHARS_START
  };
};

export const updateSearchInput = event => {
  return {
    type: actionType.UPDATE_SEARCH_INPUT,
    searchedText: event
  };
};

export const toggleAliveChars = () => {
  return {
    type: actionType.TOGGLE_ALIVE_CHARS
  };
};

export const handlePageClick = currentPage => {
  return {
    type: actionType.HANDLE_PAGE_CLICK,
    currentPage
  };
};
