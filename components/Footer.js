import React from "react";
import { useRouter } from "next/router";
import datas from "../assets/data.json";
import { motion } from "framer-motion";

export default function Footer() {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <footer className="pt-10">
                <div className="container">
                  <div className="flex flex-col gap-16 md:gap-20 mb-10 lg:flex-row">
                    <div
                      id="contact"
                      className="w-full flex flex-col gap-6 md:gap-12 lg:w-1/3"
                    >
                      <h3 className="text-2xl md:text-3xl">KodingNow</h3>
                      <div className="flex flex-row items-center border border-gray-500 rounded-md px-3 py-5 gap-3">
                        <motion.img
                          whileHover={{
                            scale: 1.1,
                            rotate: 15,
                          }}
                          src="/images/icons/mail.svg"
                          alt="Mail Icon"
                        />
                        <input
                          type="email"
                          className="w-full bg-white-light focus:outline-none"
                          placeholder={data.your_email}
                        />
                        <a href="#">
                          <motion.img
                            whileHover={{
                              scale: 1.1,
                              rotate: 15,
                            }}
                            className="w-8"
                            src="/images/icons/send.svg"
                            alt="Send Icon"
                          />
                        </a>
                      </div>
                      <div className="flex flex-row justify-center gap-12 mb-2 lg:justify-start">
                        <div>
                          <a
                            href="https://www.instagram.com/kodingnowcom/"
                            target="_blank"
                            rel="noreferrer"
                            className="group transition-all duration-300"
                          >
                            <motion.svg
                              whileHover={{
                                scale: 1.1,
                                rotate: 15,
                              }}
                              className="stroke-gray-500 group-hover:stroke-purple-light"
                              width="33"
                              height="33"
                              viewBox="0 0 33 33"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.375 2.75H9.625C5.82804 2.75 2.75 5.82804 2.75 9.625V23.375C2.75 27.172 5.82804 30.25 9.625 30.25H23.375C27.172 30.25 30.25 27.172 30.25 23.375V9.625C30.25 5.82804 27.172 2.75 23.375 2.75Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M22 15.6337C22.1697 16.778 21.9743 17.9467 21.4414 18.9736C20.9086 20.0004 20.0656 20.8331 19.0323 21.3532C17.9989 21.8733 16.8279 22.0544 15.6857 21.8706C14.5436 21.6868 13.4884 21.1475 12.6704 20.3295C11.8524 19.5115 11.3132 18.4564 11.1294 17.3142C10.9456 16.1721 11.1266 15.001 11.6467 13.9677C12.1668 12.9344 12.9995 12.0913 14.0264 11.5585C15.0532 11.0257 16.2219 10.8302 17.3663 10.9999C18.5335 11.173 19.6142 11.7169 20.4486 12.5513C21.283 13.3858 21.8269 14.4664 22 15.6337Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M24.0625 8.9375H24.0763"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </motion.svg>
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="transition-all duration-300 group"
                          >
                            <motion.svg
                              whileHover={{
                                scale: 1.1,
                                rotate: 15,
                              }}
                              className="stroke-gray-500 group-hover:stroke-purple-light"
                              width="34"
                              height="33"
                              viewBox="0 0 34 33"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_38_40)">
                                <path
                                  d="M32 4.12515C30.6833 5.05394 29.2254 5.76431 27.6825 6.2289C26.8544 5.27673 25.7538 4.60186 24.5297 4.29555C23.3055 3.98925 22.0168 4.0663 20.8379 4.51628C19.6589 4.96626 18.6466 5.76746 17.9379 6.81152C17.2291 7.85557 16.8581 9.09212 16.875 10.3539V11.7289C14.4586 11.7916 12.0643 11.2556 9.90514 10.1689C7.74602 9.08214 5.88919 7.47828 4.5 5.50015C4.5 5.50015 -1 17.8752 11.375 23.3752C8.54323 25.2974 5.16984 26.2612 1.75 26.1252C14.125 33.0002 29.25 26.1252 29.25 10.3127C29.2487 9.92965 29.2119 9.5476 29.14 9.1714C30.5433 7.78746 31.5336 6.04013 32 4.12515V4.12515Z"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_38_40">
                                  <rect
                                    width="33"
                                    height="33"
                                    fill="white"
                                    transform="translate(0.375)"
                                  />
                                </clipPath>
                              </defs>
                            </motion.svg>
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="transition-all duration-300 group"
                          >
                            <motion.svg
                              whileHover={{
                                scale: 1.1,
                                rotate: 15,
                              }}
                              className="stroke-gray-500 group-hover:stroke-purple-light"
                              width="34"
                              height="33"
                              viewBox="0 0 34 33"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.5 2.75H21.375C19.5516 2.75 17.803 3.47433 16.5136 4.76364C15.2243 6.05295 14.5 7.80164 14.5 9.625V13.75H10.375V19.25H14.5V30.25H20V19.25H24.125L25.5 13.75H20V9.625C20 9.26033 20.1449 8.91059 20.4027 8.65273C20.6606 8.39487 21.0103 8.25 21.375 8.25H25.5V2.75Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </motion.svg>
                          </a>
                        </div>
                      </div>
                      <p className="text-gray-500 text-center lg:text-left -mt-3">
                        kodingnow@gmail.com
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-10 md:flex-row lg:w-2/3">
                      <div className="w-full flex flex-col gap-7 md:gap-12">
                        <h5 className="text-xl">{data.about}</h5>
                        <div className="flex flex-col gap-3 md:gap-7">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.about_us}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.features}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.latest}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.career}
                          </a>
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-7 md:gap-12">
                        <h5 className="text-xl">{data.company}</h5>
                        <div className="flex flex-col gap-3 md:gap-7">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.our_team}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.partner_with_us}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.faq}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.blog}
                          </a>
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-7 md:gap-12">
                        <h5 className="text-xl">{data.support}</h5>
                        <div className="flex flex-col gap-3 md:gap-7">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.account}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.support_center}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.feedback}
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-light"
                          >
                            {data.contact_us}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-500 text-center pt-12 pb-5 border-t border-gray-300">
                    <p>
                      Office address : Jl. Widororejo No.4 Makamhaji, Kartasura
                      Sukoharjo 57161
                    </p>
                  </div>
                  <div className="pb-12 text-center text-sm md:text-base">
                    <a href="#" className="hover:text-purple-light">
                      Term of Service
                    </a>{" "}
                    |{" "}
                    <a href="#" className="hover:text-purple-light">
                      Privacy Police
                    </a>{" "}
                    |{" "}
                    <a href="#" className="hover:text-purple-light">
                      Licenses
                    </a>
                    &copy; 2022 KodingNow. Copyright and All rights reserved.
                  </div>
                </div>
              </footer>
            </div>
          );
        })}
    </>
  );
}
