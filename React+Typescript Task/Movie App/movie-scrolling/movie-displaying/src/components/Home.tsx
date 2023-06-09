import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";
export type FetchData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const Home: React.FC = () => {
  const [card, setCard] = useState<FetchData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [dataover, setDataOver] = useState(false);
  let URL = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;

  const getCardData = async () => {
    const res = await fetch(URL);

    const data = await res.json();
    console.log(data.length);
    if (data.length === 0) {
      setDataOver(true);
      setLoading(false);
    }
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    if (!dataover) {
      getCardData();
    }
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  console.log(card);
  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
