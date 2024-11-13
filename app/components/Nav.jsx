'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname=usePathname();
  const showNavbar=["/","/generate"].includes(pathname)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }



  return (
 <>
    {showNavbar &&  
    <nav className="bg-white shadow-md  md:flex 
     rounded-full  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
             <Image src="/logo2.webp"  width={180} height={180} alt=""/>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
    }
</>
  )
}