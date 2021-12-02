// import React from "react";

interface Props {
  className: string;
  apiURL: string;
}

const PostWrapper = (props: Props) => {
  return (
    <div className={props.className}>
      API URL: {props.apiURL ?? "https://google.com"}
    </div>
  );
};

// export async function getStaticProps() {
//   return {
//     props: {
//       hello: "Hello World",
//     },
//   };
// }

export default PostWrapper;
