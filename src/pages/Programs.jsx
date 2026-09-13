import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineBookOpen,
  HiOutlineChevronRight,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
} from "react-icons/hi";

import Hero from "../components/Hero";
import Button from "../components/Button";

const sections = [
  {
    id: "early-years",
    number: "01",
    title: "Early Years",
    level: "Ages 2–5",
    tag: "Building Strong Foundations",
    image:
      "https://images.unsplash.com/photo-1587616211892-b9db0759ba03?q=80&w=1200&auto=format&fit=crop",
    description:
      "Our Early Years program provides a warm, stimulating and nurturing environment where young children learn through guided play, exploration, creativity and meaningful interaction.",
    objectives: [
      "Early literacy & letter recognition",
      "Basic numeracy & counting",
      "Social development & sharing",
      "Creative play & imagination",
      "Communication & language",
      "Basic technology awareness",
    ],
    benefits:
      "Children build confidence, curiosity, independence and the social skills they need as they transition into structured primary education.",
  },
  {
    id: "lower-primary",
    number: "02",
    title: "Lower Primary",
    level: "Primary 1–3",
    tag: "Discovering the Joy of Learning",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Our Lower Primary program combines a strong academic foundation with interactive teaching methods that make learning practical, enjoyable and relevant to everyday life.",
    objectives: [
      "English Language",
      "Mathematics",
      "Basic Science",
      "Social Studies",
      "Computer Studies",
      "Creative Arts",
      "Civic Education",
      "Physical Education",
    ],
    benefits:
      "Pupils develop strong reading, writing and problem-solving habits while learning teamwork, responsibility and good citizenship.",
  },
  {
    id: "upper-primary",
    number: "03",
    title: "Upper Primary",
    level: "Primary 4–6",
    tag: "Preparing Confident Learners",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Upper Primary provides a more challenging academic experience while helping pupils develop critical thinking, independence, leadership and practical skills.",
    objectives: [
      "English Language",
      "Mathematics",
      "Basic Science",
      "Social Studies",
      "Computer Studies",
      "Civic Education",
      "Agricultural Science",
      "Cultural & Creative Arts",
    ],
    benefits:
      "Pupils leave Upper Primary with strong academic foundations, practical knowledge, confidence and readiness for secondary education.",
  },
  {
    id: "extracurricular",
    number: "04",
    title: "Extracurricular Activities",
    level: "All Ages",
    tag: "Learning Beyond the Classroom",
    image:
      "https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=1200&auto=format&fit=crop",
    description:
      "At Oasis, education extends beyond academic lessons. Our extracurricular activities help children discover their talents, develop confidence and build meaningful relationships.",
    objectives: [
      "Football",
      "Athletics",
      "Music",
      "Drama",
      "Debate",
      "Coding",
      "Art & Craft",
      "Reading Club",
    ],
    benefits:
      "Pupils discover new interests, develop teamwork and leadership skills, build friendships and grow in confidence outside academic work.",
  },
];

const programFeatures = [
  {
    icon: HiOutlineAcademicCap,
    title: "Academic Excellence",
    text: "Strong foundations in literacy, numeracy, science and technology.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Creative Learning",
    text: "Interactive lessons that encourage curiosity and independent thinking.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Social Development",
    text: "Children learn communication, teamwork, responsibility and respect.",
  },
  {
    icon: HiOutlineHeart,
    title: "Character Building",
    text: "Christian values guide our approach to developing responsible children.",
  },
];

function Programs() {
  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <Hero
        title="Our Educational Programs"
        subtitle="Age-appropriate learning designed to help every child develop academically, socially, creatively and spiritually."
      />

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#4FA8DA]/10 px-4 py-2">
                <HiOutlineAcademicCap
                  className="text-[#152A54]"
                  size={18}
                />

                <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.15em] text-[#152A54]">
                  Learning at Oasis
                </span>
              </div>

              <h2 className="font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl md:text-5xl">
                Helping every child discover their{" "}
                <span className="text-[#4FA8DA]">potential.</span>
              </h2>

              <p className="mt-6 max-w-2xl font-[Inter] text-base leading-8 text-[#667085]">
                At Oasis International Christian Academy, we believe that
                every child is unique. Our educational programs are designed
                to meet children at their stage of development while preparing
                them for the opportunities ahead.
              </p>

              <p className="mt-4 max-w-2xl font-[Inter] text-base leading-8 text-[#667085]">
                We combine academic excellence with character development,
                creativity, technology, teamwork and Christian values to
                provide a balanced educational experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-[#152A54]/5">
                  <HiOutlineBadgeCheck
                    className="text-[#4FA8DA]"
                    size={19}
                  />

                  <span className="font-[Inter] text-sm font-semibold text-[#152A54]">
                    Child-Centred Learning
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-[#152A54]/5">
                  <HiOutlineBadgeCheck
                    className="text-[#4FA8DA]"
                    size={19}
                  />

                  <span className="font-[Inter] text-sm font-semibold text-[#152A54]">
                    Christian Values
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#F2B134]/30 blur-2xl" />

              <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#4FA8DA]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
                  alt="Children learning together"
                  className="h-[380px] w-full object-cover md:h-[450px]"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#152A54]/90 p-5 backdrop-blur-md">
                  <p className="font-[Poppins] text-lg font-bold text-white">
                    Learn. Grow. Become.
                  </p>

                  <p className="mt-1 font-[Inter] text-sm leading-6 text-white/65">
                    Preparing children for a bright and purposeful future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM OVERVIEW
      ========================================================= */}
      <section className="border-y border-[#152A54]/5 bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[Inter] text-sm font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
              Our learning journey
            </p>

            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] sm:text-4xl">
              A pathway for every stage
            </h2>

            <p className="mt-4 font-[Inter] text-sm leading-7 text-[#7A8494] sm:text-base">
              From the earliest years through Upper Primary, our programs
              provide age-appropriate experiences that support the whole child.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="group rounded-2xl border border-[#152A54]/8 bg-[#FBF9F4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4FA8DA]/30 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="font-[Poppins] text-3xl font-bold text-[#152A54]/10">
                    {program.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#152A54]/5 text-[#152A54] transition group-hover:bg-[#152A54] group-hover:text-white">
                    <HiOutlineChevronRight size={18} />
                  </div>
                </div>

                <h3 className="mt-5 font-[Poppins] text-lg font-bold text-[#152A54]">
                  {program.title}
                </h3>

                <p className="mt-1 font-[Inter] text-xs font-semibold uppercase tracking-wide text-[#4FA8DA]">
                  {program.level}
                </p>

                <p className="mt-3 font-[Inter] text-sm leading-6 text-[#7A8494]">
                  {program.tag}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM SECTIONS
      ========================================================= */}
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 px-5 py-20 md:px-8 md:py-28 ${
              isReversed ? "bg-white" : "bg-[#FBF9F4]"
            }`}
          >
            <div className="mx-auto max-w-7xl">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <div className="relative">
                  <div className="absolute -left-4 -top-4 z-0 h-24 w-24 rounded-3xl bg-[#F2B134]/30" />

                  <div className="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-3xl bg-[#4FA8DA]/20" />

                  <div className="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white shadow-xl">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-[360px] w-full object-cover transition duration-700 hover:scale-105 md:h-[480px]"
                    />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#152A54] font-[Poppins] text-lg font-bold text-white shadow-lg">
                      {section.number}
                    </div>

                    {/* Level */}
                    <div className="absolute bottom-5 left-5">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/90 px-4 py-2 font-[Inter] text-xs font-bold uppercase tracking-wide text-[#152A54] shadow-lg backdrop-blur">
                        {section.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#4FA8DA]/10 px-4 py-2 font-[Inter] text-xs font-bold uppercase tracking-[0.12em] text-[#152A54]">
                      {section.level}
                    </span>

                    <span className="font-[Inter] text-xs font-medium text-[#98A2B3]">
                      Program {section.number}
                    </span>
                  </div>

                  <h2 className="mt-5 font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl">
                    {section.title}
                  </h2>

                  <p className="mt-2 font-[Inter] text-sm font-semibold text-[#4FA8DA]">
                    {section.tag}
                  </p>

                  <p className="mt-6 font-[Inter] text-base leading-8 text-[#667085]">
                    {section.description}
                  </p>

                  {/* What pupils learn */}
                  <div className="mt-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#152A54] text-white">
                        <HiOutlineBookOpen size={18} />
                      </div>

                      <h3 className="font-[Poppins] text-lg font-bold text-[#152A54]">
                        What pupils learn
                      </h3>
                    </div>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {section.objectives.map((objective) => (
                        <div
                          key={objective}
                          className="flex items-start gap-3 rounded-xl border border-[#152A54]/5 bg-white px-4 py-3 transition hover:border-[#4FA8DA]/20 hover:shadow-sm"
                        >
                          <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F2B134]/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F2B134]" />
                          </span>

                          <span className="font-[Inter] text-sm leading-5 text-[#5B6472]">
                            {objective}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefit */}
                  <div className="mt-8 rounded-2xl border border-[#4FA8DA]/10 bg-[#4FA8DA]/5 p-5">
                    <div className="flex items-start gap-3">
                      <HiOutlineSparkles
                        size={22}
                        className="mt-0.5 flex-shrink-0 text-[#4FA8DA]"
                      />

                      <div>
                        <h4 className="font-[Poppins] text-sm font-bold text-[#152A54]">
                          The Oasis difference
                        </h4>

                        <p className="mt-2 font-[Inter] text-sm leading-7 text-[#5B6472]">
                          {section.benefits}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* =========================================================
          WHAT MAKES OASIS DIFFERENT
      ========================================================= */}
      <section className="bg-[#152A54] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F2B134]">
              <HiOutlineSparkles size={28} />
            </div>

            <p className="mt-6 font-[Inter] text-sm font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
              Why Oasis
            </p>

            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-white sm:text-4xl">
              Education that develops the whole child
            </h2>

            <p className="mt-5 font-[Inter] text-sm leading-7 text-white/60 sm:text-base">
              Our approach goes beyond textbooks and examinations. We want
              every child to become confident, curious, responsible and ready
              for the future.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#F2B134]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 font-[Poppins] text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 font-[Inter] text-sm leading-6 text-white/55">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-[#152A54]/10 md:grid-cols-4">
          <div className="px-5 py-4 text-center">
            <p className="font-[Poppins] text-3xl font-bold text-[#152A54]">
              4+
            </p>

            <p className="mt-1 font-[Inter] text-xs font-medium text-[#7A8494]">
              Learning Programs
            </p>
          </div>

          <div className="px-5 py-4 text-center">
            <p className="font-[Poppins] text-3xl font-bold text-[#152A54]">
              2–12
            </p>

            <p className="mt-1 font-[Inter] text-xs font-medium text-[#7A8494]">
              Years of Development
            </p>
          </div>

          <div className="border-t border-[#152A54]/10 px-5 py-4 text-center md:border-t-0">
            <p className="font-[Poppins] text-3xl font-bold text-[#152A54]">
              8+
            </p>

            <p className="mt-1 font-[Inter] text-xs font-medium text-[#7A8494]">
              Extracurricular Areas
            </p>
          </div>

          <div className="border-t border-[#152A54]/10 px-5 py-4 text-center md:border-t-0">
            <p className="font-[Poppins] text-3xl font-bold text-[#152A54]">
              360°
            </p>

            <p className="mt-1 font-[Inter] text-xs font-medium text-[#7A8494]">
              Whole-Child Approach
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#F2B134] shadow-xl shadow-[#F2B134]/20">
          <div className="relative px-6 py-14 text-center sm:px-10 md:py-20">
            {/* Decorative circles */}
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#152A54] text-white shadow-lg">
                <HiOutlineAcademicCap size={30} />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl md:text-5xl">
                Give your child a strong start for a Oasis.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl font-[Inter] text-sm leading-7 text-[#152A54]/70 sm:text-base">
                Discover an environment where your child can learn with
                confidence, build character, discover their talents and
                prepare for tomorrow.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button to="/admission" variant="primary">
                  Apply for Admission
                </Button>

                <Button to="/contact" variant="secondary">
                  Contact the School
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;

