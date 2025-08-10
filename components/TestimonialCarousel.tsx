'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "Amit P.", feedback: "I got 3x more leads after my website went live!" },
    { name: "Ritika D.", feedback: "People started trusting my brand instantly." },
    { name: "Mohit S.", feedback: "Local clients found me on Google, no ads needed!" },
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.section
            className="text-center px-6 py-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-semibold text-[#00FF8B] mb-6">Real Results. Real Clients.</h2>

            <motion.div
                key={index}
                className="bg-[#0A0F2E] rounded-lg px-6 py-4 mx-auto max-w-xl cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
            >
                <p className="text-xl italic text-gray-300 mb-2">“{testimonials[index].feedback}”</p>
                <p className="text-[#00FF8B] font-medium">— {testimonials[index].name}</p>
            </motion.div>
        </motion.section>
    );
}
