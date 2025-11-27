"use client"

import Link from "next/link"
import { HeartIcon } from "./icons"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-wide block mb-4 font-bold hover:text-secondary transition-colors">
              Timothy Adebayo Adeku
            </Link>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed text-base">
              Celebrating a life of grace, wisdom, and unconditional love. May his memory be a blessing to all who knew him and continue to inspire generations to come.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">Home</Link></li>
              <li><Link href="/book" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">Book</Link></li>
              <li><Link href="/testimonials" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">Memories</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="mailto:legacy70y@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">legacy70y@gmail.com</a></li>
              <li><Link href="/donate" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">Donate</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Timothy Adebayo Adeku Memorial. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-secondary animate-pulse" />
              <span>by his family</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
