import { posts } from "@/data/posts";

export async function GET(request, { params }) {
  // گرفتن id از آدرس
  const { id } = await params;

  // تبدیل id از String به Number
  const postId = Number(id);

  // پیدا کردن پست مورد نظر
  const post = posts.find((item) => item.id === postId);

  // اگر پست پیدا نشد
  if (!post) {
    return Response.json(
      {
        message: "Post not found",
      },
      {
        status: 404,
      }
    );
  }

  // برگرداندن اطلاعات پست
  return Response.json(post);
}