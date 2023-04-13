import { PostsNewProps, PostsProps } from "@/pages/posts";
import React from "react";
import classes from "./PostsHomePage.module.css";
// interface PostsDetailsPageProps {
//   data: PostsProps;
// }
const PostsDetailsPage: React.FC<{ data: PostsProps }> = ({ data }) => {
  return (
    <>
      <div className={classes.card} key={data.id}>
        <div className={classes.cont1}>{data.title}</div>
        <div className={classes.cont2}>
          <h2>{data.reactions}</h2>
          <h3>UserId:{data.userId}</h3>

          <p> {data.body}</p>
        </div>
      </div>
    </>
  );
};

export default PostsDetailsPage;
