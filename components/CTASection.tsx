'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="text-center py-20 bg-[#111132] px-4">
      {/* Animate Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to Build Your Digital Presence?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Stop waiting. Start leading. <br />
          Your website is not a cost — it’s your{' '}
          <span className="text-[#00FF8B] font-semibold">24/7 salesperson</span>.
        </p>

        <motion.a
          href="https://wa.link/8ukgju"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00FF8B] hover:bg-green-300 text-black px-6 py-3 rounded-full text-lg transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          Let’s Build It →
        </motion.a>
      </motion.div>
    </section>
  );
}
