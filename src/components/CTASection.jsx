// components/CTASection.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
        id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative lg:py-40 md:py-30 py-20 px-6 md:px-12 bg-gradient-to-r from-purple-950 via-purple-800 to-indigo-900 text-white text-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Let’s <span className="text-purple-400">grow Web3</span> together
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
        <Link
          href="mailto:youremail@example.com"
          className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/40"
        >
          Let’s Talk
        </Link>
        <Link
          href="https://x.com/z0ke"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white hover:border-purple-400 text-white px-6 py-3 rounded-xl font-medium transition hover:bg-purple-700 hover:text-white"
        >
          Follow on X
        </Link>
      </div>

      {/* Optional: Animated wave or bg element */}
      <div className="absolute -bottom-6 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-blue-500 blur-xl opacity-60"></div>
    </motion.section>
  );
}
