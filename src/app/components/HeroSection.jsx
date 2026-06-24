import React from "react";
import Container from "./Container";

function HeroSection() {
  return (
    <section className="bg-slate-50 pt-20 pb-52">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 rounded-full bg-gray-200 px-4 py-2 text-xs font-semibold hero-subtitle-text">
            Our Blog
          </span>

          <h1 className="mb-8 text-4xl md:text-6xl font-extrabold hero-title">
            Resources and Insights
          </h1>

          <p className="mb-12 max-w-2xl text-lg md:text-xl font-medium hero-subtitle-text">
            The latest industry news, interviews, technologies, and resources.
          </p>

          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>

            <input
              type="search"
              placeholder="Search articles..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;