export const initialState = {
  loading: true,
  movies: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,

      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
