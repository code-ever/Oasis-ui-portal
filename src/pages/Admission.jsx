
import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineClipboardCheck,
  HiOutlineDocumentText,
  HiOutlineHeart,
  HiOutlineInformationCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUserGroup,
} from "react-icons/hi";

import Hero from "../components/Hero";
import AdmissionForm from "../components/AdmissionForm";

const steps = [
  {
    number: "01",
    icon: HiOutlineDocumentText,
    title: "Submit an Application",
    description:
      "Parents or guardians complete the admission form with the child's and guardian's details.",
  },
  {
    number: "02",
    icon: HiOutlineClipboardCheck,
    title: "Application Review",
    description:
      "Our admissions team reviews the application and confirms availability for the appropriate class.",
  },
  {
    number: "03",
    icon: HiOutlineUserGroup,
    title: "Assessment / Interaction",
    description:
      "Depending on the child's age and class, the child may participate in an age-appropriate assessment or interaction.",
  },
  {
    number: "04",
    icon: HiOutlineBadgeCheck,
    title: "Admission Decision",
    description:
      "Parents receive admission information and details about the next steps through the contact information provided.",
  },
  {
    number: "05",
    icon: HiOutlineAcademicCap,
    title: "Enrollment",
    description:
      "Complete registration, settle applicable fees and prepare your child for an exciting new school journey.",
  },
];

const requirements = [
  {
    icon: HiOutlineDocumentText,
    title: "Completed Admission Form",
    text: "A properly completed online or school admission application form.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Passport Photograph",
    text: "Recent passport photograph of the child.",
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Birth Certificate",
    text: "A copy of the child's birth certificate or acceptable proof of age.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Previous School Report",
    text: "Required where applicable, particularly for pupils transferring from another school.",
  },
  {
    icon: HiOutlineHeart,
    title: "Health Information",
    text: "Immunization or relevant health information where required.",
  },
  {
    icon: HiOutlinePhone,
    title: "Parent / Guardian Details",
    text: "Valid phone number, email address and other relevant contact information.",
  },
];

const highlights = [
  {
    icon: HiOutlineAcademicCap,
    title: "Quality Education",
    text: "A balanced educational experience designed around the child's stage of development.",
  },
  {
    icon: HiOutlineHeart,
    title: "Caring Environment",
    text: "A safe and nurturing environment where children are encouraged to grow with confidence.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Family Partnership",
    text: "We work closely with parents and guardians throughout the child's educational journey.",
  },
];

function Admission() {
  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <Hero
        title="Admissions Are Open"
        subtitle="Take the first step toward giving your child a strong educational foundation at Oasis International Christian Academy."
      />

      {/* =========================================================
          ADMISSION INTRO
      ========================================================= */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#4FA8DA]/10 px-4 py-2">
                <HiOutlineAcademicCap
                  size={18}
                  className="text-[#152A54]"
                />

                <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.15em] text-[#152A54]">
                  Join Oasis
                </span>
              </div>

              <h2 className="font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl md:text-5xl">
                Give your child a place to{" "}
                <span className="text-[#4FA8DA]">learn, grow and shine.</span>
              </h2>

              <p className="mt-6 max-w-2xl font-[Inter] text-base leading-8 text-[#667085]">
                Choosing a school is one of the most important decisions a
                parent can make. At Oasis International Christian Academy, we
                provide a supportive learning environment where children can
                develop academically, socially, creatively and in character.
              </p>

              <p className="mt-4 max-w-2xl font-[Inter] text-base leading-8 text-[#667085]">
                Our admission process is designed to be simple, transparent
                and welcoming for both parents and children.
              </p>

              {/* Quick benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#152A54]/5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4FA8DA]/10">
                    <HiOutlineCheckCircle
                      size={20}
                      className="text-[#4FA8DA]"
                    />
                  </div>

                  <div>
                    <p className="font-[Poppins] text-sm font-bold text-[#152A54]">
                      Simple Process
                    </p>

                    <p className="font-[Inter] text-xs text-[#7A8494]">
                      Easy online application
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#152A54]/5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F2B134]/15">
                    <HiOutlineUserGroup
                      size={20}
                      className="text-[#152A54]"
                    />
                  </div>

                  <div>
                    <p className="font-[Poppins] text-sm font-bold text-[#152A54]">
                      Family Focused
                    </p>

                    <p className="font-[Inter] text-xs text-[#7A8494]">
                      Parents are our partners
                    </p>
                  </div>
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
                  alt="Children learning at school"
                  className="h-[380px] w-full object-cover md:h-[470px]"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#152A54]/90 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2B134] text-[#152A54]">
                      <HiOutlineAcademicCap size={22} />
                    </div>

                    <div>
                      <p className="font-[Poppins] text-base font-bold text-white">
                        Start the journey
                      </p>

                      <p className="font-[Inter] text-xs text-white/60">
                        A brighter future begins here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION HIGHLIGHTS
      ========================================================= */}
      <section className="border-y border-[#152A54]/5 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[Inter] text-sm font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
              Why families choose us
            </p>

            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] sm:text-4xl">
              More than just a school
            </h2>

            <p className="mt-4 font-[Inter] text-sm leading-7 text-[#7A8494] sm:text-base">
              We create an environment where children can develop the skills,
              confidence and character they need for the future.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#152A54]/8 bg-[#FBF9F4] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#152A54] text-[#F2B134] transition group-hover:bg-[#4FA8DA] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-[Poppins] text-lg font-bold text-[#152A54]">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-[Inter] text-sm leading-7 text-[#7A8494]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION PROCESS
      ========================================================= */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#152A54] text-[#F2B134]">
              <HiOutlineClipboardCheck size={28} />
            </div>

            <p className="mt-6 font-[Inter] text-sm font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
              How it works
            </p>

            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] sm:text-4xl">
              Our Admission Process
            </h2>

            <p className="mt-4 font-[Inter] text-sm leading-7 text-[#7A8494] sm:text-base">
              Follow these five simple steps to begin your child's journey at
              Oasis International Christian Academy.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-14 hidden h-px w-[80%] -translate-x-1/2 bg-[#152A54]/10 lg:block" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative rounded-2xl border border-[#152A54]/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#152A54] text-white shadow-lg">
                        <Icon size={21} />
                      </div>

                      <span className="font-[Poppins] text-3xl font-bold text-[#152A54]/10">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-[Poppins] text-base font-bold leading-6 text-[#152A54]">
                      {step.title}
                    </h3>

                    <p className="mt-3 font-[Inter] text-sm leading-6 text-[#7A8494]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUIREMENTS
      ========================================================= */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F2B134]/15 px-4 py-2">
                <HiOutlineDocumentText
                  size={18}
                  className="text-[#152A54]"
                />

                <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.15em] text-[#152A54]">
                  Prepare your documents
                </span>
              </div>

              <h2 className="mt-5 font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl">
                Admission Requirements
              </h2>

              <p className="mt-5 font-[Inter] text-base leading-8 text-[#667085]">
                Having these documents available can help make the application
                and enrollment process smoother.
              </p>

              <div className="mt-7 rounded-2xl bg-[#152A54] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F2B134]">
                    <HiOutlineInformationCircle size={23} />
                  </div>

                  <div>
                    <h3 className="font-[Poppins] text-sm font-bold text-white">
                      Please note
                    </h3>

                    <p className="mt-2 font-[Inter] text-sm leading-6 text-white/60">
                      Requirements may vary depending on the child's age,
                      class and individual circumstances. Our admissions team
                      will guide parents through any additional requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {requirements.map((requirement) => {
                const Icon = requirement.icon;

                return (
                  <div
                    key={requirement.title}
                    className="group rounded-2xl border border-[#152A54]/8 bg-[#FBF9F4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4FA8DA]/20 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4FA8DA]/10 text-[#152A54] transition group-hover:bg-[#152A54] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 font-[Poppins] text-base font-bold text-[#152A54]">
                      {requirement.title}
                    </h3>

                    <p className="mt-2 font-[Inter] text-sm leading-6 text-[#7A8494]">
                      {requirement.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION FORM
      ========================================================= */}
      <section className="bg-[#FBF9F4] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#152A54] text-[#F2B134]">
              <HiOutlineDocumentText size={27} />
            </div>

            <p className="mt-6 font-[Inter] text-sm font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
              Start your application
            </p>

            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] sm:text-4xl">
              Online Admission Form
            </h2>

            <p className="mt-4 font-[Inter] text-sm leading-7 text-[#7A8494] sm:text-base">
              Complete the form below to begin your child's application to
              Oasis International Christian Academy.
            </p>
          </div>

          {/* Form Card */}
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#152A54]/8 bg-white shadow-xl shadow-[#152A54]/5">
            {/* Top accent */}
            <div className="h-2 bg-gradient-to-r from-[#152A54] via-[#4FA8DA] to-[#F2B134]" />

            <div className="p-6 sm:p-8 md:p-12">
              {/* Form intro */}
              <div className="mb-10 flex flex-col gap-5 border-b border-[#152A54]/8 pb-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-[Poppins] text-xl font-bold text-[#152A54]">
                    Child's Application
                  </h3>

                  <p className="mt-1 font-[Inter] text-sm text-[#7A8494]">
                    Please provide accurate information in the fields below.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4FA8DA]/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#4FA8DA]" />

                  <span className="font-[Inter] text-xs font-semibold text-[#152A54]">
                    Application Open
                  </span>
                </div>
              </div>

              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARENT SUPPORT
      ========================================================= */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#152A54]">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              {/* Content */}
              <div className="p-8 sm:p-10 md:p-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#F2B134]">
                  <HiOutlineUserGroup size={24} />
                </div>

                <h2 className="mt-6 font-[Poppins] text-3xl font-bold text-white sm:text-4xl">
                  Need help with your application?
                </h2>

                <p className="mt-5 max-w-xl font-[Inter] text-sm leading-7 text-white/60 sm:text-base">
                  Our admissions team is available to answer your questions,
                  explain the process and help you understand the next steps
                  for your child's enrollment.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+2340000000000"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-[Inter] text-sm font-bold text-[#152A54] transition hover:bg-[#F2B134]"
                  >
                    <HiOutlinePhone size={18} />
                    Call Admissions
                  </a>

                  <a
                    href="mailto:info@oasisschool.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-[Inter] text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    <HiOutlineMail size={18} />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="relative hidden overflow-hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop"
                  alt="Happy school children"
                  className="h-full min-h-[350px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#152A54]/35" />

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-[#152A54]/85 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <HiOutlineCalendar
                      size={22}
                      className="text-[#F2B134]"
                    />

                    <div>
                      <p className="font-[Poppins] text-sm font-bold text-white">
                        Admissions Team
                      </p>

                      <p className="mt-1 font-[Inter] text-xs text-white/55">
                        Ready to assist you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#F2B134] shadow-xl shadow-[#F2B134]/20">
          <div className="relative px-6 py-14 text-center sm:px-10 md:py-20">
            {/* Decorative elements */}
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -right-10 h-60 w-60 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#152A54] text-white shadow-lg">
                <HiOutlineAcademicCap size={30} />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl md:text-5xl">
                Your child's next chapter can begin here.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl font-[Inter] text-sm leading-7 text-[#152A54]/70 sm:text-base">
                Start your application today and take the first step toward a
                rewarding educational journey at Oasis International Christian
                Academy.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#152A54] px-7 py-3.5 font-[Inter] text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1d3970]"
                >
                  Start Application

                  <HiOutlineArrowRight size={18} />
                </a>

                <a
                  href="mailto:info@oasisschool.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#152A54]/20 bg-white/40 px-7 py-3.5 font-[Inter] text-sm font-bold text-[#152A54] transition-all hover:bg-white"
                >
                  <HiOutlineMail size={18} />
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admission;

