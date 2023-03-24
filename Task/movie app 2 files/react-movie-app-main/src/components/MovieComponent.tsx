import React from "react";
// import styled from "styled-components";
import { SelectedMovie } from "../App";
import "./MovieComponent.css";

// const MovieContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   width: 280px;
//   box-shadow: 0 3px 10px 0 #aaa;
//   cursor: pointer;
// `;
// const CoverImage = styled.img`
//   object-fit: cover;
//   height: 362px;
// `;
// const MovieName = styled.span`
//   font-size: 18px;
//   font-weight: 600;
//   color: black;
//   margin: 15px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;
// const InfoColumn = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const MovieInfo = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   color: black;
//   white-space: nowrap;
//   overflow: hidden;
//   text-transform: capitalize;
//   text-overflow: ellipsis;
// `;
interface TypeData {
  Poster: string;
  Title: string;
  Type: string;
  imdbRating: string;
  Year: string;
  Language: string;
  Rated: string;
  selectedMovie: SelectedMovie;
  onMovieSelect: any;
  movie: any;
}
const MovieComponent: React.FC<TypeData> = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="MovieContainer"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onMouseLeave={() => {
        props.onMovieSelect("");
      }}
    >
      <img className="CoverImage" src={Poster} alt={Title} />
      <span className="MovieName">{Title}</span>
      <div className="InfoColumn">
        <span className="MovieInfo">Year : {Year}</span>
        <span className="MovieInfo">Type : {Type}</span>
      </div>
    </div>
  );
};
export default MovieComponent;
