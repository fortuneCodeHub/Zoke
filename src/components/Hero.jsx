'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const y = useTransform(scrollY, [0, 500], [0, 80]); // for parallax round image
  const bgY = useTransform(scrollY, [0, 500], [0, -100]); // slight upward scroll

  return (
    <section
      ref={ref}
        className='relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0e021a]'
    >
      {/* 🖼️ Full Background Image */}
      {/* 🖼️ Full Background Image */}
    <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
    >
        <img
            src="/images/bg-3.jpg"
            alt="space background"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
    </motion.div>

      {/* 🪐 Parallax Circle (behind avatar) */}
      <div
        className="absolute right-[10%] bottom-[10%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-3xl opacity-20 z-0"
        style={{ y }}
      >
        
      </div>

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-white h-screen mt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            I’m{' '}
            <span className="font-zentry font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Zoke
            </span>{' '}
            — Web3 Twitter Ambassador
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-md">
            Amplifying the voice of blockchain. Partnered with 50+ Web3 brands, delivering 10M+ impressions through authentic influence and storytelling.
            <br /><br />
            Backed by data, driven by vibes — I bring{' '}
            <span className="font-medium font-zentry bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">undeniable volume</span>{' '}
            to every project I touch.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition-transform hover:scale-105 glow-button"
          >
            Let’s Collaborate
          </a>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:justify-end z-10"
        >
          <div className="relative w-[500px] h-[500px] bg-red">
            <img
              src="/images/zoke-2.png"
              alt="Web3 KOL"
              className="w-full h-full object-cover glow-avatar"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
