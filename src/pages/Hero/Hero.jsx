import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {

  const [code] = useState(`
const profile = {
    name: 'Nikhil Kumar',
    title: 'Full-Stack Developer | Problem Solver',
    skills: [
        'React', 'Node.js', 'Express',
        'MongoDB', 'MySQL', 'JavaScript',
        'C++', 'Python', 'Git', 'Docker'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    projects: ['Plan My Shadi', 'AI-Meditation'],
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding">
          
          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">

            {/* LEFT */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm">
                  Welcome to my universe
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-4">
                Hello <br />
                I&apos;m{" "}
                <span className="typing-effect gradient-text">
                  Nikhil Kumar
                </span>
              </h1>

              {/* Role (clean single line) */}
              <div className="mb-4">
                <span className="text-blue-400 text-2xl font-medium">
                  React & Node.js Developer
                </span>
              </div>

              {/* Small tagline (IMPORTANT FIX) */}
              <p className="text-gray-400 text-base mb-6">
                JavaScript Developer 🚀 | Full Stack Enthusiast 💻 | Problem Solver 🔥
              </p>

              {/* Description (short + clean) */}
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
                Passionate full-stack developer skilled in React, Node.js, and modern web technologies.
                Built projects like Plan My Shadi and AI-Meditation with focus on performance and user experience.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-blue-500 rounded-lg hover:scale-105 transition"
                >
                  View Projects
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-resume"
                >
                  Get Resume
                </a>
              </div>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-[#091121] rounded-xl shadow-lg border border-gray-800">

                {/* Header (like VS Code) */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-sm text-gray-400">profile.js</span>
                </div>

                {/* Scrollable Code */}
                <pre className="language-javascript max-h-[350px] overflow-y-auto text-sm p-4 text-gray-300">
                  <code>
{`const profile = {
  name: 'Nikhil Kumar',
  title: 'Full-Stack Developer | Problem Solver',
  skills: [
    'React', 'Node.js', 'Express',
    'MongoDB', 'MySQL', 'JavaScript',
    'C++', 'Python', 'Git', 'Docker'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  projects: ['Plan My Shadi', 'AI-Meditation'],
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </section>

        <PortfolioPage />
      </main>
    </>
  );
}