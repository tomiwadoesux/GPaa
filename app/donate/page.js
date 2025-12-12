"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import {
  HeartIcon,
  BookIcon,
  CopyIcon,
  CheckIcon,
} from "@/components/icons";

const initiatives = [
  {
    id: 1,
    title: "Encouragement & Inspiration",
    description:
      "He was known for lifting others up. To continue that legacy, his inspirational book will be promoted through the foundation, with proceeds dedicated to supporting its mission.",
    icon: "📚",
  },
  {
    id: 2,
    title: "Educational Support",
    description:
      "He believed strongly in nurturing young minds. The foundation will provide support and advancement opportunities for outstanding students in Mathematics and Physics at Oshogbo Grammar School, where he once studied.",
    icon: "🎓",
  },
  {
    id: 3,
    title: "Community & Faith Support",
    description:
      "Part of his life's passion was investing in the church. The foundation will contribute to the Church Dome Fund, helping to pay off the property and strengthening the community he loved.",
    icon: "⛪",
  },
  {
    id: 4,
    title: "Victory Global Network",
    description:
      "He maintained a long-standing commitment to Victory Global Network in South Africa. The foundation will continue to support this ministry as part of preserving his spiritual and humanitarian legacy.",
    icon: "🌍",
  },
];

export default function DonatePage() {
  const [copied, setCopied] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-background"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section - Darker */}
        <section className="relative pt-40 pb-32 overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-primary/95"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm mb-8 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Continuing His Legacy
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-8 leading-tight animate-fade-in-up">
                <span className="block">The Timothy Adebayo</span>
                <span className="block text-secondary">
                  Adeku Legacy Foundation
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                The foundation exists to honor his life, his values, and the impact he made on everyone around him.
              </p>

              {/* Floating Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { label: "Initiatives", value: "4" },
                  { label: "Lives Impacted", value: "1000+" },
                  { label: "Years of Service", value: "70+" },
                  { label: "Communities", value: "Global" },
                ].map((stat, index) => (
                  <div key={index} className="relative group">
                    <div className="relative bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-2xl p-6 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-primary-foreground/70 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Initiatives */}
        <section className="relative py-32">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-6">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 font-bold">
                Legacy Initiatives
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Each initiative is a reflection of Pastor Bayo's values and the lasting impact he wanted to create in the world.
              </p>
            </div>

            {/* Initiatives Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {initiatives.map((initiative, index) => (
                <div
                  key={initiative.id}
                  onMouseEnter={() => setHoveredCard(initiative.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Card */}
                  <div className="relative h-full bg-card backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-border shadow-lg transition-all duration-500 overflow-hidden">
                    {/* Mesh Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Top Section */}
                      <div className="flex items-start justify-between mb-8">
                        {/* Icon */}
                        <div className={`w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center text-5xl shadow-lg transition-all duration-500 ${hoveredCard === initiative.id ? 'scale-110 rotate-6' : ''}`}>
                          {initiative.icon}
                        </div>

                        {/* Number Badge */}
                        <div className="relative">
                          <div className="relative w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center">
                            <span className="text-lg font-bold text-secondary">
                              {initiative.id}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 font-bold leading-tight">
                        {initiative.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-base mb-6">
                        {initiative.description}
                      </p>

                      {/* Animated Line */}
                      <div className="h-1 w-0 group-hover:w-full bg-secondary/30 transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="relative py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-6">
                  <HeartIcon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                    Make a Difference
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 font-bold">
                  Support the Foundation
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Your generous donation helps continue Pastor Bayo's extraordinary legacy of service, generosity, and faith.
                </p>
              </div>

              {/* Zelle Card - Premium Design */}
              <div className="relative group mb-12">
                {/* Card */}
                <div className="relative bg-card backdrop-blur-2xl rounded-3xl border border-border shadow-2xl overflow-hidden">
                  {/* Mesh Background */}
                  <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>

                  <div className="relative p-10 md:p-14">
                    {/* Zelle Header */}
                    <div className="flex items-center gap-4 mb-10 pb-8 border-b border-border">
                      <div className="relative">
                        <div className="relative w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center shadow-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 59.1 100"
                            className="w-12 h-12"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M58.7,83.4c-0.1-0.1-0.1-0.1-0.2-0.2l-0.1-0.1c-2.7-2.8-4.8-6.1-6.4-9.8c-0.2-0.6-0.8-1-1.4-1h-1.3h-5.8H20.6 l36.6-46.9c0.2-0.3,0.3-0.6,0.3-1v-9.1c0-0.9-0.7-1.6-1.6-1.6H38.8h-0.7h-2V0.8c0-0.4-0.4-0.8-0.8-0.8H35h-0.3H23.9h-0.4h-0.3 c-0.4,0-0.8,0.4-0.8,0.8v13.1h-2.8H19H3.1c-0.9,0-1.6,0.7-1.6,1.6V26c0,0.9,0.7,1.6,1.6,1.6h33.6L0.3,74C0.1,74.3,0,74.7,0,75v9.5 c0,0.9,0.7,1.6,1.6,1.6h20.9v13.1c0,0.4,0.4,0.8,0.8,0.8h0.3H24h10.8H35h0.4c0.4,0,0.8-0.4,0.8-0.8V86.1H45h11.3h1.3 c0.6,0,1.2-0.4,1.4-1C59.3,84.6,59.1,83.9,58.7,83.4"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-2">
                          Donate via Zelle
                        </h3>
                        <p className="text-muted-foreground font-medium text-lg">
                          Fast, secure bank-to-bank transfer
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 text-lg mb-10 leading-relaxed">
                      Send your donation securely through Zelle, available in most US banks. Your contribution directly supports the foundation's initiatives.
                    </p>

                    {/* Email Box */}
                    <div className="relative">
                      <div className="relative bg-muted rounded-2xl p-8 border border-border">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-secondary mb-6">
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          Zelle Account
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                          <div className="flex-1">
                            <p className="font-mono text-2xl md:text-3xl text-foreground font-bold tracking-tight">
                              legacy70yr@gmail.com
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy("legacy70yr@gmail.com")}
                            className={`relative overflow-hidden px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                              copied
                                ? "bg-green-600 text-white"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:scale-95"
                            }`}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              {copied ? (
                                <>
                                  <CheckIcon className="w-5 h-5" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <CopyIcon className="w-5 h-5" />
                                  Copy Email
                                </>
                              )}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Ways Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: BookIcon,
                    title: "Book Proceeds",
                    description: "All proceeds from Pastor Bayo's inspirational book go directly to supporting the foundation's mission.",
                  },
                  {
                    icon: HeartIcon,
                    title: "Direct Impact",
                    description: "Every contribution directly supports the initiatives that reflect Pastor Bayo's values and vision.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="relative h-full bg-card backdrop-blur-xl rounded-2xl p-8 border border-border shadow-lg transition-all duration-500">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 shadow-lg">
                        <item.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <h3 className="font-serif text-2xl text-foreground mb-3 font-bold">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <Footer />
      <BackToTop />
    </>
  );
}
