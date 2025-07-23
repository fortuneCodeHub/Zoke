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
    <section id="about" className="py-20 px-4 md:px-16 bg-[#0e021a] text-white pt-40">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left Column - Two Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Card - Bio */}
          <motion.div
            className="flex-1 bg-[#1a0b2e] rounded-2xl p-6 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
                <motion.h2
                    className="text-4xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-lg leading-relaxed"
                    variants={fadeIn}
                    custom={1}
                >
                I'm a passionate Web3 KOL and Twitter Ambassador with over{" "}
                <span className="relative inline-block">
                    <span className="z-10 relative font-semibold">35.5k followers</span>
                    <motion.span
                        layoutId="highlight"
                        className="absolute bottom-0 left-0 h-1 w-full bg-purple-500/60 rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </span>{" "}
                on X. I’ve been in crypto since I was 12, building up 6 years of experience. My mission is to connect cutting-edge crypto projects with global communities and tell powerful stories that build trust and hype.
                </motion.p>

                <div className="my-5">
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Skills</h3>
                    <motion.div
                        className="mt-8 flex flex-wrap gap-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                            },
                        }}
                    >
                        {skills.map((skill, idx) => (
                            <motion.span
                            key={idx}
                            className="px-4 py-2 bg-purple-700/30 text-sm rounded-full border border-purple-500/50 backdrop-blur hover:scale-105 transition-transform duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 },
                            }}
                            >
                            {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Links */}
                <div className="">
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Links</h3>
                    <motion.div
                        className="flex justify-start gap-6"
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
                            href="https://x.com/z0ke"
                            className="underline hover:text-purple-400 transition"
                            target="_blank"
                        >
                            X Profile
                        </Link>
                        <Link
                            href="https://twitter.com/z0ke/status/1944766332630966752"
                            target="_blank"
                            className="underline hover:text-purple-400 transition"
                        >
                            X Threads
                        </Link>
                    </motion.div>
                </div>
          </motion.div>

            {/* Bottom Card - Future Content / Placeholder */}
            <motion.div
                className="h-full bg-[#1a0b2e] rounded-2xl shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={2}
            >
                <img
                    src="/images/bg-4.jpg"
                    alt="space background"
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>
        </div>

        {/* Right Card - Tall */}
        <motion.div
          className="md:row-span-2 bg-[#1f0d35] rounded-2xl p-6 flex flex-col justify-between shadow-lg relative md:h-full h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
        >
          <video
            src="/videos/zoke.mp4"
            loop
            muted
            autoPlay
            // className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            className="absolute left-0 top-0 size-full object-cover object-center rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
