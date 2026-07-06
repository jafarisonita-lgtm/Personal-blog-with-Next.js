import React from "react";
import Container from "../components/Container";
import ArticlePost from "../components/ArticlePost";
import Link from "next/link";

export async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

async function Blogs({ searchParams }) {
  // گرفتن مقالات
  const posts = await getPosts();

  
  const params = await searchParams;
  const search = (params?.search || "").toLowerCase().trim();

  // اگر سرچ خالی باشد همه مقالات را نمایش بده
  const filteredPosts =
    search === ""
      ? posts
      : posts.filter((post) => {
          return (
            post.title.toLowerCase().includes(search) ||
            post.category.toLowerCase().includes(search) ||
            post.description.toLowerCase().includes(search) ||
            post.author.username.toLowerCase().includes(search)
          );
        });

  return (
    <section className="py-10">
      <Container>
        <div className="bg-white p-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Latest Posts
          </h2>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link href={`/blogs/${post.id}`} key={post.id}>
                  <ArticlePost post={post} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-semibold text-gray-500">
                No articles found 😔
              </h3>

              <p className="mt-3 text-gray-400">
                Try another keyword.
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-center text-color">
            <Link
              href="/"
              className="flex items-center gap-1 rounded bg-slate-50 px-4 py-3 text-sm font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>

              Load More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Blogs;