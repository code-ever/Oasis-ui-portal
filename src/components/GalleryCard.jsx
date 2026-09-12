import React from "react";

/**
 * props: image, caption, category, onOpen (called with this item's data to open lightbox)
 */
function GalleryCard({ image, caption, category, onOpen, tall }) {
  return (
    <button
      onClick={onOpen}
      className={`group relative mb-4 block w-full overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#152A54] ${
        tall ? "row-span-2" : ""
      }`}
    >
      <img
        src={image}
        alt={caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span className="font-[Inter] text-xs font-semibold uppercase tracking-wide text-[#F2B134]">
          {category}
        </span>
        <span className="font-[Inter] text-sm text-white">{caption}</span>
      </div>
    </button>
  );
}

export default GalleryCard;
