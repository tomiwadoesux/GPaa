"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { QuoteIcon, ArrowRightIcon, HeartIcon } from "./icons"
import { cn } from "@/lib/utils"
import { testimonials } from "@/data/testimonials"

export function TestimonialsPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [randomTestimonials, setRandomTestimonials] = useState([])
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
    setRandomTestimonials(shuffled.slice(0, 6))
  }, [])

  useEffect(() => {
    if (randomTestimonials.length === 0) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % randomTestimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [randomTestimonials])

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % randomTestimonials.length)
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + randomTestimonials.length) % randomTestimonials.length)
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-4">Treasured Memories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Words from Those Who Loved Him
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The memories and tributes shared by family, friends, and all those whose lives were touched by Pastor Bayo
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative"
          >
            {/* Left Arrow */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + randomTestimonials.length) % randomTestimonials.length)}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -ml-16 z-10 p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonials */}
            <div>
              {randomTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-all duration-700 ease-in-out",
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none",
                  )}
                >
                  <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm border border-border">
                    <QuoteIcon className="w-10 h-10 text-secondary/30 mb-6" />
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
                      {testimonial.message}
                    </blockquote>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.relationship}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % randomTestimonials.length)}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -mr-16 z-10 p-2 rounded-full hover:bg-secondary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {randomTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-secondary w-8" : "bg-border hover:bg-muted-foreground",
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors group"
          >
            Read All Memories
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/testimonials#share"
            className="inline-flex items-center gap-2 border border-primary text-foreground px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:bg-muted transition-colors group"
          >
            <HeartIcon className="w-4 h-4" />
            Share Your Memory
          </Link>
        </div>
      </div>
    </section>
  )
}
