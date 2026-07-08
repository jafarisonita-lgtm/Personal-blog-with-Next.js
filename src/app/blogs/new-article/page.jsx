"use client";

import Container from "@/app/components/Container";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function NewArticle() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.image ||
      !formData.description
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Failed to create article");
        return;
      }

      alert("Article created successfully.");

      setFormData({
        title: "",
        category: "",
        image: "",
        description: "",
      });

      // ابتدا کش صفحه را رفرش کن
      router.refresh();

      // سپس به صفحه بلاگ برو
      router.push("/blogs");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <Container>
      <section className="py-8 md:py-12">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white shadow-lg p-6 md:p-10">
          <h1 className="mb-8 text-2xl md:text-3xl font-bold text-center text-slate-800">
            Create New Article
          </h1>

          <form onSubmit={submitHandler} className="space-y-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Title</label>

              <input
                type="text"
                name="title"
                placeholder="Article title"
                value={formData.title}
                onChange={changeHandler}
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium">Category</label>

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={changeHandler}
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium">Image URL</label>

              <input
                type="text"
                name="image"
                placeholder="/img/10.jpg"
                value={formData.image}
                onChange={changeHandler}
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium">Description</label>

              <textarea
                name="description"
                rows={6}
                placeholder="Write your article..."
                value={formData.description}
                onChange={changeHandler}
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="button-create w-full rounded-md py-3 text-white font-semibold transition hover:opacity-90"
            >
              Create Article
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}

export default NewArticle;