"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle('');
    router.refresh();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
