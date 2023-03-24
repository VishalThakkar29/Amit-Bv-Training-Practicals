import React from "react";
import Card from "react-bootstrap/Card";

import { FetchData } from "./Home";
// import { PropsCard } from "./MovieCard";
import { ValCard } from "./MovieComponent";
type PopCard = {
  movieImage: ValCard;
};
const PopUpCard: React.FC<PopCard> = ({ movieImage }) => {
  const { title, body, id } = movieImage;
  return (
    <>
      <Card style={{ width: "9rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PopUpCard;

// userId: ;
// id:
// title:;
// body:

// import Card from 'react-bootstrap/Card';

// function TextExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default TextExample;
