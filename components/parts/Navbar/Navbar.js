import React, { useState } from "react";
import Button from "../Button";
import Nav from "./Nav";
import classNames from "classnames";
import Dropdown from "../Dropdown";
import { useRouter } from "next/router";
import datas from "../../../assets/data.json";
import Link from "next/link";

export default function Navbar() {
  const { locale } = useRouter();
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="navbar w-full py-10">
        <div className="relative flex flex-row justify-between items-center">
          <div className="w-3/12">
            <Link href="/">
              <a>
                <img
                  className="h-8"
                  src="/images/logo-color40x40.png"
                  alt="KodingNow Logo"
                />
              </a>
            </Link>
          </div>

          <div className="menu w-9/12 text-right lg:hidden">
            <button
              id="menu-btn"
              type="button"
              onClick={() => setOffCanvas(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-blue-bold transition-all duration-1000 ease-in-out"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="w-6/12 hidden lg:block">
            <Nav mode="horizontal" />
          </div>

          <div className="hidden w-3/12 lg:flex items-center gap-6 justify-end">
            <Dropdown />
            {datas.data
              .filter((p) => p.locale === locale)
              .map((data, i) => {
                return (
                  <div key={i}>
                    <Button href="https://wa.me/+6288806413757">
                      {data.start}
                    </Button>
                  </div>
                );
              })}
          </div>

          <div
            className={classNames(
              "fixed bg-white z-10 top-0 h-full w-full p-10 transition-all lg:hidden",
              offCanvas ? "right-0" : "-right-full"
            )}
          >
            <button
              onClick={() => setOffCanvas(false)}
              id="menu-close"
              className="absolute right-8 top-12 w-10 fill-blue-bold"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Nav mode="vertical"></Nav>
          </div>
        </div>
      </div>
    </>
  );
}
