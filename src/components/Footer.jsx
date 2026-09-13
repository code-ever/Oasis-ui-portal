import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admission", label: "Admission" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const programs = [
  "Early Years",
  "Lower Primary",
  "Upper Primary",
  "Extracurricular Activities",
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#152A54] text-[#DCE3F0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2B134] font-[Poppins] text-lg font-bold text-[#152A54]">
              BF
            </span>
            <span className="font-[Poppins] text-base font-semibold text-white">
              Oasis Primary School
            </span>
          </div>
          <p className="mt-4 max-w-xs font-[Inter] text-sm leading-relaxed text-[#B7C1D6]">
            Building bright minds for a brighter future — a safe, caring and
            inspiring place for every child to learn and grow.
          </p>
          <p className="mt-4 font-[Inter] text-sm text-[#B7C1D6]">
            12 Independence Layout, Enugu, Enugu State, Nigeria
          </p>
        </div>

        <div>
          <h4 className="font-[Poppins] text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-[Inter] text-sm text-[#B7C1D6] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[Poppins] text-sm font-semibold text-white">Programs</h4>
          <ul className="mt-4 space-y-2">
            {programs.map((p) => (
              <li key={p} className="font-[Inter] text-sm text-[#B7C1D6]">
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[Poppins] text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 font-[Inter] text-sm text-[#B7C1D6]">
            <li>+234 XXX XXX XXXX</li>
            <li>info@brightfutureprimaryschool.com</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#F2B134] hover:text-[#152A54]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-[Inter] text-xs text-[#8FA0BF] md:flex-row md:px-8">
          <p>© {year} Oasis Primary School. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
