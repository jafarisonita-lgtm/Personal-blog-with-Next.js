import React from "react";
import Image from "next/image";
import blogsImages from "../../assets/img/1.png";
import AvatorImage from "../../assets/img/A1.png"

async function ArticlePost({post}) {

console.log(post);

  return (
    <article className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden">
      <Image
        src={post.image}
        alt="post image"
        className="w-full h-60 object-cover"
        width={300}
        height={200}
      />

      <div className="p-5">
        <span className="text-sm text-color">
          {post.job}
          
        </span>

        <h2 className="font-bold text-xl flex justify-between mt-3 mb-4">
         {post.title}
              
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </h2>

        <p className="text-slate-600 text-sm mb-6">
          {post.description}
         
        </p>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white mr-3">
            <Image src={post.author.img} alt="avator" width={100} height={100}/>
          </div>

          <div className="text-xs">
            <p className="font-medium">
             {post.author.username}
            </p>

            <p className=" text-slate-700">
              {post.author.date}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticlePost;