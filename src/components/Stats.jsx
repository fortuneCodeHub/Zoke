'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Followers', value: 35500, suffix: '+', description: 'Followers on X' },
  { label: 'Campaigns', value: 50, suffix: '+', description: 'Projects Promoted' },
  { label: 'Engagement', value: 10000000, suffix: '+', description: 'Impressions Delivered' },
  { label: 'Regions', value: 1, suffix: '', description: 'Global Web3 Audience' },
];

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};

const StatCard = ({ label, value, suffix, description, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      className="p-6 rounded-2xl bg-gradient-to-br from-[#1a032a] to-[#2b0e45] shadow-xl border border-purple-900 hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="text-4xl font-bold text-white">
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-purple-300">{label}</div>
      <div className="text-xs text-gray-400">{description}</div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="w-full py-20 md:pb-30 pb-10 bg-[#0e021a] md:px-4 px-6 -mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-10 text-center">
          Reach & Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
