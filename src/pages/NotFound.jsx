import React from "react";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-[Poppins] text-6xl font-bold text-[#152A54]">404</p>
      <h1 className="mt-4 font-[Poppins] text-2xl font-semibold text-[#152A54]">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm font-[Inter] text-sm text-[#5B6472]">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}

export default NotFound;
