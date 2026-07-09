import React from "react";
import Container from "./Container";
import ArticlePost from "./ArticlePost";
import Link from "next/link";
import { getBaseUrl } from "@/lib/getBaseUrl";

async function getPosts() {
  const url = `${getBaseUrl()}/api/posts`;

  console.log("URL:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  console.log("STATUS:", res.status);
  console.log("FINAL URL:", res.url);
  console.log("CONTENT-TYPE:", res.headers.get("content-type"));

  const text = await res.text();

  console.log("RESPONSE:");
  console.log(text.substring(0, 300));

  return JSON.parse(text);
}

async function LatestPost() {
  const posts = await getPosts();

  return (
    <section className="-mt-32 relative z-10 pb-10">
      <Container>
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Latest Posts
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post) => (
              <Link href={`/blogs/${post.id}`} key={post.id}>
                <ArticlePost post={post} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LatestPost;