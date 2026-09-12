import React from "react";

function TestimonialCard({ photo, name, role, quote }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_8px_24px_rgba(21,42,84,0.06)]">
      <p className="flex-1 font-[Inter] text-[15px] leading-relaxed text-[#3B4250]">
        “{quote}”
      </p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={photo}
          alt={name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-[Poppins] text-sm font-semibold text-[#152A54]">{name}</p>
          <p className="font-[Inter] text-xs text-[#8A93A3]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
