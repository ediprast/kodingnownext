import React from "react";

export default function FloatingChat() {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/+6288806413757"
        className="fixed w-12 h-12 bg-white border-2 border-purple-light rounded-full flex justify-center items-center bottom-6 right-4 md:bottom-12 md:right-6 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 fill-purple-light group-hover:-translate-y-2 duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </>
  );
}
