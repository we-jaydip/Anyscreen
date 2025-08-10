'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2 + i * 0.1,
      }
    }),
  };

  return (
    <section ref={ref} className="py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold text-[#ffffff] mb-6">Without Website vs With Website</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Before Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-gray-800 p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-bold mb-2 text-red-400">Before</h3>
          <ul className="text-left list-disc list-inside space-y-4 text-gray-300">
            {[
              '❌ Only local customers',
              '❌ No business info online',
              '❌ Lack of trust',
              '❌ Missed opportunities',
            ].map((text, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                custom={i}
                initial="hidden"
                animate={controls}
                className="flex items-center gap-2"
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* After Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-[#00FF8B] p-6 rounded-lg text-black shadow"
        >
          <h3 className="text-xl font-bold mb-2">After</h3>
          <ul className="text-left list-disc list-inside space-y-4">
            {[
              '✅ Pan-India visibility',
              '✅ Brand trust & proof',
              '✅ Google SEO & discovery',
              '✅ 24/7 client inquiries',
            ].map((text, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                custom={i}
                initial="hidden"
                animate={controls}
                className="flex items-center gap-2"
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
