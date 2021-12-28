import Link from "next/link";

interface Props {
  className: string;
  apiURL: string;
  posts: [
    {
      id: number;
      title: {
        rendered: string;
      };
    }
  ];
}

const PostWrapper = ({ className, posts }: Props) => {
  return (
    <ul className={`${className} grid grid-cols-3`}>
      {posts ? (
        posts.map((post: any) => (
          <li key={post?.id}>
            <h4>{post?.title.rendered}</h4>
            <Link href={`posts/${post.id}`}>
              <a>Read more</a>
            </Link>
          </li>
        ))
      ) : (
        <li>
          <h4>Test Post</h4>
          <Link href="#">
            <a>Read more</a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default PostWrapper;
