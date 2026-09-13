import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineMap,
  HiOutlinePhone,
  HiOutlineQuestionMarkCircle,
  HiOutlineUserGroup,
} from "react-icons/hi";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const contactCards = [
  {
    icon: HiOutlineLocationMarker,
    title: "Visit Our School",
    detail: "12 Independence Layout, Enugu, Enugu State, Nigeria",
    action: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=12+Independence+Layout+Enugu+Nigeria",
  },
  {
    icon: HiOutlinePhone,
    title: "Call Our Office",
    detail: "+234 XXX XXX XXXX",
    action: "Call School",
    href: "tel:+2340000000000",
  },
  {
    icon: HiOutlineMail,
    title: "Send an Email",
    detail: "info@oasisschool.com",
    action: "Send Email",
    href: "mailto:info@oasisschool.com",
  },
];

const officeHours = [
  {
    day: "Monday – Friday",
    time: "8:00 AM – 4:00 PM",
  },
  {
    day: "Saturday",
    time: "9:00 AM – 1:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

const reasons = [
  {
    icon: HiOutlineAcademicCap,
    title: "Admissions",
    text: "Ask questions about admission requirements, available classes, application steps and enrollment.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "School Life",
    text: "Learn more about our learning environment, activities, pastoral care and student experience.",
  },
  {
    icon: HiOutlineQuestionMarkCircle,
    title: "General Enquiries",
    text: "Have a question about Oasis? Our team will be happy to provide the information you need.",
  },
];

function Contact() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <Hero
        title="We'd Love to Hear From You"
        subtitle="Whether you're exploring admission, asking about our programs or simply want to learn more about Oasis, our team is ready to help."
      />

      {/* Intro */}
      <section className="px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2B134]/15 px-4 py-2 font-[Inter] text-xs font-semibold uppercase tracking-[0.16em] text-[#152A54]">
                <HiOutlineMap size={16} />
                Connect With Oasis
              </span>

              <h2 className="mt-5 font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl">
                Let's start a conversation about your child's future.
              </h2>

              <p className="mt-5 max-w-2xl font-[Inter] text-base leading-8 text-[#5B6472]">
                Choosing the right school is an important decision. At Oasis
                International Christian Academy, we welcome parents and
                guardians who want to understand more about our educational
                approach, school environment and admission process.
              </p>

              <p className="mt-4 max-w-2xl font-[Inter] text-base leading-8 text-[#5B6472]">
                Reach out to us and a member of our team will be happy to
                answer your questions and guide you through the next step.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/admission"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#152A54] px-5 py-3 font-[Poppins] text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#102142]"
                >
                  Apply for Admission
                  <HiOutlineArrowRight size={18} />
                </a>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#152A54]/15 bg-white px-5 py-3 font-[Poppins] text-sm font-semibold text-[#152A54] transition hover:-translate-y-0.5 hover:border-[#4FA8DA] hover:bg-[#4FA8DA]/5"
                >
                  Send a Message
                </a>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#F2B134]/20 blur-2xl" />
              <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#4FA8DA]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-[#152A54] p-7 shadow-[0_24px_60px_rgba(21,42,84,0.16)] sm:p-9">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#4FA8DA]/20" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2B134] text-[#152A54]">
                    <HiOutlineAcademicCap size={30} />
                  </div>

                  <h3 className="mt-7 font-[Poppins] text-2xl font-bold text-white">
                    Oasis International Christian Academy
                  </h3>

                  <p className="mt-4 font-[Inter] text-sm leading-7 text-white/70">
                    A nurturing learning environment where children are
                    encouraged to learn, grow, discover and build a strong
                    foundation for the future.
                  </p>

                  <div className="mt-7 space-y-4">
                    <div className="flex items-start gap-3">
                      <HiOutlineLocationMarker
                        size={20}
                        className="mt-0.5 flex-shrink-0 text-[#F2B134]"
                      />
                      <span className="font-[Inter] text-sm leading-6 text-white/80">
                        12 Independence Layout, Enugu, Enugu State, Nigeria
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <HiOutlinePhone
                        size={20}
                        className="flex-shrink-0 text-[#F2B134]"
                      />
                      <span className="font-[Inter] text-sm text-white/80">
                        +234 XXX XXX XXXX
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <HiOutlineMail
                        size={20}
                        className="flex-shrink-0 text-[#F2B134]"
                      />
                      <span className="font-[Inter] text-sm text-white/80">
                        info@oasisschool.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-[#FBF9F4] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
              Contact Information
            </span>

            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] sm:text-4xl">
              We're here when you need us
            </h2>

            <p className="mt-4 font-[Inter] text-sm leading-7 text-[#5B6472]">
              Choose the easiest way to reach the Oasis team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group rounded-3xl border border-[#152A54]/5 bg-white p-7 shadow-[0_10px_30px_rgba(21,42,84,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(21,42,84,0.1)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4FA8DA]/10 text-[#152A54] transition group-hover:bg-[#152A54] group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <div className="rounded-full bg-[#F2B134]/10 px-3 py-1 font-[Inter] text-[10px] font-bold uppercase tracking-wider text-[#152A54]">
                      Oasis
                    </div>
                  </div>

                  <h3 className="mt-6 font-[Poppins] text-lg font-bold text-[#152A54]">
                    {card.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] font-[Inter] text-sm leading-6 text-[#5B6472]">
                    {card.detail}
                  </p>

                  <a
                    href={card.href}
                    target={card.title === "Visit Our School" ? "_blank" : undefined}
                    rel={
                      card.title === "Visit Our School"
                        ? "noreferrer"
                        : undefined
                    }
                    className="mt-6 inline-flex items-center gap-2 font-[Poppins] text-sm font-semibold text-[#152A54] transition hover:text-[#4FA8DA]"
                  >
                    {card.action}
                    <HiOutlineArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Office Hours */}
      <section
        id="contact-form"
        className="scroll-mt-24 px-5 py-16 md:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.38fr]">
            {/* Form */}
            <div className="overflow-hidden rounded-[2rem] border border-[#152A54]/5 bg-white shadow-[0_12px_40px_rgba(21,42,84,0.08)]">
              <div className="h-1.5 bg-gradient-to-r from-[#152A54] via-[#4FA8DA] to-[#F2B134]" />

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#4FA8DA]/10 px-4 py-2 font-[Inter] text-xs font-semibold uppercase tracking-wider text-[#152A54]">
                    <HiOutlineMail size={16} />
                    Send a Message
                  </span>

                  <h2 className="mt-5 font-[Poppins] text-3xl font-bold text-[#152A54]">
                    How can we help you?
                  </h2>

                  <p className="mt-3 font-[Inter] text-sm leading-7 text-[#5B6472]">
                    Complete the form below and our team will get back to you
                    as soon as possible.
                  </p>
                </div>

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <aside className="h-fit rounded-[2rem] bg-[#152A54] p-7 text-white shadow-[0_16px_40px_rgba(21,42,84,0.12)] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2B134] text-[#152A54]">
                <HiOutlineClock size={25} />
              </div>

              <h3 className="mt-6 font-[Poppins] text-xl font-bold">
                School Office Hours
              </h3>

              <p className="mt-3 font-[Inter] text-sm leading-6 text-white/65">
                Our office team is available during the following hours.
              </p>

              <div className="mt-7 space-y-5">
                {officeHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-[Inter] text-sm text-white/70">
                      {item.day}
                    </span>

                    <span className="whitespace-nowrap font-[Poppins] text-xs font-semibold text-[#F2B134]">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <HiOutlineCalendar
                    size={21}
                    className="mt-0.5 flex-shrink-0 text-[#4FA8DA]"
                  />

                  <div>
                    <h4 className="font-[Poppins] text-sm font-semibold">
                      Prefer a visit?
                    </h4>

                    <p className="mt-1 font-[Inter] text-xs leading-5 text-white/60">
                      Contact us ahead of time to arrange a school visit or
                      admission discussion.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+2340000000000"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F2B134] px-5 py-3 font-[Poppins] text-sm font-bold text-[#152A54] transition hover:bg-[#ffc85b]"
              >
                <HiOutlinePhone size={18} />
                Call the School
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Why Contact Oasis */}
      <section className="bg-[#FBF9F4] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
                How We Can Help
              </span>

              <h2 className="mt-3 font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] sm:text-4xl">
                Whatever your question, we're ready to help.
              </h2>

              <p className="mt-5 font-[Inter] text-sm leading-7 text-[#5B6472]">
                Our goal is to make communication with parents and guardians
                simple, welcoming and helpful.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-2xl bg-white p-6 shadow-[0_8px_25px_rgba(21,42,84,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#152A54] text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 font-[Poppins] text-base font-bold text-[#152A54]">
                      {reason.title}
                    </h3>

                    <p className="mt-2 font-[Inter] text-xs leading-6 text-[#5B6472]">
                      {reason.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location / Map */}
      <section className="px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="font-[Inter] text-xs font-bold uppercase tracking-[0.18em] text-[#4FA8DA]">
                Find Us
              </span>

              <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54]">
                Visit Oasis International Christian Academy
              </h2>

              <p className="mt-2 font-[Inter] text-sm text-[#5B6472]">
                12 Independence Layout, Enugu, Enugu State, Nigeria
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=12+Independence+Layout+Enugu+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#152A54]/10 px-5 py-3 font-[Poppins] text-sm font-semibold text-[#152A54] transition hover:bg-[#152A54] hover:text-white"
            >
              <HiOutlineLocationMarker size={18} />
              Open in Maps
            </a>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-[#152A54]/10 bg-[#FBF9F4] shadow-[0_12px_35px_rgba(21,42,84,0.07)]">
            {/* Decorative map background */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-[12%] top-[20%] h-40 w-[65%] rotate-12 rounded-[50%] border-2 border-[#4FA8DA]/20" />
              <div className="absolute left-[25%] top-[10%] h-[90%] w-24 -rotate-45 rounded-[50%] border-2 border-[#152A54]/10" />
              <div className="absolute right-[12%] top-[35%] h-52 w-52 rounded-full border-2 border-[#F2B134]/25" />
              <div className="absolute bottom-[10%] left-[5%] h-28 w-[80%] rotate-3 rounded-[50%] border-2 border-[#4FA8DA]/15" />
            </div>

            <div className="relative flex h-full items-center justify-center p-6">
              <div className="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-[0_20px_50px_rgba(21,42,84,0.12)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#152A54] text-[#F2B134] shadow-lg">
                  <HiOutlineLocationMarker size={31} />
                </div>

                <h3 className="mt-5 font-[Poppins] text-xl font-bold text-[#152A54]">
                  Oasis International Christian Academy
                </h3>

                <p className="mt-2 font-[Inter] text-sm leading-6 text-[#5B6472]">
                  12 Independence Layout
                  <br />
                  Enugu, Enugu State, Nigeria
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=12+Independence+Layout+Enugu+Nigeria"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#152A54] px-5 py-3 font-[Poppins] text-sm font-semibold text-white transition hover:bg-[#102142]"
                >
                  Get Directions
                  <HiOutlineArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#152A54]">
          <div className="relative px-6 py-12 text-center sm:px-10 lg:py-16">
            <div className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-[#4FA8DA]/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-60 w-60 rounded-full bg-[#F2B134]/15 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2B134] text-[#152A54]">
                <HiOutlineCheckCircle size={29} />
              </div>

              <h2 className="mx-auto mt-6 max-w-2xl font-[Poppins] text-3xl font-bold text-white sm:text-4xl">
                Ready to take the next step?
              </h2>

              <p className="mx-auto mt-4 max-w-xl font-[Inter] text-sm leading-7 text-white/70">
                Explore our programs, learn about admission or get in touch
                with our team. We look forward to welcoming your family to
                Oasis.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="/admission"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F2B134] px-6 py-3.5 font-[Poppins] text-sm font-bold text-[#152A54] transition hover:bg-[#ffc85b]"
                >
                  Explore Admissions
                  <HiOutlineArrowRight size={18} />
                </a>

                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-[Poppins] text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Our Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

