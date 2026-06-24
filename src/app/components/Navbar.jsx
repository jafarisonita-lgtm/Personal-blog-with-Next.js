import React from 'react'
import Container from './Container'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex  items-center  py-4  nav-bg border-b-slate-700'>
    <Container>
        <div className='flex text-color'>
            <Link href="/" className='mr-8'>Home</Link>
            <Link href="/blogs" className='mr-8'>Blogs</Link>
            <Link href="/" className='mr-8' >About</Link>
            <Link href="/" className='mr-8'>Contact</Link>
        </div>
    </Container>
    </nav>
  )
}

export default Navbar