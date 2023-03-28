import React, { useState } from "react";
import { FetchData } from "./Home";
import MovieCard from "./MovieCard";

// import PopUpCard from "./PopUpCard";
export type PropsMovie = {
  movieInfo: FetchData[];
};
export type ValCard = {
  title: string;
  body: string;
  id: number;
};

const MovieComponent: React.FC<PropsMovie> = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Movie List</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal: ValCard, id: number) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
