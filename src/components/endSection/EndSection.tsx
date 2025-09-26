import React, { useState, useEffect } from "react";
import { Mail, Send, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm: React.FC = () => {
  // State to control whether the form or the direct links are visible
  const [showForm, setShowForm] = useState(true);

  // Effect to switch the view after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(false);
    }, 1500); // The form will be visible for 1.5 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  const formVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const linksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex justify-center items-center bg-black text-white p-8"
    >
      <div className="w-full max-w-xl text-center">
        {/* AnimatePresence handles the exit and enter animations */}
        <AnimatePresence mode="wait">
          {showForm ? (
            <motion.div
              key="contact-form"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r    bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-xl mb-8 text-gray-400">
                Thinking of something great? Let's build it together.
              </p>
              {/* This is just a visual placeholder form */}
              <div className="space-y-6 text-left">
                <div className="flex space-x-4">
                  <input
                    readOnly
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-md placeholder-gray-600"
                    placeholder="Your Name"
                  />
                  <input
                    readOnly
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-md placeholder-gray-600"
                    placeholder="Your Email"
                  />
                </div>
                <textarea
                  readOnly
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md placeholder-gray-600 resize-none"
                  placeholder="Your Message"
                />
                <button
                  disabled
                  className="w-full flex items-center justify-center px-6 py-3 bg-white text-black rounded-md font-semibold text-lg"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="direct-links"
              initial="hidden"
              animate="visible"
              variants={linksVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-white bg-clip-text text-transparent">
                Actually, scrap that.
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white">
               Just DM or email me directly.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                {/* Email Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:yash456k@gmail.com"
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-[#EA4335] text-white rounded-md hover:bg-[#d62827] transition-colors font-semibold"
                >
                  <Mail size={20} />
                  Email Me
                </motion.a>

                {/* Twitter Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.x.com/yash654k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#1DA1F2] via-black to-black [background:linear-gradient(to_right,#1DA1F2_0%,black_75%,black_100%)] text-white rounded-md hover:bg-[#1a91da] transition-colors font-semibold"
                >
                  <Twitter size={20} />
                  Twitter / X
                </motion.a>

                {/* LinkedIn Link */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/yash-khambhatta" // Replace with your actual LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-[#0A66C2] text-white rounded-md hover:bg-[#095ab2] transition-colors font-semibold"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;