import { GetServerSideProps } from "next";

interface Props {
  className: string;
  apiURL: string;
  blogPosts: [
    {
      id: number;
      title: {
        rendered: string;
      };
    }
  ];
}

const PostWrapper = (props: Props) => {
  console.log(props.blogPosts);
  return (
    <ul className={`${props.className} text-red-500`}>
      {props.blogPosts.map((post: any) => (
        <li key={post?.id}>{post?.title.rendered}</li>
      ))}
    </ul>
  );
};

export default PostWrapper;
