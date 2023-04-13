import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";
import classes from "./index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

import PostsHomePage from "../../../components/posts/PostsHomePage";
export type PostsProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
export type PostsNewProps = {
  posts: PostsProps[];
};
const PostPage: React.FC<{ posts: PostsNewProps }> = (props) => {
  const loading = useSelector((state: any) => state.loading);
  const { posts } = props;

  //   //scroll logic
  //   const [card, setCard] = useState(posts.posts);
  //   const [page, setPage] = useState(card.length);
  //   const [loading, setLoading] = useState(true);
  //   //   console.log(posts.posts);
  //   const getCardData = async () => {
  //     const res = await fetch(
  //       //   `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  //       `https://dummyjson.com/posts?limit=10&&skip=${page}`
  //     );
  //     const data = await res.json();

  //     setCard((prev) => [...prev, ...data.posts]);
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     getCardData();
  //   }, [page]);

  //   const handelInfiniteScroll = async () => {
  //     // console.log("scrollHeight" + document.documentElement.scrollHeight);
  //     // console.log("innerHeight" + window.innerHeight);
  //     // console.log("scrollTop" + document.documentElement.scrollTop);
  //     try {
  //       if (
  //         window.innerHeight + document.documentElement.scrollTop + 1 >=
  //         document.documentElement.scrollHeight
  //       ) {
  //         setLoading(true);
  //         setPage((prev) => prev + 10);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handelInfiniteScroll);
  //     return () => window.removeEventListener("scroll", handelInfiniteScroll);
  //   }, []);

  //   //Scroll logic ends here
  //   console.log(card);
  const [posts1, setPosts1] = useState(posts.posts);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `${process.env.POST}?limit=10&&skip=${posts1.length}`
    );
    const newPosts = await res.json();
    setPosts1((post1) => [...post1, ...newPosts.posts]);
    if (posts1.length === 150) {
      setHasMore(false);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts1.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<Loading></Loading>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {loading && <Loading />}
        <div className={classes.flex}>
          <PostsHomePage posts={posts1} />
        </div>
      </InfiniteScroll>

      {/* {loading && <Loading size="md" />} */}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.POST}?limit=10`);
  //   https://dummyjson.com/posts?limit=10
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

export default PostPage;
