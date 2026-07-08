import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

async function PostDetail({ params }) {
  const { id } = await params;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article className="max-w-4xl mx-auto my-10 rounded-lg bg-white p-8 shadow">
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={500}
          className="w-full h-100 object-cover rounded-lg mb-8"
        />

        <span className="text-sm font-semibold text-color">
          {post.job}
        </span>

        <h1 className="text-4xl font-bold mt-3 mb-6">
          {post.title}
        </h1>

        <p className="text-slate-600 leading-8 mb-10">
          {post.description}
        </p>

        <div className="flex items-center gap-4 border-t pt-6">
          <Image
            src={post.author.img}
            alt={post.author.username}
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <h4 className="font-semibold">
              {post.author.username}
            </h4>

            <p className="text-sm text-slate-500">
              {post.author.date}
            </p>
          </div>
        </div>
      </article>
    </Container>
  );
}

export default PostDetail;