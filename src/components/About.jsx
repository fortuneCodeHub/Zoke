"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const skills = [
  "Community Growth",
  "Brand Storytelling",
  "Content Strategy",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-16 bg-[#0e021a] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-center max-w-3xl mx-auto leading-relaxed mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          I'm a passionate Web3 KOL and Twitter Ambassador with over{" "}
          <span className="relative inline-block">
            <span className="z-10 relative font-semibold">36.5k followers</span>
            <motion.span
              layoutId="highlight"
              className="absolute bottom-0 left-0 h-1 w-full bg-purple-500/60 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </span>{" "}
          on X. My mission is to connect cutting-edge crypto projects with global communities and tell powerful stories that build trust and hype.
        </motion.p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="px-6 py-3 rounded-full bg-purple-800/30 border border-purple-600 hover:shadow-md hover:shadow-purple-600 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={skills.length}
        >
          <Link
            href="/resume.pdf"
            className="underline hover:text-purple-400 transition"
            target="_blank"
          >
            Resume
          </Link>
          <Link
            href="https://x.com/yourhandle"
            className="underline hover:text-purple-400 transition"
            target="_blank"
          >
            X Profile
          </Link>
          <Link
            href="/articles"
            className="underline hover:text-purple-400 transition"
          >
            Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


