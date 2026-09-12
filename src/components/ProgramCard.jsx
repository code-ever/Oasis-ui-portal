import React from "react";
import Button from "./Button";

/**
 * props:
 *  image, title, level, description, learnMoreTo (defaults to /programs)
 */
function ProgramCard({ image, title, level, description, learnMoreTo = "/programs" }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#152A54]/8 bg-white shadow-[0_8px_24px_rgba(21,42,84,0.06)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {level && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-[Inter] text-xs font-semibold text-[#152A54]">
            {level}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[Poppins] text-lg font-semibold text-[#152A54]">{title}</h3>
        <p className="mt-2 flex-1 font-[Inter] text-sm leading-relaxed text-[#5B6472]">
          {description}
        </p>
        <Button to={learnMoreTo} variant="ghost" className="mt-5 self-start !px-5 !py-2 text-sm">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default ProgramCard;
