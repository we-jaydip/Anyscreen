'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FomoCarousel() {
  const cards = [
    {
      title: 'Missed Clients',
      quote: '“I liked the product but couldn’t find more details, so I moved on.”',
    },
    {
      title: 'Lost Branding Power',
      quote: 'No logo, no story, no recognition. A website is your brand’s home.',
    },
    {
      title: 'Stuck in Local Limbo',
      quote: 'Without a website, you’re not visible beyond your local network.',
    },
    {
      title: 'No Online Presence',
      quote: 'A website ensures you’re available for customers 24/7, anywhere.',
    },
    {
      title: 'Missing Trust',
      quote: '84% of customers trust brands with websites more than those without.',
    },
    {
      title: 'Lost Opportunities',
      quote: 'Without a website, you’re missing out on potential global clients.',
    },
    {
      title: 'Brand Unrecognition',
      quote: 'No website = no identity. A website builds your brand’s story.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (cards.length - 4)); // Adjust to show 3 cards at a time
    }, 4000); // Change the card every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="py-12 px-6 bg-[#000319]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#00FF8B]">
        What Are You Missing Without It?
      </h2>
      <div className="relative">
        <motion.div
          className="flex space-x-6 justify-center"
          animate={{ x: -activeIndex * 300 }} // Adjust the width based on your card size (300px per card)
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="min-w-[280px] p-6 bg-[#111132] border border-gray-700 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#00FF8B]">{card.title}</h3>
              <p className="text-gray-300">{card.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
