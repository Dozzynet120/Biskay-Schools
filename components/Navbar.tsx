"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
<nav className="w-full bg-green-700 text-white shadow-md fixed top-0 left-0 z-50">
<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
{/* Logo */}
<Link href="/">
<div className="flex items-center cursor-pointer">
<Image src="/images/logo1.jpg" alt="Biskay Schools Logo" width={50} height={50} className="mr-3" />
<h1 className="text-2xl font-bold">Biskay Schools</h1>
</div>
</Link>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
      {/* Home with dropdown */}
      <li
        className="relative cursor-pointer"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <span className="hover:text-yellow-300 transition-colors">Home</span>
        {isDropdownOpen && (
          <div className="absolute bg-white text-green-900 mt-3 p-4 rounded-xl shadow-lg w-64">
            <h3 className="font-bold mb-1 text-wine">Mission</h3>
            <p className="text-sm mb-2">
              To raise disciplined, morally upright, and academically excellent students.
            </p>
            <h3 className="font-bold mb-1 text-wine">Vision</h3>
            <p className="text-sm">
              Building future leaders equipped with knowledge, integrity, and innovation.
            </p>
          </div>
        )}
      </li>

      <li><Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link></li>
      <li><Link href="/academics" className="hover:text-yellow-300 transition-colors">Academics</Link></li>
      <li><Link href="/gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link></li>
      <li><Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>

      <li>
        <Link href="https://schoolviewers.com/biskay/portal">
          <button className="bg-wine px-4 py-2 rounded-lg hover:opacity-90 transition">
            Portal
          </button>
        </Link>
      </li>
    </ul>

    {/* Mobile Toggle */}
    <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-green-800 p-4 space-y-2">
      <div>
        <p
          className="cursor-pointer text-white font-medium"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Home
        </p>
        {isDropdownOpen && (
          <div className="bg-white text-green-900 p-4 rounded-lg mt-2">
            <h3 className="font-bold mb-1 text-wine">Mission</h3>
            <p className="text-sm mb-2">
              To raise disciplined, morally upright, and academically excellent students.
            </p>
            <h3 className="font-bold mb-1 text-wine">Vision</h3>
            <p className="text-sm">
              Building future leaders equipped with knowledge, integrity, and innovation.
            </p>
          </div>
        )}
      </div>

      <Link href="/about"><p className="text-white font-medium hover:text-yellow-300 transition">About</p></Link>
      <Link href="/academics"><p className="text-white font-medium hover:text-yellow-300 transition">Academics</p></Link>
      <Link href="/gallery"><p className="text-white font-medium hover:text-yellow-300 transition">Gallery</p></Link>
      <Link href="/contact"><p className="text-white font-medium hover:text-yellow-300 transition">Contact</p></Link>

      <Link href="/apply">
        <button className="bg-wine w-full mt-2 py-2 rounded-lg hover:opacity-90 transition">
          Apply Now
        </button>
      </Link>
    </div>
  )}
</nav>


);
}