import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { BookPreviewSection } from "@/components/book-preview-section";
import { TestimonialsPreviewSection } from "@/components/testimonials-preview-section";
import { GalleryPreviewSection } from "@/components/gallery-preview-section";
import { BackToTop } from "@/components/back-to-top";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-4">
                1952 — 2024
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 text-balance">
                A Life of Purpose, Love & Legacy
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Timothy Adebayo Adeku dedicated his life to serving God and
                humanity. As a devoted pastor, an author, a loving husband and
                father, a generous mentor and empathic giver, he touched
                countless lives with his wisdom, integrity, and boundless
                generosity.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                His legacy lives on through the church he helped planted, the families
                he supported, the lives he transformed through his counsel, and
                the countless acts of kindness that continue to ripple through
                our community. This memorial celebrates his extraordinary
                journey and invites you to share in the memories of a man who
                truly lived his life for God and people.
              </p>
            </div>
          </div>
        </section>
        <BookPreviewSection />
        <TestimonialsPreviewSection />
        <GalleryPreviewSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
