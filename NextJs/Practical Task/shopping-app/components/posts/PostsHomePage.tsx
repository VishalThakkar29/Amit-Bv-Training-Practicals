import { PostsProps } from "@/pages/posts";
import { Card, Grid, Text } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLoadingCondition } from "../../src/action/index";
type PostsHomePageProps = {
  posts: PostsProps[];
};
const PostsHomePage: React.FC<PostsHomePageProps> = ({ posts }) => {
  const dispatch = useDispatch();
  const postsNew = posts.map((data) => {
    return (
      <>
        <Card css={{ p: "$6", mw: "400px" }} key={data.id}>
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {data.id}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{data.title}</Text>
            </Grid>
          </Grid.Container>

          <Card.Body css={{ py: "$2" }}>
            <Text>{data.body}</Text>
          </Card.Body>
          <Card.Footer>
            {/* <Link color="primary" href={`/posts/${data.id}`}>
              View Post Details
            </Link> */}
            <Link href={`/posts/${data.id}`}>
              <p onClick={() => dispatch(setLoadingCondition())}>
                View Post Details
              </p>
            </Link>
          </Card.Footer>
        </Card>
      </>
    );
  });
  return <>{postsNew}</>;
};

export default PostsHomePage;
