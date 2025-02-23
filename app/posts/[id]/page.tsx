async function getPost(postId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
 }

const PostDetailPage = async ({ params }) => {
  const post =await getPost(params.id);
  return <div>
    <h1>posts/{post.id}</h1>
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  </div>;
}

export default PostDetailPage;