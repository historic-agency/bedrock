interface Props {
  className: string;
  postURL: string;
  test: string;
  posts: object;
}

const PostCard = ({ className, posts }: Props) => (
  <div className={className}>
    <span>{posts}</span>
  </div>
);
export default PostCard;
