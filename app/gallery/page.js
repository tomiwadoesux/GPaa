"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { CameraIcon } from "@/components/icons";
import { getGallery } from "@/lib/sanity";
import { galleryImages as fallbackGalleryImages } from "@/data/gallery";
import { GalleryUploadForm } from "@/components/gallery-upload-form";
import { Lightbox } from "@/components/lightbox";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const [displayGalleryImages, setDisplayGalleryImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    async function fetchGallery() {
      try {
        const images = await getGallery();
        setDisplayGalleryImages(images);
      } catch (error) {
        console.log('Sanity fetch failed, using fallback data');
        setDisplayGalleryImages(fallbackGalleryImages);
      }
    }
    fetchGallery();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <CameraIcon className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                Photo Gallery
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4 text-balance">
              Moments Captured
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-2xl">
              A growing collection of photographs from family and friends.
            </p>
          </div>
        </section>

        <section id="share" className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <GalleryUploadForm />
            </div>
          </div>
        </section>

        <section className="py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 font-bold">Photo Collection</h2>
              <p className="text-muted-foreground text-lg mb-6">A beautiful collection of memories shared by family and friends</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Photos</p>
                  <p className="text-2xl font-bold text-secondary">{displayGalleryImages.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Time Span</p>
                  <p className="text-2xl font-bold text-secondary">2020-2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Stories</p>
                  <p className="text-2xl font-bold text-secondary">Countless</p>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayGalleryImages.map((image) => (
                <div
                  key={image._id || image.id}
                  onClick={() => openLightbox(image)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group h-64 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Image
                    src={image.image || image.src || "/placeholder.svg"}
                    alt={image.alt || image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <span className="text-white text-xl">↗</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-primary-foreground text-sm font-medium line-clamp-2">
                        {image.caption || image.description || image.title}
                      </p>
                      <p className="text-primary-foreground/70 text-xs mt-2">
                        {image.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <Lightbox isOpen={lightboxOpen} onClose={closeLightbox} image={selectedImage} />
    </>
  );
}
