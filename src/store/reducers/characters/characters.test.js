import * as actionTypes from "../../actions/actionTypes";
import charactersReducer from "./characters";

const initialState = {
  chars: [],
  loading: true,
  currentPage: 1,
  pageSize: 5,
  error: null,
  filterAliveChars: null,
  searchedChar: ""
};

describe("Characters Reducer", () => {
  it("Should return default state", () => {
    const newState = charactersReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state if receiving FETCH_CHARS_START type", () => {
    const newState = charactersReducer(undefined, {
      type: actionTypes.FETCH_CHARS_START
    });
    expect(newState).toEqual({ ...initialState, loading: true });
  });
  // it("Should return new state if receiving FETCH_CHARS_START type", () => {
  //   const error = new Error('Failed to fetch characters')
  //   const newState = charactersReducer(undefined, {
  //     type: actionTypes.FETCH_CHARS_FAIL
  //   });
  //   expect(newState).toEqual({ ...initialState, loading: false, error });
  // });
  //   it("Should return new state if receiving type", () => {
  //     const chars = `{
  //         "url": "https://www.anapioficeandfire.com/api/characters/1",
  //         "name": "",
  //         "gender": "Female",
  //         "culture": "Braavosi",
  //         "born": "",
  //         "died": "",
  //         "titles": [
  //           ""
  //         ],
  //         "aliases": [
  //           "The Daughter of the Dusk"
  //         ],
  //         "father": "",
  //         "mother": "",
  //         "spouse": "",
  //         "allegiances": [],
  //         "books": [
  //           "https://www.anapioficeandfire.com/api/books/5"
  //         ],
  //         "povBooks": [],
  //         "tvSeries": [
  //           ""
  //         ],
  //         "playedBy": [
  //           ""
  //         ],
  //         "fetchedBooks": [
  //           {
  //             "name": "A Feast for Crows",
  //             "released": "2005-11-08T00:00:00"
  //           }
  //         ]
  //       }
  //       ,{
  //         "url": "https://www.anapioficeandfire.com/api/characters/2",
  //         "name": "Walder",
  //         "gender": "Male",
  //         "culture": "",
  //         "born": "",
  //         "died": "",
  //         "titles": [
  //           ""
  //         ],
  //         "aliases": [
  //           "Hodor"
  //         ],
  //         "father": "",
  //         "mother": "",
  //         "spouse": "",
  //         "allegiances": [
  //           "https://www.anapioficeandfire.com/api/houses/362"
  //         ],
  //         "books": [
  //           "https://www.anapioficeandfire.com/api/books/1",
  //           "https://www.anapioficeandfire.com/api/books/2",
  //           "https://www.anapioficeandfire.com/api/books/3",
  //           "https://www.anapioficeandfire.com/api/books/5",
  //           "https://www.anapioficeandfire.com/api/books/8"
  //         ],
  //         "povBooks": [],
  //         "tvSeries": [
  //           "Season 1",
  //           "Season 2",
  //           "Season 3",
  //           "Season 4",
  //           "Season 6"
  //         ],
  //         "playedBy": [
  //           "Kristian Nairn"
  //         ],
  //         "fetchedBooks": [
  //           {
  //             "name": "A Game of Thrones",
  //             "released": "1996-08-01T00:00:00"
  //           },
  //           {
  //             "name": "A Clash of Kings",
  //             "released": "1999-02-02T00:00:00"
  //           },
  //           {
  //             "name": "A Storm of Swords",
  //             "released": "2000-10-31T00:00:00"
  //           },
  //           {
  //             "name": "A Feast for Crows",
  //             "released": "2005-11-08T00:00:00"
  //           },
  //           {
  //             "name": "A Dance with Dragons",
  //             "released": "2011-07-12T00:00:00"
  //           }
  //         ]
  //       }
  //       ,{
  //         "url": "https://www.anapioficeandfire.com/api/characters/3",
  //         "name": "",
  //         "gender": "Male",
  //         "culture": "",
  //         "born": "",
  //         "died": "",
  //         "titles": [
  //           ""
  //         ],
  //         "aliases": [
  //           "Lamprey"
  //         ],
  //         "father": "",
  //         "mother": "",
  //         "spouse": "",
  //         "allegiances": [
  //           "https://www.anapioficeandfire.com/api/houses/15"
  //         ],
  //         "books": [
  //           "https://www.anapioficeandfire.com/api/books/3"
  //         ],
  //         "povBooks": [],
  //         "tvSeries": [
  //           ""
  //         ],
  //         "playedBy": [
  //           ""
  //         ],
  //         "fetchedBooks": [
  //           {
  //             "name": "A Storm of Swords",
  //             "released": "2000-10-31T00:00:00"
  //           }
  //         ]
  //       }
  //       ,{
  //         "url": "https://www.anapioficeandfire.com/api/characters/4",
  //         "name": "",
  //         "gender": "Female",
  //         "culture": "Braavosi",
  //         "born": "",
  //         "died": "",
  //         "titles": [
  //           ""
  //         ],
  //         "aliases": [
  //           "The Merling Queen"
  //         ],
  //         "father": "",
  //         "mother": "",
  //         "spouse": "",
  //         "allegiances": [],
  //         "books": [
  //           "https://www.anapioficeandfire.com/api/books/5",
  //           "https://www.anapioficeandfire.com/api/books/8"
  //         ],
  //         "povBooks": [],
  //         "tvSeries": [
  //           ""
  //         ],
  //         "playedBy": [
  //           ""
  //         ],
  //         "fetchedBooks": [
  //           {
  //             "name": "A Feast for Crows",
  //             "released": "2005-11-08T00:00:00"
  //           },
  //           {
  //             "name": "A Dance with Dragons",
  //             "released": "2011-07-12T00:00:00"
  //           }
  //         ]
  //       },
  //       {
  //         "url": "https://www.anapioficeandfire.com/api/characters/5",
  //         "name": "",
  //         "gender": "Male",
  //         "culture": "",
  //         "born": "",
  //         "died": "",
  //         "titles": [
  //           ""
  //         ],
  //         "aliases": [
  //           "Old Crackbones"
  //         ],
  //         "father": "",
  //         "mother": "",
  //         "spouse": "",
  //         "allegiances": [],
  //         "books": [
  //           "https://www.anapioficeandfire.com/api/books/5"
  //         ],
  //         "povBooks": [],
  //         "tvSeries": [
  //           ""
  //         ],
  //         "playedBy": [
  //           ""
  //         ],
  //         "fetchedBooks": [
  //           {
  //             "name": "A Feast for Crows",
  //             "released": "2005-11-08T00:00:00"
  //           }
  //         ]
  //       }`;

  //     const newState = charactersReducer(initialState, {
  //       type: actionTypes.FETCH_CHARS_SUCCESS,
  //       chars
  //     });
  //     expect(newState).toEqual(chars);
  //   });
});
