import React, { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import SearchInput from "./Components/SearchInput/SearchInput";
import Modal from "./Components/Modal/Modal";

import "./App.css";
import axios from "axios";
import DisplayMovies from "./Components/DisplayMovies/DisplayMovies";

const posterPathUrl = "https://image.tmdb.org/t/p/w500/";
const theMovieDbUrl = "https://api.themoviedb.org/3/search/";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [apiResults, setApiResults] = useState();
  const [modalMovieDetails, setModalMoviesDetails] = useState([]);
  const [isValidResponse, setIsValidResponse] = useState(false);

  const client = axios.create({ baseURL: theMovieDbUrl });

  useEffect(() => {
    // debouncing // set timeout before executing request
    const apiTimer = setTimeout(() => {
      client
        .get(
          "movie?api_key=364049bdfb52042bbdb56ef46354a632&query=" + inputSearch
        )
        .then((response) => {
          if (response.data.results.length > 0) {
            setApiResults(response.data.results);
            setIsValidResponse(true);
          } else {
            setIsValidResponse(false);
          }
        });
    }, 500);

    // clean up function runs before first effect function
    return () => {
      clearTimeout(apiTimer);
    };
  }, [inputSearch]);

  const changeHandler = (input) => {
    setInputSearch(input);
  };

  const ModalHandler = (id) => {
    const filteredForModal = apiResults.filter((movie) => movie.id === id);
    setModalMoviesDetails(...filteredForModal);
    console.log(modalMovieDetails);
  };

  return (
    <div className="App">
      <Modal
        movieDetails={modalMovieDetails}
        poster={posterPathUrl + modalMovieDetails.poster_path}
      />
      <Header />
      <SearchInput input={inputSearch} onChangeHandler={changeHandler} />
      <div className="container">
        <div className="row mt-3">
          {isValidResponse &&
            apiResults.map((item) => {
              return (
                <DisplayMovies
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  year={item.release_date}
                  poster={posterPathUrl + item.poster_path}
                  onShowDetails={ModalHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
