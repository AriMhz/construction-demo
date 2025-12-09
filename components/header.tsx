"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  theme?: "light" | "dark"
}

export function Header({ theme = "light" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Determine text color based on scroll state and theme
  // If scrolled, always use foreground (black/dark)
  // If not scrolled, use theme color: "light" -> white, "dark" -> foreground
  const textColor = scrolled ? "text-foreground" : theme === "dark" ? "text-foreground" : "text-white"
  const logoColor = scrolled ? "text-primary" : theme === "dark" ? "text-primary" : "text-white"
  const buttonVariant = scrolled ? "default" : theme === "dark" ? "default" : "outline" // For Get a Quote

  // Specific classes for the transparent state buttons
  const getQuoteClasses = scrolled
    ? ""
    : theme === "dark"
      ? "bg-transparent text-primary border-primary/30 hover:bg-primary/5"
      : "bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"

  const viewServicesClasses = scrolled
    ? ""
    : theme === "dark"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "bg-white text-primary hover:bg-white/90"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-2xl font-bold transition-colors ${logoColor}`}
        >
          HIMALAYA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/projects"
            className={`transition-colors hover:opacity-100 ${textColor}/80 hover:${textColor.replace("/80", "")}`}
          >
            Projects
          </Link>
          <Link
            href="/services"
            className={`transition-colors hover:opacity-100 ${textColor}/80 hover:${textColor.replace("/80", "")}`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:opacity-100 ${textColor}/80 hover:${textColor.replace("/80", "")}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`transition-colors hover:opacity-100 ${textColor}/80 hover:${textColor.replace("/80", "")}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            asChild
            className={getQuoteClasses}
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button
            asChild
            className={viewServicesClasses}
          >
            <Link href="/services">View Services</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-background px-4 py-4 space-y-3">
          <Link href="/projects" className="block py-2 text-foreground hover:text-primary">
            Projects
          </Link>
          <Link href="/services" className="block py-2 text-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="block py-2 text-foreground hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
            Contact
          </Link>
          <div className="pt-4 flex gap-2">
            <Button variant="outline" asChild className="flex-1">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href="/services">Services</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
