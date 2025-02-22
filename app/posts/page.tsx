import Link from "next/link";

async function getPost() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records');
  const data = await res.json();
  return data?.items as any[];
}


const Postpage = async() => {
  const posts = await getPost();
  
  return <div>
    <h1>Posts</h1>
    {posts?.map((post) => {
      return <PostItem key={post.id} post={post } />
    })}
  </div>;
};

export default Postpage;

const PostItem = ({ post }: any) => { 
  const { id, title, updated } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h3>{title}</h3>
        <p>{updated}</p>
      </div>
    </Link>
  );
}