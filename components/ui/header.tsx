'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/" className="font-bold hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">How it works</Link>
              </li>
              <li>
                <Link href="/" className="font-bold hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Visura</Link>
              </li>
              <li>
                <Link href="/" className="font-bold hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/" className="font-bold hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Share</Link>
              </li>
              <li>
                <Link href="/" className="font-bold hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Finalize</Link>
              </li>
              <li>
                <Link href="/signin" className="font-bold hover:text-gray-900 px-4 py-1 flex items-center transition duration-150 ease-in-out border-2 rounded-full text-sm border-main-100">Log in</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white font-base text-sm bg-main-100 rounded-full ml-3">
                  <span>Sign up for free</span>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
