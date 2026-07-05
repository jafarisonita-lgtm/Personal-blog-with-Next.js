"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="nav-bg py-6 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-center md:text-left font-semibold text-gray-500">
            ©2026 Front-end Dev, All rights reserved.
          </span>

          <nav className="flex gap-5 text-gray-500 text-xl">
            <Link href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>

            <Link href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link href="/">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;