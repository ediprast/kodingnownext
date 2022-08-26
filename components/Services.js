import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import datas from "../assets/data.json";
import { Slide } from "react-awesome-reveal";

export default function Services() {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <section id="services" className="py-20">
                <div className="container">
                  <h2 className="max-w-xl m-auto font-semibold text-center text-lg md:text-xl mb-10 lg:text-3xl">
                    {data.section_title_services}
                  </h2>

                  <div className="flex flex-col gap-8 md:flex-row">
                    <Slide
                      triggerOnce
                      direction="up"
                      duration={1000}
                      className="w-full"
                    >
                      <div className="service-item w-full bg-white rounded-lg p-12">
                        <div className="h-16 w-16 rounded-full bg-blue-light flex items-center mb-10 md:h-24 md:w-24">
                          <img
                            className="w-8 mx-auto md:w-12"
                            layout="fill"
                            src="/images/icons/computer.svg"
                            alt="Computer Icon"
                          />
                        </div>
                        <h5 className="text-lg font-semibold mb-3 md:text-xl lg:text-2xl">
                          {data.web_service}
                        </h5>
                        <p className="text-gray-400 font-medium text-sm md:text-base lg:text-lg">
                          E-Commerce, Landing Page, Company Profile, LMS,
                          Marketplace, Etc.
                        </p>
                      </div>
                    </Slide>
                    <Slide
                      triggerOnce
                      direction="up"
                      duration={1000}
                      delay={300}
                      className="w-full"
                    >
                      <div className="service-item w-full bg-white rounded-lg p-12">
                        <div className="h-16 w-16 rounded-full bg-blue-light flex items-center mb-10 md:h-24 md:w-24">
                          <img
                            className="h-8 mx-auto md:h-12"
                            layout="fill"
                            src="/images/icons/phone.svg"
                            alt="Computer Icon"
                          />
                        </div>
                        <h5 className="text-lg font-semibold mb-3 md:text-xl lg:text-2xl">
                          {data.app_service}
                        </h5>
                        <p className="text-gray-400 font-medium text-sm md:text-base lg:text-lg">
                          Mobile E-Commerce, Mobile Landing Page, Mobile Company
                          Profile, LMS, Marketplace, Etc.
                        </p>
                      </div>
                    </Slide>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
    </>
  );
}
