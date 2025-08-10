"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const ContactUs = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    communicationConsent: false,
    dataConsent: false
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState('marketing');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to thank you page on success
        router.push('/thank-you');
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const faqs = {
    marketing: [
      {
        question: "What marketing services do you offer?",
        answer: "We provide comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and email marketing campaigns."
      },
      {
        question: "How do you measure marketing success?",
        answer: "We use key performance indicators (KPIs) like conversion rates, ROI, engagement metrics, and customer acquisition costs to measure and optimize campaigns."
      },
      {
        question: "How long until we see results?",
        answer: "While some strategies like PPC show immediate results, SEO and organic growth typically take 3-6 months to show significant impact."
      }
    ],
    webdevelopment: [
      {
        question: "What technologies do you work with?",
        answer: "We specialize in modern web technologies including React, Next.js, Node.js, WordPress, and various headless CMS solutions."
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes, we provide comprehensive maintenance packages including security updates, performance optimization, and content updates."
      },
      {
        question: "What's your development process?",
        answer: "We follow agile methodology with iterative development, regular client check-ins, and transparent communication throughout the project."
      }
    ]
  };

  return (
    <main className="relative" style={{ backgroundColor: '#000319' }}>
      <div className="max-w-7xl w-full min-h-screen flex flex-col mx-auto sm:px-10 px-5">
        {/* Header */}
        <FloatingNav navItems={navItems} />

        {/* Page Content */}
        <section className="flex-1 py-20 mt-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Left Column - Contact Form */}
            <motion.div 
              className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800"
              variants={itemVariants}
            >
              <motion.h1 className="text-3xl font-bold text-white mb-2" variants={itemVariants}>
                Get In Touch
              </motion.h1>
              <motion.h2 className="text-xl text-[#00FF8B] mb-6" variants={itemVariants}>
                Let&apos;s Talk!
              </motion.h2>
              <motion.p className="text-gray-300 mb-8" variants={itemVariants}>
                Get in touch with us using the enquiry form or contact details below.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0439EB]"
                      placeholder="Enter Your First Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0439EB]"
                      placeholder="Enter Your Last Name"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0439EB]"
                    placeholder="Enter Your Email Address"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0439EB]"
                    placeholder="Type something..."
                    required
                  ></textarea>
                </motion.div>

                <motion.div className="space-y-3" variants={itemVariants}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="communicationConsent"
                      name="communicationConsent"
                      checked={formData.communicationConsent}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0439EB] bg-gray-800 border-gray-700 rounded focus:ring-[#0439EB]"
                    />
                    <label htmlFor="communicationConsent" className="ms-2 text-sm text-gray-300">
                      I agree to receive other communication messages.*
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="dataConsent"
                      name="dataConsent"
                      checked={formData.dataConsent}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0439EB] bg-gray-800 border-gray-700 rounded focus:ring-[#0439EB]"
                      required
                    />
                    <label htmlFor="dataConsent" className="ms-2 text-sm text-gray-300">
                      I give my consent to store my data.*
                    </label>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-[#0439EB] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50"
                  >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>

              <motion.p className="text-gray-500 text-xs mt-6" variants={itemVariants}>
                We are committed to protecting and respecting your privacy
              </motion.p>
            </motion.div>

            {/* Right Column - Quick Contact */}
            <div className="space-y-8">
              <motion.div 
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800"
                variants={itemVariants}
              >
                <motion.h2 className="text-2xl font-bold text-white mb-6" variants={itemVariants}>
                  Quick Contact
                </motion.h2>
                
                <div className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-gray-300 font-medium mb-2">Email</h3>
                    <a 
                      href="mailto:sales@anyscreen.in" 
                      className="text-[#00FF8B] hover:underline flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      sales@anyscreen.in
                    </a>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-gray-300 font-medium mb-2">Phone Number</h3>
                    <a 
                      href="tel:+917559236621" 
                      className="text-gray-300 hover:text-[#00FF8B] flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 7559236621
                    </a>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-gray-300 font-medium mb-2">Address</h3>
                    <div className="text-gray-300 flex items-start gap-2">
                      <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p>Thane, Maharashtra, Pincode - 400604</p>
                        <p className="text-sm text-gray-500">India</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-gray-300 font-medium mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/anyscreen.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors duration-200 bg-gray-800 rounded-lg px-3 py-2 hover:bg-gray-700"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-sm font-medium">Instagram</span>
                      </a>

                      <a 
                        href="https://www.linkedin.com/company/anyscreentech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 bg-gray-800 rounded-lg px-3 py-2 hover:bg-gray-700"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactUs;
