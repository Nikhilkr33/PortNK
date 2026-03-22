import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 👉 replace
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setStatus("Message sent successfully 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch {
      setStatus("Error sending message ❌");
    }
  };

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <section className="min-h-screen flex items-center px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-400">
                Let’s build something amazing together 🚀
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">

              {/* Email */}
              <motion.div whileHover={{ scale: 1.05, rotateX: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg">
                <Mail className="text-purple-400" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">nikhilmuhal0037@gmail.com</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg">
                <Phone className="text-pink-400" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+91-9256570037</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Punjab, India</p>
                </div>
              </motion.div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">

              <a href="https://github.com/Nikhilkr33" target="_blank"
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Github />
              </a>

              <a href="https://linkedin.com/in/33nikhil/" target="_blank"
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Linkedin />
              </a>

              <a href="https://wa.me/919256570037" target="_blank"
                className="p-3 bg-green-500/20 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition">
                💬
              </a>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            whileHover={{ rotateY: 5 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold"
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>

              {/* Status */}
              {status && (
                <p className="text-center text-sm text-green-400">
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}