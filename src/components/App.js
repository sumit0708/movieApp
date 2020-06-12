import React, { useReducer, useEffect } from "react";
import MovieComp from "./MovieComp";
import SearchComp from "./SearchComp";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies } = state;

  const checkMovies = movies.map((movie, index) => (
        <MovieComp key={`${index}-${movie.Title}`} movie={movie} />
      ))

  return (
    <div className="App">
      <div className="container">
        <SearchComp search={search} />
        <p style={{ margin: '64px', fontSize: '64px'}}>Movies Names here: </p>
        <div className="movies">{checkMovies}</div>
      </div>
    </div>
  );
};

export default App;
