
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiOutlineLogin,
  HiOutlineUserAdd,
} from "react-icons/hi";
import Button from "./Button";
import logo from "../assets/Oasis International Christian Academy Logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admission", label: "Admission" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#152A54]/5 bg-[#FBF9F4]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(21,42,84,0.10)]"
          : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          aria-label="Oasis International Christian Academy Home"
        >
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 md:h-[72px] md:w-[72px]">
            <img
              src={logo}
              alt="Oasis International Christian Academy Logo"
              className="h-full w-full object-contain"
            />
          </div>

          {/* School name */}
          <div className="hidden sm:block">
            <h1 className="font-[Poppins] text-base font-bold leading-tight text-[#152A54] md:text-lg">
              Oasis
            </h1>

            <p className="font-[Inter] text-[10px] font-medium uppercase tracking-[0.12em] text-[#5B6472] md:text-xs">
              International Christian Academy
            </p>
          </div>
        </NavLink>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative py-2 font-[Inter] text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#152A54]"
                    : "text-[#5B6472] hover:text-[#152A54]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#F2B134]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Login */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2.5 font-[Inter] text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#152A54] text-white"
                  : "text-[#152A54] hover:bg-[#152A54]/5"
              }`
            }
          >
            <HiOutlineLogin size={19} />
            Login
          </NavLink>

          {/* Admission */}
          <Button to="/admission" variant="secondary">
            Apply for Admission
          </Button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[#152A54] transition-colors hover:bg-[#152A54]/5 lg:hidden"
        >
          {open ? <HiX size={27} /> : <HiMenu size={27} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-[#152A54]/5 bg-[#FBF9F4] transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "max-h-[650px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 pb-6 pt-4 md:px-8">
          {/* Mobile school branding */}
          <div className="mb-4 flex items-center gap-3 border-b border-[#152A54]/10 pb-4 sm:hidden">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
              <img
                src={logo}
                alt="Oasis International Christian Academy Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h2 className="font-[Poppins] text-base font-bold text-[#152A54]">
                Oasis
              </h2>

              <p className="font-[Inter] text-[9px] uppercase tracking-wider text-[#5B6472]">
                International Christian Academy
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 font-[Inter] text-[15px] font-medium transition-all ${
                    isActive
                      ? "bg-[#152A54]/10 font-semibold text-[#152A54]"
                      : "text-[#5B6472] hover:bg-[#152A54]/5 hover:text-[#152A54]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Login */}
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#152A54]/15 bg-white px-4 py-3.5 font-[Inter] text-sm font-semibold text-[#152A54] transition hover:bg-[#152A54]/5"
          >
            <HiOutlineLogin size={20} />
            Login to School Portal
          </NavLink>

          {/* Mobile Admission */}
          <div className="mt-3">
            <Button
              to="/admission"
              variant="secondary"
              className="flex w-full items-center justify-center gap-2"
            >
              <HiOutlineUserAdd size={19} />
              Apply for Admission
            </Button>
          </div>

          {/* Mobile Contact Information */}
          <div className="mt-5 rounded-2xl bg-[#152A54] p-5 text-white">
            <p className="font-[Poppins] text-sm font-semibold">
              Need Help?
            </p>

            <p className="mt-2 font-[Inter] text-xs leading-6 text-[#D8E1F0]">
              Contact Oasis International Christian Academy for admission,
              school information or general enquiries.
            </p>

            <div className="mt-3 space-y-1 font-[Inter] text-xs text-[#D8E1F0]">
              <p>📞 +234 XXX XXX XXXX</p>
              <p>✉️ info@oasisschool.com</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

