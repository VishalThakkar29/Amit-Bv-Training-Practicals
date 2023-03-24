import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "1b47d604";

export type SelectedMovie = {
  Poster: string;
  Title: string;
  Type: string;
  imdbRating: string;
  Year: string;
  Language: string;
  Rated: string;
};

const App: React.FC = () => {
  const [searchQuery, updateSearchQuery] = useState("");

  const [oldMovieList, setOldMovieList] = useState<SelectedMovie[]>([]);
  const [newMovieList, setNewMovieList] = useState<SelectedMovie[]>([]);
  const [selectedMovie, onMovieSelect] = useState<SelectedMovie[]>();

  const [timeoutId, updateTimeoutId] = useState<NodeJS.Timeout>();

  const fetchData = async (searchString: string) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    setOldMovieList(response.data.Search);
  };

  useEffect(() => {
    setNewMovieList(oldMovieList.slice(0, 10));
  }, [oldMovieList]);
  // eslint-disable-next-line
  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setNewMovieList(oldMovieList.slice(0, 10));
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [handelInfiniteScroll]);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  // scroll(){
  //   const update += 10
  //   if(ed){
  //     newupdateMovieList([newmovieList, ...movieList.slice(0+update,update)))
  //   }
  // }
  return (
    <div className="Container">
      <div className="Header">
        <div className="AppName">Movie Fetching App</div>
        <div className="SearchBox">
          <input
            className="SearchInput"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className="MovieListContainer">
        {newMovieList?.length ? (
          newMovieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
              Poster={""}
              Title={""}
              Type={""}
              imdbRating={""}
              Year={""}
              Language={""}
              Rated={""}
              selectedMovie={{
                Poster: "",
                Title: "",
                Type: "",
                imdbRating: "",
                Year: "",
                Language: "",
                Rated: "",
              }}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default App;
