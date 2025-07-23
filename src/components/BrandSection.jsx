"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { name: "Emperoronsol", src: "/images/emperoronsol.jpg", link: "https://x.com/Emperoronsol" },
  { name: "Doginal Dogs", src: "/images/doginal-dogs.jpg", link: "https://x.com/doginaldogsx" },
  { name: "ZokeCoin", src: "/images/zoke-project.jpeg", link: "https://x.com/z0ke" },
  // Add more logos as needed
];

const bounceIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BrandsSection() {
  return (
    <section className="lg:py-40 md:py-30 py-20 px-4 md:px-16 bg-[#0e021a] text-white" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bounceIn}
          custom={0}
          className="text-3xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mb-12"
        >
          🤝 Trusted by Projects & Brands
        </motion.h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
          {logos.map((brand, i) => (
            <motion.a
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              key={brand.name}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={bounceIn}
              className="group flex items-center justify-center bg-purple-800/10 border border-purple-600/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={60}
                className="grayscale group-hover:grayscale-0 transition duration-300 object-contain h-12"
              />
            </motion.a>
          ))}
        </div>

        {/* Case Study Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bounceIn}
          custom={logos.length + 1}
        >
          <Link
            href="https://twitter.com/z0ke/status/1944766332630966752"
            target="_blank"
            className="px-5 py-2 rounded-full bg-purple-700 hover:bg-purple-600 transition border border-purple-400"
          >
            Emperoronsol Campaign
          </Link>
          <Link
            href="https://twitter.com/z0ke/status/1946973948417114298"
            target="_blank"
            className="px-5 py-2 rounded-full bg-purple-700 hover:bg-purple-600 transition border border-purple-400"
          >
            Doginal Dogs Campaign
          </Link>
          <Link
            href="https://twitter.com/z0ke/status/1946676918234890726"
            target="_blank"
            className="px-5 py-2 rounded-full bg-purple-700 hover:bg-purple-600 transition border border-purple-400"
          >
            ZokeCoin Campaign
          </Link>
        </motion.div>

        {/* Optional Video Embed */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bounceIn}
          custom={logos.length + 2}
          className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-purple-500/30"
        >
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Testimonial or Campaign"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div> */}
      </div>
    </section>
  );
}
