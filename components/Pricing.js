import React from "react";
import ButtonSquare from "./parts/ButtonSquare";
import Image from "next/image";

export default function Pricing() {
  return (
    <>
      <section id="pricing" className="py-20">
        <div className="container">
          <h2 className="font-semibold text-lg text-center mb-10 md:text-xl lg:text-3xl">
            Harga
          </h2>

          <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="pricing-item bg-white flex flex-col rounded-[46px] p-8 md:p-14 w-full">
              <div className="flex-1">
                <h5 className="text-lg md:text-xl text-purple-light mb-5">
                  Web Basic
                </h5>
                <div className="mb-5">
                  <span>Start from</span>
                  <br />
                  <span className="text-2xl md:text-3xl font-semibold text-purple-light">
                    Rp 1.XXX.000,-
                  </span>
                </div>
                <p className="text-sm mb-8">
                  Suitable for personal websites, company profiles, and other
                  simple websites.
                </p>

                <ul className="mb-8 flex flex-col gap-2 text-sm md:text-base">
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Source code
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Website design
                  </li>
                  <li className="w-full flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Domain [dot] com for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Hosting for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    5 menus
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Dynamic website
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    7 working days
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    1 week maintenance
                  </li>
                </ul>
              </div>
              <ButtonSquare
                href="https://wa.me/+6288806413757?text=Paket Web Basic. "
                text="Choose Plan"
                addClassNames="bg-white border-purple-light text-purple-light hover:bg-purple-light hover:text-white"
              />
            </div>
            <div className="pricing-item bg-purple-light text-white flex flex-col rounded-[46px] p-8 md:p-14 w-full">
              <div className="flex-1">
                <h5 className="text-lg md:text-xl mb-5">Web Regular</h5>
                <div className="mb-5">
                  <span>Start from</span>
                  <br />
                  <span className="text-2xl md:text-3xl font-semibold">
                    Rp 4.XXX.000,-
                  </span>
                </div>
                <p className="text-sm mb-8">
                  Suitable for government web, virtual lab web, and other
                  websites with more complex features.
                </p>

                <ul className="mb-8 flex flex-col gap-2 text-sm md:text-base">
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Source code
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Website design
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Domain [dot] com for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Hosting for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    10 menus
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Dynamic website
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    30 working days
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    2 week maintenance
                  </li>
                </ul>
              </div>
              <ButtonSquare
                href="https://wa.me/+6288806413757?text=Paket Web Regular. "
                text="Choose Plan"
                addClassNames="bg-purple-light text-white border-white hover:bg-white hover:text-purple-light"
              />
            </div>
            <div className="pricing-item bg-white flex flex-col rounded-[46px] p-8 md:p-14 w-full">
              <div className="flex-1">
                <h5 className="text-lg md:text-xl text-purple-light mb-5">
                  Web Premium
                </h5>
                <div className="mb-5">
                  <span>Start from</span>
                  <br />
                  <span className="text-2xl md:text-3xl font-semibold text-purple-light">
                    Rp 9.XXX.000,-
                  </span>
                </div>
                <p className="text-sm mb-8">
                  Suitable for e-learning websites, academic platforms, and
                  other more complex websites.
                </p>

                <ul className="mb-8 flex flex-col gap-2 text-sm md:text-base">
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Source code
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Website design
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Domain [dot] com, id, etc for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Hosting for 1 year & Unlimited
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Customize menus
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Dynamic website
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Over 30 working days
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    1 month maintenance
                  </li>
                </ul>
              </div>
              <ButtonSquare
                href="https://wa.me/+6288806413757?text=Paket Web Premium. "
                text="Choose Plan"
                addClassNames="bg-white border-purple-light text-purple-light hover:bg-purple-light hover:text-white"
              />
            </div>
            <div className="pricing-item bg-white flex flex-col rounded-[46px] p-8 md:p-14 w-full">
              <div className="flex-1">
                <h5 className="text-lg md:text-xl text-purple-light mb-5">
                  App Basic
                </h5>
                <div className="mb-5">
                  <span>Start from</span>
                  <br />
                  <span className="text-2xl md:text-3xl font-semibold text-purple-light">
                    Rp 2.XXX.000,-
                  </span>
                </div>
                <p className="text-sm mb-8">
                  Suitable for personal applications, corporate profile
                  applications and other simple applications.
                </p>

                <ul className="mb-8 flex flex-col gap-2 text-sm md:text-base">
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Source code
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Application design
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Domain [dot] com for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Hosting for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    1 static landing page & 5 menus
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Free upload Google Play
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    14 working days
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    1 week maintenance
                  </li>
                </ul>
              </div>
              <ButtonSquare
                href="https://wa.me/+6288806413757?text=Paket Android App Basic. "
                text="Choose Plan"
                addClassNames="bg-white border-purple-light text-purple-light hover:bg-purple-light hover:text-white"
              />
            </div>
            <div className="pricing-item bg-white flex flex-col rounded-[46px] p-8 md:p-14 w-full">
              <div className="flex-1">
                <h5 className="text-lg md:text-xl text-purple-light mb-5">
                  App Regular
                </h5>
                <div className="mb-5">
                  <span>Start from</span>
                  <br />
                  <span className="text-2xl md:text-3xl font-semibold text-purple-light">
                    Rp 5.XXX.000,-
                  </span>
                </div>
                <p className="text-sm mb-8">
                  Suitable for government apps, laboratory apps, and other
                  applications with more complex features.
                </p>

                <ul className="mb-8 flex flex-col gap-2 text-sm md:text-base">
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Source code
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Application design
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Domain [dot] com for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Hosting for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    1 static landing page & 10 menus
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Free upload Google Play
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    30 working days
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    2 week maintenance
                  </li>
                </ul>
              </div>
              <ButtonSquare
                href="https://wa.me/+6288806413757?text=Paket Android App Regular. "
                text="Choose Plan"
                addClassNames="bg-white border-purple-light text-purple-light hover:bg-purple-light hover:text-white"
              />
            </div>
            <div className="pricing-item bg-white flex flex-col rounded-[46px] p-8 md:p-14 w-full">
              <div className="flex-1">
                <h5 className="text-lg md:text-xl text-purple-light mb-5">
                  App Premium
                </h5>
                <div className="mb-5">
                  <span>Start from</span>
                  <br />
                  <span className="text-2xl md:text-3xl font-semibold text-purple-light">
                    Rp 10.XXX.000,-
                  </span>
                </div>
                <p className="text-sm mb-8">
                  Suitable for e-learning applications, academic systems, and
                  other more complex applications.
                </p>

                <ul className="mb-8 flex flex-col gap-2 text-sm md:text-base">
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Source code
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Application design
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Domain [dot] com for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Hosting for 1 year
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Customize landing page & menus
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    Free upload Google Play
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    30+ working days
                  </li>
                  <li className="flex flex-row gap-4 items-center">
                    <div>
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-light rounded-full">
                        <img
                          className="w-4"
                          src="/images/icons/check.svg"
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    1 month maintenance
                  </li>
                </ul>
              </div>
              <ButtonSquare
                href="https://wa.me/+6288806413757?text=Paket Android App Premium. "
                text="Choose Plan"
                addClassNames="bg-white border-purple-light text-purple-light hover:bg-purple-light hover:text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
