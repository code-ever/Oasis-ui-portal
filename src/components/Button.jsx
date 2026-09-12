import React from "react";
import { Link } from "react-router-dom";

/**
 * Shared button. Renders a <Link> when `to` is given, otherwise a <button>.
 * variant: "primary" | "secondary" | "ghost"
 */
function Button({
  to,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  children,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-[15px] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#152A54] disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-[#152A54] text-white hover:bg-[#0F1F3D]",
    secondary: "bg-[#F2B134] text-[#152A54] hover:bg-[#DE9F22]",
    ghost: "bg-transparent text-[#152A54] border border-[#152A54]/25 hover:border-[#152A54] hover:bg-[#152A54]/5",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
