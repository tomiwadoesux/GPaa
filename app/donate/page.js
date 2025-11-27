"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import {
  HeartIcon,
  BookIcon,
  UserIcon,
  CopyIcon,
  CheckIcon,
} from "@/components/icons";

const paymentMethod = {
  name: "Zelle",
  icon: "💳",
  description: "Fast, secure bank-to-bank transfer",
  details: "Available through most US banks",
};

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <HeartIcon className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                Make a Difference
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4 text-balance">
              Support His Legacy
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-2xl">
              Honor Pastor Bayo's memory by supporting his Legacy Foundation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-4">
                The Foundation
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
                Legacy Foundation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Pastor Bayo lived by the principle that strong faith builds
                strong families and communities. The Legacy Foundation continues
                his legacy by providing mentorship programs, family support
                services, and pastoral training ensuring future generations
                benefit from the wisdom, integrity, and love he so freely
                shared.
              </p>
            </div>

            {/* Ways to Give */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center p-8 bg-muted rounded-lg">
                <HeartIcon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-medium text-foreground mb-2">
                  Direct Donation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Support the foundation through your contribution.
                </p>
              </div>
              <div className="text-center p-8 bg-muted rounded-lg">
                <BookIcon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-medium text-foreground mb-2">
                  Book Proceeds
                </h3>
                <p className="text-muted-foreground text-sm">
                  All book sales goes directly to the foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zelle Payment Section */}
        <section className="py-32 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 font-bold">
                  Support His Legacy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  Your generous donation to the Timothy Adebayo Adeku Legacy
                  Foundation helps continue his extraordinary legacy of service,
                  generosity, and faith that transformed countless lives
                  throughout his ministry.
                </p>
              </div>

              {/* Zelle Payment Card */}
              <div className="bg-gradient-to-br from-white via-white to-secondary/5 rounded-3xl p-10 md:p-14 shadow-2xl border border-secondary/20 backdrop-blur-sm mb-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-secondary/10">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 59.1 100"
                      className="w-10 h-10"
                    >
                      <path
                        fill="#6D1ED4"
                        d="M58.7,83.4c-0.1-0.1-0.1-0.1-0.2-0.2l-0.1-0.1c-2.7-2.8-4.8-6.1-6.4-9.8c-0.2-0.6-0.8-1-1.4-1h-1.3h-5.8H20.6 l36.6-46.9c0.2-0.3,0.3-0.6,0.3-1v-9.1c0-0.9-0.7-1.6-1.6-1.6H38.8h-0.7h-2V0.8c0-0.4-0.4-0.8-0.8-0.8H35h-0.3H23.9h-0.4h-0.3 c-0.4,0-0.8,0.4-0.8,0.8v13.1h-2.8H19H3.1c-0.9,0-1.6,0.7-1.6,1.6V26c0,0.9,0.7,1.6,1.6,1.6h33.6L0.3,74C0.1,74.3,0,74.7,0,75v9.5 c0,0.9,0.7,1.6,1.6,1.6h20.9v13.1c0,0.4,0.4,0.8,0.8,0.8h0.3H24h10.8H35h0.4c0.4,0,0.8-0.4,0.8-0.8V86.1H45h11.3h1.3 c0.6,0,1.2-0.4,1.4-1C59.3,84.6,59.1,83.9,58.7,83.4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-foreground font-bold mb-1">
                      Zelle
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {paymentMethod.details}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 text-lg mb-10 leading-relaxed">
                  {paymentMethod.description}. Send your donation securely
                  through Zelle, available in most US banks.
                </p>

                {/* Account Details */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-secondary/5 to-transparent rounded-2xl p-6 border border-secondary/10">
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">
                      Zelle Account
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-xl p-4 border border-secondary/20 gap-4">
                      <p className="font-mono text-foreground font-semibold text-lg">
                        legacy70yr@gmail.com
                      </p>
                      <button
                        onClick={() => handleCopy("8177097933")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all active:scale-95 font-medium text-sm ${
                          copied
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        }`}
                        title="Copy account number"
                      >
                        {copied ? (
                          <>
                            <CheckIcon className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Note */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
