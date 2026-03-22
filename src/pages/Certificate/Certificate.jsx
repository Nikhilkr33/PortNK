import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Introduction to Hardware and Operating System",
    company: "IBM",
    date: "Sep 2025",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    company: "Google",
    date: "Sep 2025",
  },
  {
    title: "Computational Theory & Finite Automata",
    company: "Infosys",
    date: "Jul 2025",
  },
  {
    title: "Generative AI Certification",
    company: "Infosys",
    date: "Oct 2024",
  },
  {
    title: "Cloud Computing Fundamentals",
    company: "NPTEL",
    date: "Apr 2024",
  },
];

export default function CertificateSection() {
  return (
    <section className="min-h-screen bg-[#04081A] text-white py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Certifications
          </h2>
          <p className="text-gray-400 mt-4">
            My professional certifications and learning journey
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative p-[1px] rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            >
              {/* Glass Card */}
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl p-8 h-full border border-white/10 shadow-lg group-hover:shadow-blue-500/30 transition duration-300">

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-blue-400" />
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-blue-400 font-medium mb-2">
                    {cert.company}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}