import React from "react";
import { PostsProps } from ".";
import classes from "./[postId].module.css";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";
const PostsDetailsPage: React.FC<{ posts: PostsProps }> = ({ posts }) => {
  const loading = useSelector((state: { loading: boolean }) => state.loading);
  return (
    <>
      {loading && <Loading />}
      <div className={classes.card} key={posts.id}>
        <div className={classes.cont1}>{posts.title}</div>
        <div className={classes.cont2}>
          <h2>{posts.reactions}</h2>
          <h3>UserId:{posts.userId}</h3>

          <p> {posts.body}</p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: {
  params: { postId: string };
}) => {
  const { postId } = context.params;
  const res = await fetch(`${process.env.POST}/${postId}`);
  const data = await res.json();
  return {
    props: {
      posts: data,
      postId: postId,
    },
  };
};

export default PostsDetailsPage;
