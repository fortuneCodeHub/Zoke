import About from "@/components/About";
import BrandsSection from "@/components/BrandSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import TwitterSection from "@/components/TwitterSection";
import Image from "next/image";
// import '/globals.css';

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <BrandsSection />
        {/* <TwitterSection /> */}
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
