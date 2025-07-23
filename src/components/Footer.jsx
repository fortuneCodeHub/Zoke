// components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaTelegramPlane, FaInstagram, FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#0e021a] text-white py-10 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="flex space-x-6 text-2xl">
          <Link
            href="https://x.com/z0ke"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://t.me/zokescasino"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href="https://www.instagram.com/zokiess/?igsh=MTY3OXhvd3JndWp3aQ%3D%3D&utm_source=qr#"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://discord.com/invite/vDF9tAHX4w"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaDiscord />
          </Link>
        </div>

        <p className="text-sm text-gray-400">your@email.com</p>

        <p className="italic text-purple-300 text-sm">
          “Building Web3 one connection at a time.”
        </p>
      </div>
    </motion.footer>
  );
}
