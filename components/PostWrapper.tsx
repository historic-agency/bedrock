import React from "react";

import clsx from "clsx";

interface Props {
  className: string;
  children: JSX.Element;
  postURL: string;
  posts: any;
}

const PostWrapper = ({
  className,
  hello,
}: {
  className: string;
  hello: string;
}) => {
  // Modify classes
  const classes = clsx([className, "grid grid-cols-3"]);

  return <div className={classes}>Hello: {hello ?? "world"}</div>;
};

// export async function getStaticProps() {
//   return {
//     props: {
//       hello: "Hello World",
//     },
//   };
// }

export default PostWrapper;
