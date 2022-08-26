import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWork from "../components/HowItWork";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Works from "../components/Works";
import FloatingChat from "../components/parts/FloatingChat";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <WhyUs />
      <Pricing />
      <HowItWork />
      <Works />
      <Footer />
      <FloatingChat />
    </>
  );
}
