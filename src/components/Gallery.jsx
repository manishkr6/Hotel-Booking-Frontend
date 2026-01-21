import React, { useState, useEffect, useCallback } from "react";
import { assets } from "../assets/assets";

const images = [
  { src: assets.guidHiking, alt: "Guided hiking" },
  { src: assets.sunriseHiking, alt: "Sunrise hiking" },
  { src: assets.yogaSession, alt: "Yoga session" },
  { src: assets.cookingClass, alt: "Cooking class" },
  { src: assets.birdWatching, alt: "Bird watching" },
  { src: assets.photoWalk, alt: "Photo walk" },
  { src: assets.eastSikkim, alt: "East Sikkim landscape" },
];

const Gallery = ({ className = "mt-16" }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = useCallback(() => {
    setIndex((s) => (s - 1 + images.length) % images.length);
  }, []);

  const next = useCallback(() => {
    setIndex((s) => (s + 1) % images.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <section className={className}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Moments & Experiences
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              aria-label={`Open ${img.alt}`}
              key={img.src}
              onClick={() => openAt(i)}
              className="group overflow-hidden rounded-xl shadow-sm border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-32 sm:h-40 object-cover transform group-hover:scale-105 transition"
              />
              <div className="px-3 py-2 text-sm text-gray-700 bg-white/60 backdrop-blur-sm">
                <span className="line-clamp-1">{img.alt}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                aria-label="Close"
                onClick={close}
                className="absolute top-4 right-4 z-20 rounded-full bg-white/80 p-2 hover:bg-white transition"
              >
                ✕
              </button>

              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white transition"
              >
                ‹
              </button>

              <button
                aria-label="Next"
                onClick={next}
                className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white transition"
              >
                ›
              </button>

              <div className="rounded-xl overflow-hidden bg-white">
                <img
                  src={images[index].src}
                  alt={images[index].alt}
                  className="w-full h-[60vh] object-contain bg-black"
                />
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-sm text-gray-200">{images[index].alt}</p>
                  <div className="text-sm text-gray-200">
                    {index + 1} / {images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
