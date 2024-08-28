import React, { useState, FormEvent, useRef, useEffect } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [ref, isVisible] = useIntersectionObserver();
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC
      );
      console.log("SUCCESS!", result.text);
      setSubmitStatus("success");
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.log("FAILED...", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex justify-center items-center bg-black text-white p-8 flex-col"
    >
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <p className="text-xl mb-4">
        You can contact me via email, or message me on{" "}
        <a
          className="inline text-blue-500"
          href="https://www.x.com/yash654k"
          target="blank"
        >
          Twitter
        </a>{" "}
        if that suits you better.
      </p>
      <a
        className="underline text-xl mb-8"
        href="mailto:yashkhambhattak@gmail.com"
        target="blank"
      >
        yashkhambhattak@gmail.com
      </a>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl"
      >
        <form onSubmit={sendEmail} className="space-y-6" autoComplete="off">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                autoComplete="off"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-500 pr-10"
                placeholder="Your Name"
              />
              <User
                className="absolute right-3 top-3 text-gray-500"
                size={20}
              />
            </div>
            <div className="relative flex-1">
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                autoComplete="off"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-500 pr-10"
                placeholder="Your Email"
              />
              <Mail
                className="absolute right-3 top-3 text-gray-500"
                size={20}
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-500 pr-10 resize-none"
              placeholder="Your Message"
            />
            <MessageSquare
              className="absolute right-3 top-3 text-gray-500"
              size={20}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="h-5 w-5" />
              </motion.div>
            ) : (
              <>
                Send Message <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </motion.button>
        </form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: submitStatus !== "idle" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-center"
        >
          {submitStatus === "success" && (
            <p className="text-green-400">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400">
              Failed to send message. Please try again.
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
