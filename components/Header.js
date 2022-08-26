import Navbar from "./parts/Navbar/Navbar";
import { useRouter } from "next/router";
import datas from "../assets/data.json";
import { motion } from "framer-motion";

export default function Header() {
  const { locale } = useRouter();
  return (
    <>
      <div className="md:mb-20 lg:mb-48">
        <header className="bg-hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, stiffness: 50 }}
            className="container"
          >
            <Navbar />
          </motion.div>

          <div className="container">
            <div className="hero text-center py-3">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hero-heading font-bold text-xl text-blue-bold mb-5 px-0 md:px-5 md:text-[40px] lg:text-[60px] leading-tight md:mb-8"
              >
                The <span className="text-blue-medium">Best Way</span> to Make{" "}
                <br />
                <span className="text-blue-medium"> Your Dreams</span> Come True
              </motion.h1>
              {datas.data
                .filter((p) => p.locale === locale)
                .map((data, i) => {
                  return (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                      key={i}
                      className="font-light text-xs md:text-base mb-5 px-0 md:px-10 lg:px-28 text-dark"
                    >
                      {data.sub_heading}
                    </motion.p>
                  );
                })}
              <div className="px-10 lg:px-36">
                <motion.img
                  initial={{ y: "100vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                  className="hero-img mx-auto h-auto w-auto"
                  src="/images/hero.png"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
