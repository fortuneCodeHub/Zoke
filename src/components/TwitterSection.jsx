'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tweet } from 'react-tweet';

const tweets = [
  {
    id: '1946057507094380547', // Replace with your tweet ID
    tag: '🔥 Viral',
  },
  {
    id: '1946973948417114298',
    tag: '🎯 Insightful',
  },
  {
    id: '1946650031345254414',
    tag: '💬 Fun',
  },
];

const tags = ['🔥 Viral', '🎯 Insightful', '💬 Fun'];

export default function TwitterSection() {
  const [activeTag, setActiveTag] = useState('🔥 Viral');

  const filteredTweets = tweets.filter((t) => t.tag === activeTag);

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-[#100420] to-[#190631]">
      <div className="max-w-6xl mx-auto text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🧵 Twitter Highlights
        </motion.h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeTag === tag
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Tweets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet, idx) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 rounded-xl p-4 hover:shadow-purple-600/30 hover:shadow-lg transition-all duration-300"
            >
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
