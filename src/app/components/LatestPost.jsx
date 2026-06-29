import React from "react";
import Container from "./Container";
import ArticlePost from "./ArticlePost";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

async function LatestPost() {
  const posts = await getPosts();

  return (
    <section className="-mt-32 relative z-10 pb-10">
      <Container>
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Latest Posts</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post) => (
              <ArticlePost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LatestPost;
