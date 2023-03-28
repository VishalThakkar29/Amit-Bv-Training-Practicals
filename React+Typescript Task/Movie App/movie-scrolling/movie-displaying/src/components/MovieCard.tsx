import React from "react";
import { ValCard } from "./MovieComponent";
import { useState } from "react";
import PopUpCard from "./PopUpCard";
export type PropsCard = {
  myData: ValCard;
};
const MovieCard: React.FC<PropsCard> = ({ myData }) => {
  const { title, body, id } = myData;
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && <PopUpCard movieImage={myData} />}
      <div className="card-info">
        <p className="card-id">{id}</p>
        <p>{body.substr(0, 150)}</p>
        <h2>{title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
