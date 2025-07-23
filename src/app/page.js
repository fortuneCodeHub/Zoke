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

export const metadata = {
  title: "Zoke – Amplifying Web3 Voices with Impact",
  description:
    "Zoke is your trusted Web3 ally — empowering narratives, driving growth, and connecting communities across the crypto frontier.",
  openGraph: {
    title: "Zoke – Amplifying Web3 Voices with Impact",
    description: "Zoke powers influence and connection in the decentralized age.",
    url: "https://zoke.xyz/",
    siteName: "Zoke",
    images: [
      {
        url: "/avatar.jpg", // ✅ Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Zoke – Amplifying Web3 Voices with Impact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoke – Amplifying Web3 Voices with Impact",
    description:
      "Zoke is where Web3 influence meets strategy. Follow for storytelling, alpha, and community magic.",
    creator: "@fortuneCodeHub12", // update if needed
    images: ["/avatar.jpg"], // ✅ Match the image with your branding
  },
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon-16x16.png",
  },
};


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
