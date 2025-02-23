import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();
  console.log(data)
  return data as Post[];
}


const Postpage = async() => {
  const posts = await getPosts();
  
  return <div>
    <h1>Posts</h1>
    {posts.map((post:Post) => {
      return <PostItem key={post.id} post={post } />
    })}
  </div>;
};

export default Postpage;

const PostItem = ({ post }) => {
  const { id, title, body } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
};