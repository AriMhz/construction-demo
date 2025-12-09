"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = ["Built", "Crafted", "Designed", "Engineered"]
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-construction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        {/* Overlay for readability - Dark mode preferred */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80"></div>
      </div>

      {/* Background decoration - Adjusted for dark theme */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-3xl">
          {/* Tagline */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium text-white">Premium Construction in Nepal</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg">
            Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-200">
              {mounted ? words[wordIndex] : "Built"}
            </span>
            <br />
            to Last
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            From residential luxury to commercial innovation, HIMALAYA BUILD CO. delivers exceptional construction
            excellence across Nepal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/projects" className="flex items-center gap-2">
                Explore Projects
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
