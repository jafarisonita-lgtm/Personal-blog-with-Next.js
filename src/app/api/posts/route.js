import { posts } from "@/data/posts";

export async function GET() {
  return Response.json(posts);
}

export async function POST(request) {
  // دریافت اطلاعات ارسال شده از فرم
  const body = await request.json();

  // ساخت مقاله جدید
  const newPost = {
    id: posts.length + 1,
    title: body.title,
    category: body.category,
    image: body.image,
    description: body.description,

    author: {
      username: "Sonita",
      img: "/img/A1.png",
      date: new Date().toLocaleDateString("en-GB"),
    },
  };

  // اضافه کردن مقاله به آرایه
  posts.unshift(newPost);

  // برگرداندن پاسخ
  return Response.json(
    {
      message: "Article created successfully",
      post: newPost,
    },
    {
      status: 201,
    }
  );
}