import React, { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

const EndSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    <section className="min-h-screen w-full flex justify-center items-center bg-black text-white p-4 flex-col">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="text-xl mb-8">
        You can contact me via email, or message me on{" "}
        <a
          href="https://www.x.com/yash654k"
          target="blank"
          className="text-blue-600 inline "
        >
          Twitter.
        </a>{" "}
      </p>
      <div className="w-full max-w-md">
        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter your name here"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Enter your Email here"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
        {submitStatus === "success" && (
          <p className="mt-4 text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-red-400 text-center">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default EndSection;
