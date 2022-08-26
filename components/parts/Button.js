import React from "react";

export default function Button({ href, children }) {
  return (
    <>
      <a
        href={href}
        className="bg-purple-light rounded-full py-2 px-5 text-white-light transition-all duration-300 border border-purple-light hover:bg-white hover:text-purple-light"
      >
        {children}
      </a>
    </>
  );
}
