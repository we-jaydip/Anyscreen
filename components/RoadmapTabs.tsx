'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Why Start With a Website?', 'What Are You Missing?', 'What Happens After?'];

export default function RoadmapTabs() {
  const [active, setActive] = useState(0);

  const content = [
    <>
      <p>🔍 Your business is being Googled. Without a website, you’re invisible.</p>
      <p>🤝 84% of customers trust brands with websites.</p>
      <p>📖 Instagram & WhatsApp are not your full story.</p>
    </>,
    <>
      <p>👤 “I liked the product but couldn’t find details. So I moved on.”</p>
      <p>🚫 No branding, no authority = no trust.</p>
      <p>📍 You’re stuck in your local area without visibility.</p>
    </>,
    <>
      <p>🌐 Be found on Google 24/7 — even while you sleep.</p>
      <p>🏆 Build trust instantly with reviews, case studies, and contact info.</p>
      <p>📈 Stay ahead — 3 of 5 business owners regret delaying their website.</p>
    </>,
  ];

  return (
    <section className="px-6 py-12 text-center bg-[#000319] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Roadmap</h2>

      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 py-2 border rounded-full transition-all duration-300 ${
              active === index
                ? 'bg-[#00FF8B] text-black font-semibold'
                : 'border-gray-500 text-gray-300 hover:border-[#00FF8B] hover:text-[#00FF8B]'
            }`}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 4px 12px rgba(0, 255, 139, 0.3)',
            }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="space-y-3 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content[active]}
      </motion.div>
    </section>
  );
}
