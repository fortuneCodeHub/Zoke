import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Image from "next/image";
// import '/globals.css';

export default function Home() {
  return (
    <>
      <div className="mb-200">
        <Navbar />
        <Hero />
        <Stats />
        <About />
      </div>
    </>
  );
}
