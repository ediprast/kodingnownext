import React from "react";
import Link from "next/link";
import Image from "next/image";
import datas from "../../assets/data.json";
import workDatas from "../../assets/works.json";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

export default function Index() {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <header className="header container">
                <div className="navbar w-full py-10">
                  <div className="relative flex flex-row justify-between items-center">
                    <div className="w-full">
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
                  </div>
                </div>
              </header>

              <section id="work" className="py-20">
                <div className="container text-center">
                  <h2 className="font-semibold text-xl text-center mb-10 md:text-3xl">
                    {data.all_work}
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
                </div>
              </section>
              <Footer />
            </div>
          );
        })}
    </>
  );
}
