import React from "react";
import ButtonSquare from "./parts/ButtonSquare";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import datas from "../assets/data.json";
import workDatas from "../assets/works.json";

export default function Works() {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <section id="work" className="py-20">
                <div className="container text-center">
                  <h2 className="font-semibold text-xl text-center mb-10 md:text-3xl">
                    {data.section_title_work}
                  </h2>
                  <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
                    {workDatas.data.map((work, key) => {
                      return (
                        <div
                          key={key}
                          className="work-item w-full h-72 md:h-80 bg-purple-light rounded-lg p-5 text-center"
                        >
                          <div className="h-4/5 relative rounded-lg overflow-hidden mb-5 group">
                            <img
                              className="h-full w-full object-cover absolute"
                              src={work.image_url}
                              layout="fill"
                              alt="Our Works Image"
                            />

                            <div className="w-full h-full absolute flex items-center justify-center opacity-70 transition-all duration-300 group-hover:bg-blue-bold">
                              <Link
                                href={{
                                  pathname: "/works/[slug]",
                                  query: { slug: work.slug },
                                }}
                              >
                                <a className="text-center hidden group-hover:inline">
                                  <img
                                    src="/images/icons/link.svg"
                                    layout="fill"
                                    alt="Link Icon"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <p className="font-semibold text-base md:text-lg text-white">
                            {work.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <ButtonSquare
                    href="/works"
                    text={data.see_more}
                    addClassNames="bg-white border-purple-light text-purple-light hover:bg-purple-light hover:text-white px-8"
                  />
                </div>
              </section>
            </div>
          );
        })}
    </>
  );
}
