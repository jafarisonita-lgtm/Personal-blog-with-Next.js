"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bg ">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-color"
          >
            MyBlog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-color">
            <Link href="/">Home</Link>

            <Link href="/blogs">Blogs</Link>

            <Link href="/blogs/new-article">New Article</Link>

          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-color text-2xl"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 py-4 text-color border-t border-cyan-200">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="/blogs" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>

            <Link
              href="/blogs/new-article"
              onClick={() => setIsOpen(false)}
            >
              New Article
            </Link>

            <Link href="/" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;