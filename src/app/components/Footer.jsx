"use client"
import React from 'react'
import Container from './Container'
import Link from 'next/link'
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
    <div className='mt-5 h-20 nav-bg'>
        <Container>
            <div className='flex justify-between items-center py-8'>
                <span className='text-xs font-semibold text-gray-500'>©2026 Front-end Dev, All rights reserved.</span>
                <div className='flex'>
                  <nav className='text-gray-500 text-sm font-semibold'>
                    <Link href="/" className='mr-2'>
                       <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link href="/"  className='mr-2' >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="/"  className='mr-2' >
                       <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link href="/"  className='mr-2'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link href="/"  className='mr-2' >
                      <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                  </nav>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer