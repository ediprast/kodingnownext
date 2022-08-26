import React from "react";
import classNames from "classnames";
import Button from "../Button";
import { useRouter } from "next/router";
import datas from "../../../assets/data.json";
import Dropdown from "../Dropdown";
import Link from "next/link";

export default function Nav({ mode }) {
  const { locale } = useRouter();
  const dirs = {
    horizontal: "justify-center items-center",
    vertical: "flex-col justify-start",
  };
  const selectedDirs = dirs[mode];
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <ul
                id="nav"
                className={classNames("gap-8 p-4 flex", selectedDirs)}
              >
                <li>
                  <Link href="/">
                    <a className="inline-block hover:text-purple-light">
                      {data.home}
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    className="inline-block hover:text-purple-light"
                  >
                    {data.services}
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="inline-block hover:text-purple-light"
                  >
                    {data.pricing}
                  </a>
                </li>
                <li>
                  <a
                    href="#how"
                    className="inline-block hover:text-purple-light"
                  >
                    {data.how}
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="inline-block hover:text-purple-light"
                  >
                    {data.portfolio}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block hover:text-purple-light"
                  >
                    {data.contact}
                  </a>
                </li>
                <li className="lg:hidden h-12 flex items-center">
                  <Dropdown />
                </li>
                <li className="lg:hidden h-12 flex items-center">
                  <Button href="https://wa.me/+6288806413757">
                    {data.start}
                  </Button>
                </li>
              </ul>
            </div>
          );
        })}
    </>
  );
}
