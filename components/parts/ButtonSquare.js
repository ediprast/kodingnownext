import React from "react";
import Link from "next/link";
export default function ButtonSquare({ href, text, addClassNames }) {
  return (
    <>
      <Link href={href}>
        <a
          className={`border-2 rounded-lg py-3 w-full text-center transition-all duration-300 ${addClassNames}`}
        >
          {text}
        </a>
      </Link>
    </>
  );
}
