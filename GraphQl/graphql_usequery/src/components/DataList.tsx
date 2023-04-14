import React from "react";
import { DataProps } from "../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const DataList: React.FC<{ data: DataProps[] }> = ({ data }) => {
  //   console.log(process.env.REACT_LINK_APOLLO);
  return (
    <>
      {data.map((val) => {
        return (
          <div key={val.id}>
            <Card sx={{ maxWidth: 345 }} key={val.id}>
              <CardActionArea>
                <h1> {val.id}</h1>
                <CardMedia
                  component="img"
                  height="140"
                  image={val.photo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default DataList;
