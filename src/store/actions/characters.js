import * as actionType from "./actionTypes";
import axios from "axios";

export const fetchChars = (currentPage, isAlive, name) => {
  return dispatch => {
    let query = `?`;
    if (currentPage) query += `page=${currentPage}`;
    if (typeof isAlive === "boolean") query += `&isAlive=${isAlive}`;
    if (name) query += `&name=${name}`;
    dispatch(fetchCharsStart());
    axios
      .get(`https://www.anapioficeandfire.com/api/characters${query}`)
      .then(({ data }) => {
        return data;
      })
      .then(async characters => {
        //Fetching books...
        let charsWithBooks = characters;
        await charsWithBooks.map(async (char, charId) => {
          const fetchedBooks = [];
          return await char.books.map(url => {
            axios.get(url).then(({ data }) => {
              charsWithBooks[charId].fetchedBooks = fetchedBooks.concat(data);
            });
          });
        });
        return dispatch(fetchCharsSuccess(charsWithBooks));
      })
      .catch(err => {
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
