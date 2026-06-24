import React from "react";
import Container from "../components/Container";
import ArticlePost from "../components/ArticlePost";
import Link from "next/link";


function Blogs() {
  return (
    <section className="py-10">
      <Container>
        <div className=" bg-white p-8 ">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ArticlePost />
            <ArticlePost />
            <ArticlePost />
            <ArticlePost />
            <ArticlePost />
            <ArticlePost />
          </div>

          <div className="mt-12 flex justify-center text-color ">
            <Link
              href="/"
              className="flex items-center gap-1  px-4 py-3 text-sm font-semibold bg-slate-50 rounded "
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