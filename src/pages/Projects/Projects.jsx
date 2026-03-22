import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Plan My Shadi",
    description:
      "A full-stack wedding planning platform with vendor listings, budget tracking, and event scheduling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    link: "https://images.unsplash.com/photo-1519741497674-611481863552",
    githubLink: "https://github.com/Nikhilkr33",
    liveLink: "#",
  },
  {
    title: "AI-Meditation",
    description:
      "AI-powered medicine reminder app with voice alerts using Web Speech API and real-time notifications.",
    tech: ["JavaScript", "Python", "Flask", "Web Speech API"],
    link: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    githubLink: "https://github.com/Nikhilkr33",
    liveLink: "#",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950 min-h-screen py-32">

          <div className="max-w-5xl mx-auto space-y-16">

            {projects.map((project, i) => (
              <Card
                key={i}
                url={project.link}
                title={project.title}
                description={project.description}
                tech={project.tech}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}

          </div>

        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  title,
  description,
  url,
  githubLink,
  liveLink,
  tech,
}) {
  return (
    <div className="w-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col md:flex-row bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition duration-300"
      >

        {/* IMAGE */}
        <div className="md:w-1/2 h-[260px] overflow-hidden">
          <img
            src={url}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              {title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              {description}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-4">
            <a
              href={githubLink}
              target="_blank"
              className="px-4 py-2 bg-blue-500 rounded text-white text-sm hover:scale-105 transition"
            >
              Code
            </a>

            <a
              href={liveLink}
              target="_blank"
              className="px-4 py-2 border border-blue-500 text-blue-400 rounded text-sm hover:bg-blue-500/10 transition"
            >
              Live
            </a>
          </div>

        </div>

      </motion.div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
};