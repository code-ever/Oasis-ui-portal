import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

/**
 * props: items = [{ question, answer }]
 */
function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-[#152A54]/10 rounded-2xl border border-[#152A54]/10 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-[Poppins] text-[15px] font-semibold text-[#152A54]">
                {item.question}
              </span>
              <HiChevronDown
                className={`h-5 w-5 flex-shrink-0 text-[#4FA8DA] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-6 transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <p className="overflow-hidden font-[Inter] text-sm leading-relaxed text-[#5B6472]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
