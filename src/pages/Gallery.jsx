
import React, { useEffect, useMemo, useState } from "react";
import {
  HiX,
  HiChevronLeft,
  HiChevronRight,
  HiOutlinePhotograph,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineCalendar,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import GalleryCard from "../components/GalleryCard";

const categories = [
  {
    name: "All",
    icon: HiOutlinePhotograph,
  },
  {
    name: "Classrooms",
    icon: HiOutlineAcademicCap,
  },
  {
    name: "Learning",
    icon: HiOutlineAcademicCap,
  },
  {
    name: "Sports",
    icon: HiOutlineSparkles,
  },
  {
    name: "School Events",
    icon: HiOutlineCalendar,
  },
  {
    name: "Cultural Activities",
    icon: HiOutlineSparkles,
  },
  {
    name: "Excursions",
    icon: HiOutlineArrowRight,
  },
  {
    name: "Graduation",
    icon: HiOutlineAcademicCap,
  },
  {
    name: "Creative Activities",
    icon: HiOutlineSparkles,
  },
];

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    category: "Classrooms",
    caption: "A bright and modern learning environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    category: "Learning",
    caption: "Pupils enjoying an engaging reading lesson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=1200&auto=format&fit=crop",
    category: "Sports",
    caption: "Building teamwork through football",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop",
    category: "Learning",
    caption: "Collaborative learning in Upper Primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
    category: "School Events",
    caption: "Our pupils gathered for the annual assembly",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587616211892-b9db0759ba03?q=80&w=1200&auto=format&fit=crop",
    category: "Classrooms",
    caption: "A welcoming Early Years learning corner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=1200&auto=format&fit=crop",
    category: "Cultural Activities",
    caption: "Celebrating culture, heritage and identity",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
    category: "Excursions",
    caption: "Learning continues beyond the classroom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    category: "Graduation",
    caption: "Celebrating another milestone",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    category: "Creative Activities",
    caption: "Encouraging creativity through art and craft",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=1200&auto=format&fit=crop",
    category: "Creative Activities",
    caption: "Young artists expressing their imagination",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    category: "Sports",
    caption: "Pupils taking part in Sports Day",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      return images;
    }

    return images.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const showPrev = () => {
    setLightboxIndex((current) => {
      if (current === null) return null;

      return current === 0 ? filtered.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setLightboxIndex((current) => {
      if (current === null) return null;

      return current === filtered.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrev();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <Hero
        title="Life at Oasis International Christian Academy"
        subtitle="Explore the moments, experiences and memories that make Oasis a special place to learn, grow and belong."
      />

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#152A54]/5 px-4 py-2">
                <HiOutlinePhotograph className="text-[#152A54]" size={18} />

                <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.15em] text-[#152A54]">
                  Our Gallery
                </span>
              </div>

              <h2 className="font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl md:text-5xl">
                Moments that tell our{" "}
                <span className="text-[#4FA8DA]">story</span>
              </h2>

              <p className="mt-5 max-w-2xl font-[Inter] text-base leading-8 text-[#667085]">
                From exciting classroom discoveries to sporting activities,
                cultural celebrations and memorable school events, every
                moment at Oasis contributes to the growth and development of
                our pupils.
              </p>
            </div>

            {/* Gallery Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-[#152A54]/10 bg-white px-6 py-5 text-center shadow-sm">
                <p className="font-[Poppins] text-3xl font-bold text-[#152A54]">
                  {images.length}+
                </p>

                <p className="mt-1 font-[Inter] text-xs font-medium text-[#7A8494]">
                  Memories
                </p>
              </div>

              <div className="rounded-2xl border border-[#152A54]/10 bg-white px-6 py-5 text-center shadow-sm">
                <p className="font-[Poppins] text-3xl font-bold text-[#152A54]">
                  8+
                </p>

                <p className="mt-1 font-[Inter] text-xs font-medium text-[#7A8494]">
                  Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY SECTION
      ========================================================= */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-[Inter] text-sm font-semibold uppercase tracking-[0.18em] text-[#4FA8DA]">
                Explore our memories
              </p>

              <h3 className="mt-2 font-[Poppins] text-2xl font-bold text-[#152A54] md:text-3xl">
                Discover Oasis
              </h3>
            </div>

            <p className="max-w-md font-[Inter] text-sm leading-6 text-[#7A8494] md:text-right">
              Select a category below to explore different parts of life at
              Oasis International Christian Academy.
            </p>
          </div>

          {/* =====================================================
              CATEGORY FILTERS
          ===================================================== */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setActiveCategory(category.name)}
                    className={`group flex items-center gap-2 rounded-full border px-4 py-2.5 font-[Inter] text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "border-[#152A54] bg-[#152A54] text-white shadow-md shadow-[#152A54]/20"
                        : "border-[#152A54]/10 bg-white text-[#5B6472] hover:-translate-y-0.5 hover:border-[#4FA8DA]/40 hover:bg-[#4FA8DA]/5 hover:text-[#152A54]"
                    }`}
                  >
                    <Icon size={17} />

                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="font-[Inter] text-sm text-[#7A8494]">
              Showing{" "}
              <span className="font-bold text-[#152A54]">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "memory" : "memories"}
            </p>

            <div className="hidden h-px flex-1 bg-[#152A54]/10 sm:ml-6 sm:block" />
          </div>

          {/* =====================================================
              MASONRY GALLERY
          ===================================================== */}
          {filtered.length > 0 ? (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {filtered.map((img, index) => (
                <div
                  key={`${img.image}-${index}`}
                  className="mb-5 break-inside-avoid"
                >
                  <GalleryCard
                    image={img.image}
                    caption={img.caption}
                    category={img.category}
                    onOpen={() => openLightbox(index)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#152A54]/15 bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#152A54]/5">
                <HiOutlinePhotograph
                  size={30}
                  className="text-[#152A54]/60"
                />
              </div>

              <h4 className="mt-5 font-[Poppins] text-xl font-bold text-[#152A54]">
                No memories yet
              </h4>

              <p className="mx-auto mt-2 max-w-md font-[Inter] text-sm leading-6 text-[#7A8494]">
                We don't have any images available for this category yet.
                Please check another category.
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 rounded-full bg-[#152A54] px-6 py-3 font-[Inter] text-sm font-semibold text-white transition hover:bg-[#1d3970]"
              >
                View all memories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          SCHOOL LIFE FEATURE
      ========================================================= */}
      <section className="overflow-hidden bg-[#152A54] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <HiOutlineSparkles className="text-[#F2B134]" size={18} />

              <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.15em] text-white">
                More than academics
              </span>
            </div>

            <h2 className="font-[Poppins] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Every day is an opportunity to{" "}
              <span className="text-[#F2B134]">grow.</span>
            </h2>

            <p className="mt-6 max-w-xl font-[Inter] text-base leading-8 text-white/70">
              At Oasis, children are encouraged to discover their strengths,
              build confidence, develop friendships and experience the joy of
              learning in a caring Christian environment.
            </p>

            <Link
              to="/programs"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-[Inter] text-sm font-bold text-[#152A54] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F2B134]"
            >
              Explore our programs

              <HiOutlineArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#4FA8DA]/20 blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#F2B134]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
                alt="Oasis pupils learning together"
                className="h-[350px] w-full rounded-[1.5rem] object-cover md:h-[420px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#152A54]/90 p-5 backdrop-blur">
                <p className="font-[Poppins] text-lg font-bold text-white">
                  Learning. Friendship. Growth.
                </p>

                <p className="mt-1 font-[Inter] text-sm text-white/60">
                  Creating meaningful school experiences every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION CTA
      ========================================================= */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#F2B134] px-6 py-12 text-center shadow-xl shadow-[#F2B134]/20 sm:px-10 md:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#152A54] text-white">
            <HiOutlineAcademicCap size={30} />
          </div>

          <h2 className="mt-6 font-[Poppins] text-3xl font-bold text-[#152A54] sm:text-4xl">
            Want to be part of the Oasis story?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-[Inter] text-sm leading-7 text-[#152A54]/70 sm:text-base">
            Give your child an environment where curiosity is encouraged,
            character is developed and every child is given the opportunity to
            shine.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admission"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#152A54] px-7 py-3.5 font-[Inter] text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1d3970]"
            >
              Apply for Admission

              <HiOutlineArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#152A54]/20 bg-white/40 px-7 py-3.5 font-[Inter] text-sm font-bold text-[#152A54] transition-all hover:bg-white"
            >
              Contact the School
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07101f]/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"
          >
            <HiX size={24} />
          </button>

          {/* Counter */}
          <div className="absolute left-4 top-5 rounded-full bg-white/10 px-4 py-2 font-[Inter] text-xs font-semibold text-white/80 backdrop-blur sm:left-7 sm:top-7">
            {lightboxIndex + 1} / {filtered.length}
          </div>

          {/* Previous */}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:left-7"
            >
              <HiChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <div className="flex max-h-[88vh] max-w-6xl flex-col items-center">
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].caption}
              className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <div className="mt-5 max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-[#4FA8DA] px-3 py-1 font-[Inter] text-[11px] font-bold uppercase tracking-wide text-white">
                {filtered[lightboxIndex].category}
              </span>

              <p className="mt-3 font-[Poppins] text-base font-semibold text-white sm:text-lg">
                {filtered[lightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 sm:right-7"
            >
              <HiChevronRight size={28} />
            </button>
          )}

          {/* Keyboard hint */}
          <div className="absolute bottom-5 hidden font-[Inter] text-xs text-white/40 md:block">
            Use ← → to navigate · ESC to close
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

