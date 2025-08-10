'use client';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { value: "56%", label: "Trust Lost Without a Website" },
    { value: "70%", label: "Customers Research Online First" },
    { value: "3X", label: "More Conversions With Website" },
  ];

  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-2xl font-semibold mb-8 text-[#00FF8B]">
        Here’s What You’re Losing Without a Website
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-[#00FF8B] text-black rounded-lg p-6 w-60 shadow-md cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 20px rgba(0, 255, 139, 0.3)',
            }}
          >
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
