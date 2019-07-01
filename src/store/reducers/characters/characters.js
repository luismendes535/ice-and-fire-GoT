import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  chars: [],
  loading: true,
  currentPage: 1,
  pageSize: 5,
  error: null,
  filterAliveChars: null,
  searchedChar: ""
};

const fetchCharsStart = state => ({ ...state, loading: true });

const fetchCharsSuccess = (state, action) => ({
  ...state,
  chars: action.chars,
  loading: false
});

const fetchCharsFail = (state, action) => ({ ...state, loading: false, error: action.error });

const toggleAliveChars = state => ({
  ...state,
  filterAliveChars: state.filterAliveChars ? null : true
});

const updateSearchInput = (state, action) => {
  return { ...state, currentPage: 1, searchedChar: action.searchedText };
};

const handlePageClick = (state, action) => ({
  ...state,
  currentPage: action.currentPage,
  loading: true
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARS_START:
      return fetchCharsStart(state);
    case actionTypes.FETCH_CHARS_SUCCESS:
      return fetchCharsSuccess(state, action);
    case actionTypes.FETCH_CHARS_FAIL:
      return fetchCharsFail(state, action);
    case actionTypes.TOGGLE_ALIVE_CHARS:
      return toggleAliveChars(state);
    case actionTypes.UPDATE_SEARCH_INPUT:
      return updateSearchInput(state, action);
    case actionTypes.HANDLE_PAGE_CLICK:
      return handlePageClick(state, action);
    default:
      return state;
  }
};

export default reducer;
