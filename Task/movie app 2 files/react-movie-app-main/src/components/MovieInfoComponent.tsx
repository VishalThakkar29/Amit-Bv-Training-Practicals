import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
// import styled from "styled-components";

import { SelectedMovie } from "../App";

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 20px 30px;
//   justify-content: center;
//   border-bottom: 1px solid lightgray;
// `;
// const CoverImage = styled.img`
//   object-fit: cover;
//   height: 350px;
// `;
// const InfoColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 20px;
// `;
// const MovieName = styled.span`
//   font-size: 22px;
//   font-weight: 600;
//   color: black;
//   margin: 15px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-transform: capitalize;
//   text-overflow: ellipsis;
//   & span {
//     opacity: 0.8;
//   }
// `;
// const MovieInfo = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   color: black;
//   overflow: hidden;
//   margin: 4px 0;
//   text-transform: capitalize;
//   text-overflow: ellipsis;

//   & span {
//     opacity: 0.5;
//   }
// `;
// const Close = styled.span`
//   font-size: 16px;
//   font-weight: 600;
//   color: black;
//   background: lightgray;
//   height: fit-content;
//   padding: 8px;
//   border-radius: 50%;
//   cursor: pointer;
//   opacity: 0.8;
// `;
type MovieProp = {
  selectedMovie: SelectedMovie[];
  onMovieSelect: any;

  // onMovieSelect: any;
};

const MovieInfoComponent: React.FC<MovieProp> = (props) => {
  const [movieInfo, setMovieInfo] = useState<SelectedMovie>();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="Container">
      {movieInfo ? (
        <>
          <img
            className="CoverImage"
            src={movieInfo?.Poster}
            alt={movieInfo?.Title}
          />
          <div className="InfoColumn">
            <span className="MovieName">
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </span>
            <span className="MovieName">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </span>
            <span className="MovieName">
              Year: <span>{movieInfo?.Year}</span>
            </span>
            <span className="MovieName">
              Language: <span>{movieInfo?.Language}</span>
            </span>
            <span className="MovieName">
              Rated: <span>{movieInfo?.Rated}</span>
            </span>
          </div>
          <span className="Close" onClick={() => props.onMovieSelect()}>
            X
          </span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
