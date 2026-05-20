"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const SnailLogoSVG = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Snail shell */}
    <circle cx="14" cy="10" r="5" />
    <circle cx="14" cy="10" r="3" />
    {/* Snail body */}
    <path d="M 12 15 Q 10 17 8 18" />
    {/* Snail eyes */}
    <circle cx="11" cy="8" r="1" fill="currentColor" />
    <circle cx="13" cy="8" r="1" fill="currentColor" />
  </svg>
)

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent border-b border-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <SnailLogoSVG />
            <span className="text-xl font-bold text-black dark:text-white">
              Snail.AI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Get Started Button */}
          <Button className="w-fit">
            <a href="#hero">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
