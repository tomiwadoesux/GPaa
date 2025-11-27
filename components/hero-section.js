"use client"

import { useEffect, useState } from "react"
import { ArrowRightIcon } from "./icons"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${isLoaded ? "animate-ken-burns" : ""}`}
          style={{
            backgroundImage: "url('/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-6">In Loving Memory</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 text-balance">
           Timothy Adebayo Adeku
          </h1>
          <p className="text-white/80 text-xl md:text-2xl mb-8 font-light">1952 — 2024</p>
          <blockquote className="text-white/90 text-lg md:text-xl italic max-w-2xl mx-auto mb-12 leading-relaxed">
            "The greatest gift we can give to others is the gift of our authentic presence, honesty and unconditional love."
          </blockquote>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors group"
          >
            Celebrate His Life
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
