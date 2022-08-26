import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import datas from "../assets/data.json";
import { Slide } from "react-awesome-reveal";

export default function WhyUs() {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <section id="whyUs" className="py-4 md:py-20">
                <div className="container">
                  <h2 className="font-semibold text-lg text-center mb-10 md:text-xl lg:text-3xl">
                    {data.section_title_why_us}
                  </h2>

                  <div className="flex md:flex-row flex-col items-center">
                    <div className="w-full text-center justify-center flex md:mr-5 md:w-1/2 lg:mb-0 mb-12">
                      <img
                        className="w-full"
                        layout="fill"
                        id="hero"
                        src="/images/why.png"
                        alt="Laptop Image"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-start items-center gap-6 md:w-1/2">
                      <Slide
                        triggerOnce
                        direction="up"
                        duration={500}
                        className="w-full"
                      >
                        <div className="whyus-item  w-full flex flex-row gap-4">
                          <div>
                            <div className="h-12 w-12 rounded-full bg-blue-light flex items-center mx-auto mb-5">
                              <img
                                className="w-6 mx-auto"
                                layout="fill"
                                src="/images/icons/code.svg"
                                alt="Computer Icon"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-lg md:text-xl font-semibold mb-3">
                              Source Code
                            </h5>
                            <p className="text-gray-500 font-medium text-sm md:text-base">
                              {data.desc_source_code}
                            </p>
                          </div>
                        </div>
                      </Slide>
                      <Slide
                        triggerOnce
                        delay={300}
                        direction="up"
                        duration={500}
                        className="w-full"
                      >
                        <div className="whyus-item  w-full flex flex-row gap-4">
                          <div>
                            <div className="h-12 w-12 rounded-full bg-blue-light flex items-center mx-auto mb-5">
                              <img
                                className="w-6 mx-auto"
                                layout="fill"
                                src="/images/icons/cpu.svg"
                                alt="Computer Icon"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-lg md:text-xl font-semibold mb-3">
                              Domain & Hosting
                            </h5>
                            <p className="text-gray-500 font-medium text-sm md:text-base">
                              {data.desc_domain}
                            </p>
                          </div>
                        </div>
                      </Slide>
                      <Slide
                        triggerOnce
                        delay={600}
                        direction="up"
                        duration={500}
                        className="w-full"
                      >
                        <div className="whyus-item  w-full flex flex-row gap-4">
                          <div>
                            <div className="h-12 w-12 rounded-full bg-blue-light flex items-center mx-auto mb-5">
                              <img
                                className="w-6 mx-auto"
                                layout="fill"
                                src="/images/icons/server.svg"
                                alt="Computer Icon"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-lg md:text-xl font-semibold mb-3">
                              Free Maintenance
                            </h5>
                            <p className="text-gray-500 font-medium text-sm md:text-base">
                              {data.desc_maintenance}
                            </p>
                          </div>
                        </div>
                      </Slide>
                      <Slide
                        triggerOnce
                        delay={900}
                        direction="up"
                        duration={500}
                        className="w-full"
                      >
                        <div className="whyus-item  w-full flex flex-row gap-4">
                          <div>
                            <div className="h-12 w-12 rounded-full bg-blue-light flex items-center mx-auto mb-5">
                              <img
                                className="w-6 mx-auto"
                                layout="fill"
                                src="/images/icons/upload-cloud.svg"
                                alt="Computer Icon"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-lg md:text-xl font-semibold mb-3">
                              Free Upload to Google Play
                            </h5>
                            <p className="text-gray-500 font-medium text-sm md:text-base">
                              {data.desc_upload}
                            </p>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
    </>
  );
}
