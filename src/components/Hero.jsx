import React from "react";

/**
 * Simple page-hero used on interior pages (Programs, Gallery, Admission, Contact, FAQ).
 * The Home page uses its own richer hero layout instead of this component.
 */
function Hero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#152A54] px-5 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#4FA8DA]/20" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-[#F2B134]/20" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-[Poppins] text-4xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl font-[Inter] text-lg leading-relaxed text-[#C6D2E8]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default Hero;
