import React from "react";
import { useRouter } from "next/router";
import datas from "../assets/data.json";

export default function HowItWork() {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <section id="how" className="py-20">
                <div className="container">
                  <div className="bg-blue-light rounded-xl p-8 md:p-16">
                    <h2 className="font-semibold text-lg md:text-xl text-center mb-10 lg:text-3xl">
                      {data.section_title_how}
                    </h2>

                    <div className="flex flex-col gap-8 md:flex-row">
                      <div className="how-item how-1">
                        <div className="h-12 w-12 rounded-full bg-purple-light flex items-center justify-center mb-5">
                          <span className="text-3xl font-bold text-white-light">
                            1
                          </span>
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mb-3">
                          {data.title_how_contact}
                        </h5>
                        <p className="text-gray-500 font-medium text-sm md:text-base">
                          {data.desc_how_contact}
                        </p>
                      </div>
                      <div className="how-item how-2">
                        <div className="h-12 w-12 rounded-full bg-purple-light flex items-center justify-center mb-5">
                          <span className="text-3xl font-bold text-white-light">
                            2
                          </span>
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mb-3">
                          {data.title_how_plan}
                        </h5>
                        <p className="text-gray-500 font-medium text-sm md:text-base">
                          {data.desc_how_plan}
                        </p>
                      </div>
                      <div className="how-item how-3">
                        <div className="h-12 w-12 rounded-full bg-purple-light flex items-center justify-center mb-5">
                          <span className="text-3xl font-bold text-white-light">
                            3
                          </span>
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mb-3">
                          {data.title_how_dev}
                        </h5>
                        <p className="text-gray-500 font-medium text-sm md:text-base">
                          {data.desc_how_dev}
                        </p>
                      </div>
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
