// Import React
import React from "react";
import clsx from "clsx";

interface Props {
  className: string;
  children: JSX.Element;
  postURL: string;
  posts: any;
}

const PostWrapper = ({ className, posts }: Props) => {
  // Modify classes
  const classes = clsx([className, "grid grid-cols-3"]);

  return (
    <div className={classes}>
      {/* {posts.map((post: any, index: number) => (
        <li key={index}>{post.title}</li>
      ))} */}
      Hello?????
    </div>
  );
};

export async function getStaticProps({
  postURL = "https://historicagency.com/wp-json/wp/v2/posts",
}: Props) {
  const res = await fetch(postURL);
  console.log("hello");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostWrapper;
